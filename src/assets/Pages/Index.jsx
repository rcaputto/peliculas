import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import './Index.css'

export default function Index (){

    return (
        <>
            <h1> Bienvenidos al portal de películas</h1>
            <Button><Link to= '/' className="boton"> Películas </Link></Button>
            <Button><Link to= '/series' className="boton"> Series </Link></Button>
        </>
    )
}