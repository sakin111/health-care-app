import Footer from "@/src/Components/shared/Footer";
import NavBar from "@/src/Components/shared/NavBar";


const CommonLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <>
        <NavBar/>
            {children}
        <Footer/>    
        </>
    );
};

export default CommonLayout;
