import { useState, useEffect } from "react"
import  {TvSeriesGetAll}   from "../Services/TvService";
import MovieCard from "../../Components/MovieCard";
import {Card,Row }from 'react-bootstrap'


export default function TvSeries(){
    const [series, setSeries]= useState([]);
    const [loading, setLoading] = useState(true);

    console.log('SERIES', series )

    useEffect(() => {
        const request = async () => {
            try{
                const data = await TvSeriesGetAll()
                console.log ('Datos', data)
                setSeries(data.results)
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
            <h3 className="loading">Estamos buscando las series</h3>
        )
    }else{

        return(
            <div >
                <Card.Title style={{ textAlign:'center', margin:'12px', fontSize:'32px' }} >Listado de series</Card.Title>
                <Row xs = {1} sm ={2} md ={3} lg={4} >
                {series?.map((serie) => (
                    <MovieCard
                    id={serie.id}
                    title={serie.original_title}
                    imagen=  {serie.poster_path}
                    
                    />
                ))}
                </Row>
            </div>
        )
    }

}