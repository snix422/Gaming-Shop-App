import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'

const AcceptBuy = () => {

    const navigate = useNavigate();
    const myItems = JSON.parse(localStorage.getItem('totalItems'));
    console.log(myItems);
   
    async function buyProduct() {
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
      
    }

    return(
        <div className="AcceptBuy" style={{display:'flex', alignItems:'center', flexDirection:'column', marginTop:'50px'}}>
            <h3 style={{fontFamily:'Montserrat', fontSize:'25px', marginBottom:'10px'}}>W tytule przelewu prosimy podać nazwę produktu oraz numer telefonu</h3>
            <h3 style={{fontFamily:'Montserrat', fontSize:'25px', marginBottom:'10px'}}>Prosimy kwotę podaną w koszyku przelać na konto bankowe. Nr konta : 4555 4555 4555 4555</h3>
            <h3 style={{fontFamily:'Montserrat', fontSize:'25px', marginBottom:'10px'}}>Po otrzymaniu wpłaty skontatujemy się z Tobą telefonicznie albo smsowo, aby określić szczegóły dostawy</h3>
            <input style={{marginTop:'20px',marginBottom:'10px', width:'50%'}} type="text" className="form-control" placeholder="Wpisz nr telefonu"></input>
            <input style={{marginTop:'20px',marginBottom:'10px', width:'50%'}} type="text" className="form-control" placeholder="Wpisz Miasto/Miejscowość"></input>
            <input style={{marginTop:'20px',marginBottom:'10px', width:'50%'}} type="text" className="form-control" placeholder="Wpisz nazwę ulicy"></input>
            <input style={{marginTop:'20px',marginBottom:'10px', width:'50%'}} type="text" className="form-control" placeholder="Wpisz nr domu"></input>
            <button className="btn btn-success" style={{marginTop:'10px'}} onClick={buyProduct
            }>Akceptuje zakup</button>
            <Link style={{marginTop:'20px', color:'red', fontFamily:'Montserrat', fontSize:'20px'}} to='/'>Powrót na stronę główną</Link>
        </div>
    )}
    

export default AcceptBuy