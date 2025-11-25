import Footer from "@/src/Components/Shared/Footer";
import Navbar from "@/src/Components/Shared/NavBar";



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
