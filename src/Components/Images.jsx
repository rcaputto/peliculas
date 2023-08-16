import Modal from 'react-bootstrap/Modal'
import {useState} from 'react'
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';


export default function Images ({imagen}){
    const [show1, setShow1] = useState(false);
    const handleClose = () => setShow1(false);
    const handleShow = () => setShow1(true);

    const path = 'https://image.tmdb.org/t/p/w500';     
    return(
        <>
        
        <Row style={{marginLeft:'1px', marginTop:'4rem'}}>
          <Card >
            <Card.Img variant="top" onClick={handleShow} 
            className='w-100 mb-4 rounded'
            src={`${path}${imagen}`} 
            alt="img" />
            </Card>
        </Row>
       <Modal 
        show={show1} 
        onHide = {handleClose}
        size='lg'
        >
            <img 
            className='w-100  rounded' 
            src={`${path}${imagen}`} 
            style={{objectFit:'cover'}}
            alt='img' />
        </Modal>
    
        </>
    )
}
       