
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { getDefaultDashboardRoute, getRouteOwner, isAuthRoute, UserRole } from './lib/auth-utils';
import jwt, { JwtPayload } from 'jsonwebtoken';


export function proxy(request: NextRequest) {
 const pathname = request.nextUrl.pathname
 const accessToken =  request.cookies.get("accessToken")?.value || null
 let userRole: UserRole | null = null;
 if(accessToken){
  const verifyToken : JwtPayload | string = jwt.verify(accessToken, process.env.JWT_SECRET as string)
    if(typeof verifyToken === "string"){
     cookieStore.delete("accessToken")
     cookieStore.delete("refreshToken")
     return NextResponse.redirect(new URL('/login', request.url))
    }
    userRole = verifyToken.role
 }

 const routerOwner = getRouteOwner(pathname)
 const isAuth = isAuthRoute(pathname)
    if (accessToken && isAuth) {
        return NextResponse.redirect(new URL(getDefaultDashboardRoute(userRole as UserRole), request.url))
    }
   if (routerOwner === null) {
        return NextResponse.next();
    }
        if (!accessToken) {
        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("redirect", pathname);
        return NextResponse.redirect(loginUrl);
    }


    if (routerOwner === "COMMON") {
        return NextResponse.next();
    }


    if (routerOwner === "ADMIN" || routerOwner === "DOCTOR" || routerOwner === "PATIENT") {
        if (userRole !== routerOwner) {
            return NextResponse.redirect(new URL(getDefaultDashboardRoute(userRole as UserRole), request.url))
        }
    }

  return NextResponse.next()
}
 

export const config = {
   matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.well-known).*)'
  ],
}