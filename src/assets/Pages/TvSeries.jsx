import { useState, useEffect } from "react"
import  TvSeriesGetAll   from "../Services/MovieService";
import MovieCard from "../../Components/MovieCard"


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
            <h3 className="loading">Estamos buscando las películas</h3>
        )
    }else{

        return(
            <div>
                <h1 className="title">Trending</h1>
                {series?.map((pelicula) => (
                    <MovieCard
                    id={pelicula.id}
                    title={pelicula.original_title}
                    imagen=  {pelicula.poster_path}
                    
                    />
                ))}
            </div>
        )
    }

}