import { useState, useEffect } from "react"
import GetAll from "../Services/MovieService";
import MovieCard from "../../Components/MovieCard"
import './Peliculas.css'
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

export default function Peliculas(){
    const [movies, setMovies]= useState([]);
    const [loading, setLoading] = useState(true);

    console.log('Películas', movies )

    useEffect(() => {
        const request = async () => {
            try{
                const data = await GetAll()
                console.log ('Datos', data)
                setMovies(data.results)
                setLoading(false)
            }
            catch(e){
                console.log ("Error", e)
            }
        }
        request ()
    }, [])

    if(loading){
        return(
            <h3 className="loading">Estamos buscando las películas</h3>
        )
    }else{

        return(
            <div >
                <Card.Title style={{ textAlign:'center', margin:'12px', fontSize:'32px' }} >Listado de películas</Card.Title>
                <Row xs = {1} sm ={2} md ={3} lg={4} >
                {movies?.map((pelicula) => (
                    <MovieCard
                    id={pelicula.id}
                    title={pelicula.original_title}
                    imagen=  {pelicula.poster_path}
                    
                    />
                ))}
                </Row>
            </div>
        )
    }

}