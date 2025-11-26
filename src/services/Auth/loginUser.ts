/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import z from "zod";




const loginValidationZodSchema = z.object({
    email: z.email({
        message: "Email is required",
    }),
    password: z.string("Password is required").min(6, {
        error: "Password is required and must be at least 6 characters long",
    }).max(100, {
        error: "Password must be at most 100 characters long",
    }),
});



export const loginUser =  async(_currentState: any, formData: any): Promise<any> => {
 try {

     const loginData = {
         email: formData.get("email") as string,
         password: formData.get("password") as string,
        }
    const validatedField = loginValidationZodSchema.safeParse(loginData)
            if (!validatedField.success) {
            return {
                success: false,
                errors: validatedField.error.issues.map(issue => {
                    return {
                        field: issue.path[0],
                        message: issue.message,
                    }
                })
            }
        }

   const response = await fetch("http://localhost:5000/api/v1/auth/login",{
    method:"POST",
    body: JSON.stringify(loginData),
    headers:{
        "Content-Type" : "application/json"
    }
   }).then(response => response.json())
   return response

 } catch (error) {
    console.log(error);
 }
};

