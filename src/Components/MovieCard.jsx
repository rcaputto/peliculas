import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

export default function MovieCard({id,title, description, imagen}){

    const path = 'https://image.tmdb.org/t/p/w500';
    

    return (
      
      
        <Row style={{marginLeft:'1px', marginTop:'1rem'}}>
          <Card >
            <Card.Img  src={`${path}${imagen}`} style = {{height: '65vh', objectFit:'cover'}} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
              <Button variant="primary"><Link to={`/detail/${id}`} style = {{textDecoration:'none', color:'white'}}>Ver Detalle</Link></Button>
            </Card.Body>
          </Card>
        </Row>
      
    
      
      
    
    );
}