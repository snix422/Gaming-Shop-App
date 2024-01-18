import { Container, Typography, TableContainer, TableHead, TableBody, TableCell, TableRow, useStepContext } from "@mui/material"
import MainNavBar from "../Header/NavBar/MainNavBar";
import CategoriesNavBar from "../Header/NavBar/CategoriesNavBar";
import useFetchOrders from "../../hooks/useFetchOrders";

const PaymentHistory = () => {

    const currentUser = JSON.parse(localStorage.getItem('loggedUser'));
    const {data} = useFetchOrders();
    const dataFromHook = data.length ? Object.values(data[0]) : [];
    const orders = dataFromHook.filter(book => book.idUser === currentUser.id);
    console.log(currentUser)
    console.log('test');
    console.log(dataFromHook);
    return(
        <>
        <MainNavBar />
        <CategoriesNavBar />
        <Container sx={{width:'100vw',height:'100vh',display:'flex',flexDirection:'column', alignItems:'center',marginTop:'70px'}}>
        <Typography sx={{fontFamily:'Montserrat', fontSize:'35px'}}>Historia zakupów</Typography>
        <TableContainer  sx={{display:'flex', flexDirection:'column', alignItems:{
            xl:'center',
            lg:'center',
            md:'center',
            sm:'flex-start',
            xs:'flex-start'
        }, marginTop:'50px'}}>
                    <TableHead>
                        <TableRow>
                        <TableCell sx={{width:{
                            xl:'10vw',
                            lg:'10vw',
                            md:'10vw',
                            sm:'5vw',
                            xs:'5vw'
                        }}}>Numer płatności</TableCell>
                        <TableCell sx={{width:{
                            xl:'10vw',
                            lg:'10vw',
                            md:'10vw',
                            sm:'5vw',
                            xs:'5vw'
                        }}}>Data zakupu</TableCell>
                        <TableCell sx={{width:{
                            xl:'10vw',
                            lg:'10vw',
                            md:'10vw',
                            sm:'5vw',
                            xs:'5vw'
                        }}}>Nazwa przedmiotu</TableCell>
                        <TableCell sx={{width:{
                            xl:'10vw',
                            lg:'10vw',
                            md:'10vw',
                            sm:'5vw',
                            xs:'5vw'
                        }}}>Cena przedmiotu</TableCell>
                        <TableCell sx={{width:{
                            xl:'10vw',
                            lg:'10vw',
                            md:'10vw',
                            sm:'5vw',
                            xs:'5vw'
                        }}}>Ilość</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableHead>
        {orders !== undefined ? orders.map((item)=>{
            console.log(item);
            return(
    
                        <TableHead>
                        <TableRow >
                            <TableCell sx={{width:{
                                xl:'10vw',
                                lg:'10vw',
                                md:'10vw',
                                sm:'25vw',
                                xs:'55vw'
                            }}}>{item.idOrder}</TableCell>
                            <TableCell sx={{width:'55vw', marginLeft:'20px'}}>{item.date}</TableCell>
                           
                                    <TableCell sx={{width:{
                                xl:'10vw',
                                lg:'10vw',
                                md:'10vw',
                                sm:'25vw',
                                xs:'55vw'}}}>{item.content.name}</TableCell>
                                    <TableCell sx={{width:{
                                xl:'10vw',
                                lg:'10vw',
                                md:'10vw',
                                sm:'25vw',
                                xs:'55vw'}}}>{item.content.price}</TableCell>
                                <TableCell sx={{width:{
                                xl:'10vw',
                                lg:'10vw',
                                md:'10vw',
                                sm:'25vw',
                                xs:'55vw'}}}>{item.content.quantity}</TableCell>
                
                        </TableRow></TableHead>
                    
            )
        }):<Typography>Brak zamówień</Typography>}
        </TableHead>
        </TableContainer>
        </Container>
        </>
    )
}

export default PaymentHistory