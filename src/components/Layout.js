import { Box } from "@mui/material"
import Footer from "./Footer/Footer"
import MainNavBar from "./Header/NavBar/MainNavBar"
import Bestsellers from "./MainContent/Bestsellers"
import VisitedComponent from "./MainContent/VisitedComponent"
import Recommends from "./MainContent/Recommends"
import Promotions from "./MainContent/Promotions"
import CategoriesNavBar from "./Header/NavBar/CategoriesNavBar"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';



const Layout = () => {

    const visitedItem = localStorage.getItem('visitedItem');
    
    return(
        <Box sx={{backgroundColor: 'rgb(240, 238, 238)'}}>
        <MainNavBar />
        <CategoriesNavBar />
        {visitedItem && <VisitedComponent></VisitedComponent>}
        <Recommends />
        <Promotions />
        <Bestsellers />
        <Footer />
        <ToastContainer />
        </Box>  
    )
}

export default Layout