import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { GetCreditById } from '../assets/Services/MovieService';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

import Footer from './Footer';


export default function Detalle (){

    const {id} = useParams();
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(true);
    console.log ('DETALLE', detail)
    
    useEffect ( () => {
        const request = async ()=> {
            try{
            const detalle = await GetCreditById(id)
            const cast = detalle.cast
            setDetail (cast)
            setLoading(false)
            }
            catch(e){
                console.log('Error', e)
            }
        };request()
    },[id])

    const path = 'https://image.tmdb.org/t/p/w500'; 

    if(loading){
        return <h4 className='loading'>Cargando...</h4>
    }else{
        return (
            <>

            <Card.Title  style={{textAlign:'center', margin:'12px', fontSize:'32px'}}>Reparto</Card.Title>
            <Row xs = {1} sm ={2} md ={3} lg={4}>
            {detail.map((cast) => (


      <Card style={{margin:'8px', width:'250px'}}>
      <Card.Img variant="top" src={`${path}${cast.profile_path}`} alt ='imagen' />
        <Card.Body>
          <Card.Title>{cast.name}</Card.Title>
          
        </Card.Body>
      </Card>
      ))}
      </Row>
      <Footer/>
        </>
        )
    }

}