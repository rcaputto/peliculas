import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GetById } from '../assets/Services/MovieService';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col'
import Footer from './Footer'

export default function Detalle() {

    const { id } = useParams();
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const request = async () => {
            try {
                const detalle = await GetById(id)
                console.log('DETALLE', detail)
                setDetail(detalle)
                setLoading(false)
            }
            catch (e) {
                console.log('Error', e)
            }
        }; request()
    }, [id])

    const path = 'https://image.tmdb.org/t/p/w500';

    if (loading) {
        return <h4 className='loading'>Cargando...</h4>
    } else {
        return (
            <>
            <Card style={{ padding: '3rem' }}>
            <Col xs={12}   >
                
                    <div style={{ display: 'flex' }}>
                        <Image src={`${path}${detail.poster_path}`} style={{ height: '75vh' }} />
                        <Card.Body style={{ padding: '4rem' }}>
                            <Card.Title style={{ marginBotton: '4rem' }}>
                                {detail.title}
                            </Card.Title>
                            <Card.Text>
                                {detail.overview}
                            </Card.Text>
                            <Button variant="primary" style={{ marginTop: '5rem' }}><Link to={`/images/${id}`} style={{ textDecoration: 'none', color: 'white' }}>Ver imágenes de la película</Link></Button>
                            <Button variant="primary" style={{ marginTop: '5rem', marginLeft: '4rem' }}><Link to={`/reparto/${id}`} style={{ textDecoration: 'none', color: 'white' }}>Reparto</Link></Button>
                        </Card.Body>
                    </div>
                    </Col>
                </Card>
                <Footer/>
            </>
        )
    }
}