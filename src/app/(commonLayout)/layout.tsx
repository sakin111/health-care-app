import Footer from "@/src/components/Shared/Footer";
import Navbar from "@/src/components/Shared/NavBar";



const CommonLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <>
        <Navbar/>
            {children}
        <Footer/>    
        </>
    );
};

export default CommonLayout;
