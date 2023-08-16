import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import Row from 'react-bootstrap/Row';

import Images from './Images';
import { GetImagesById } from '../assets/Services/MovieService';

export default function MovieImages (){
    const {id} = useParams()
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState (true);
    console.log (images)

    useEffect(() => {
        const request = async ()=>{
            const data = await GetImagesById(id)
            setImages (data.backdrops)
            setLoading (false)
        }
        request ()
    }, [id])

     

    if (loading){
        return <h3 style = {{textAlign:'center'}}>Cargando...</h3>
    }else{
        return (
            <div >
            <h1 style = {{textAlign:'center'}}>Galería de imágenes</h1>
            <h6 style = {{textAlign:'center'}}>Click en cada imagen para ampliar</h6>
            <Row xs = {1} sm ={2} md ={4} l={6}>
            
            {images.map ((image) => (
                <Images
                imagen = {image.file_path}
                
                />
            ))}
            
            </Row>
            </div>
        )
        }

}