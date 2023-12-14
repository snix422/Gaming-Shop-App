import { Container, Typography,} from "@mui/material"
import ProductItem from "../ProductItem/ProductItem"
import useFetch from "../../hooks/useFetch"

const Recommends = () => {
    
    const {data} = useFetch();
    const dataFromHook = data.length ? Object.values(data[0]) : [];
    const books = dataFromHook.filter(book => book.polecane === true);
    
    return(
        <Container sx={{display: 'flex', flexDirection:'column', justifyContent: 'center',alignItems:'center', width:{
            xl:'80vw',
            lg:'80vw',
            md:'80vw',
            sm:'90vw',
            xs:'95vw'
        }, minHeight: '40vh', backgroundColor:'white', borderRadius:'10px', marginTop:'10px', flexWrap: 'wrap'}}>
            <Typography variant={'h4'} sx={{marginBottom:'20px', marginTop:'10px', fontFamily:'Montserrat', fontSize:'30px'}}>Polecane</Typography>
            <Container sx={{display:'flex', justifyContent: 'center', gap:'20px', flexWrap: 'wrap'}}>
            { books !== null ? books.map((product)=>{
                return(
                 <ProductItem product={product} />)
            })
            : null}
            </Container>
        </Container>
    )
}

export default Recommends