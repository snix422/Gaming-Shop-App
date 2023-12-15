import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import { useContext, useState } from "react";
import { Typography, Box, Container, TextField, Button, Alert } from "@mui/material"
import CartContext from "../../Context/CartContext";

const AcceptBuy = () => {

    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [nrHouse, setNrHouse] = useState("");
    const [errorMessage, setErrorMessage] = useState({
        phone:'',
        city:'',
        street:'',
        nrHouse:''
    })

        
        const {removeAllItemsCart} = useContext(CartContext);

    const navigate = useNavigate();
    const myItems = JSON.parse(localStorage.getItem('totalItems'));
    console.log(myItems);

    const validationForm = () => {
        setErrorMessage(prev=> {return{...prev, phone:'',city:'',street:'',nrHouse:''}})
        if(phone.length < 9){
            setErrorMessage(prev => {return {...prev,phone:'Pole Telefon wymaga min. 9 liczb'}})
            return 'error'
        }else if(city.length === 0){
            setErrorMessage(prev => {return {...prev,city:'Pole nie może być puste'}})
            return 'error'
        }else if(street.length === 0){
            setErrorMessage(prev => {return {...prev,street:'Pole nie może być puste'}})
            return 'error'
        }else if(nrHouse.length === 0){
            setErrorMessage(prev => {return {...prev,nrHouse:'Pole nie może być puste'}})
            return 'error'
        }
        if(errorMessage.city === "" & errorMessage.nrHouse === "" & errorMessage.phone === "" & errorMessage.street === ""){
            console.log('test');
            return null
        }
        return 'error'
    }
   
    async function buyProduct() {
        const isError = validationForm();
        console.log(errorMessage);
        if(isError === 'error'){
            return
        }
            navigate('/orderproduct');
            const months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień','Maj',
                            'Czewiec','Lipiec','Sierpień','Wrzesień','Październik',
                            'Listopad','Grudzień'];
            const date = new Date();
            const day = date.getUTCDate();
            const year = date.getFullYear();
            const month = months[date.getUTCMonth()];
            const myDate = `${day} ${month} ${year}`;
    
            for(const value of myItems){
                try{
                    const res =  await axios.post('https://gamingshop-4b668-default-rtdb.europe-west1.firebasedatabase.app/Orders.json', {
                    idProduct: value.id,
                    idOrder: Math.floor(Math.random()*10000+1),
                    content: value,
                    date: myDate
                   })
                   }catch(ex){
                    console.log(ex);
                   }
            }
        removeAllItemsCart();
    }

    return(
        <div className="AcceptBuy" style={{display:'flex', alignItems:'center', flexDirection:'column', marginTop:'50px'}}>
            <h3 style={{fontFamily:'Montserrat', fontSize:'25px', marginBottom:'10px', width:"80%", textAlign:'justify'}}>W tytule przelewu prosimy podać nazwę produktu oraz numer telefonu</h3>
            <h3 style={{fontFamily:'Montserrat', fontSize:'25px', marginBottom:'10px', width:"80%", textAlign:'justify'}}>Prosimy kwotę podaną w koszyku przelać na konto bankowe. Nr konta : 4555 4555 4555 4555</h3>
            <h3 style={{fontFamily:'Montserrat', fontSize:'25px', marginBottom:'10px', width:"80%", textAlign:'justify'}}>Po otrzymaniu wpłaty skontatujemy się z Tobą telefonicznie albo smsowo, aby określić szczegóły dostawy</h3>
            <input value={phone} onChange={(e)=>setPhone(e.target.value)} style={{marginTop:'20px',marginBottom:'10px', width:'50%'}} type="text" className="form-control" placeholder="Wpisz nr telefonu"></input>
            {errorMessage.phone ? <Alert severity="error"><Typography sx={{fontFamily:'Montserrat', fontSize:'15px', fontWeight:'bold'}}>{errorMessage.phone}</Typography></Alert> : null}
            <input value={city} onChange={(e)=>setCity(e.target.value)} style={{marginTop:'20px',marginBottom:'10px', width:'50%'}} type="text" className="form-control" placeholder="Wpisz Miasto/Miejscowość"></input>
            {errorMessage.city ? <Alert severity="error"><Typography sx={{fontFamily:'Montserrat', fontSize:'15px', fontWeight:'bold'}}>{errorMessage.city}</Typography></Alert> : null}
            <input value={street} onChange={(e)=>setStreet(e.target.value)} style={{marginTop:'20px',marginBottom:'10px', width:'50%'}} type="text" className="form-control" placeholder="Wpisz nazwę ulicy"></input>
            {errorMessage.street ? <Alert severity="error"><Typography sx={{fontFamily:'Montserrat', fontSize:'15px', fontWeight:'bold'}}>{errorMessage.street}</Typography></Alert> : null}
            <input value={nrHouse} onChange={(e)=>setNrHouse(e.target.value)} style={{marginTop:'20px',marginBottom:'10px', width:'50%'}} type="text" className="form-control" placeholder="Wpisz nr domu"></input>
            {errorMessage.nrHouse ? <Alert severity="error"><Typography sx={{fontFamily:'Montserrat', fontSize:'15px', fontWeight:'bold'}}>{errorMessage.nrHouse}</Typography></Alert> : null}
            <button className="btn btn-success" style={{marginTop:'10px'}} onClick={buyProduct
            }>Akceptuje zakup</button>
            <Link style={{marginTop:'20px', color:'red', fontFamily:'Montserrat', fontSize:'20px'}} to='/'>Powrót na stronę główną</Link>
        </div>
    )}
    

export default AcceptBuy