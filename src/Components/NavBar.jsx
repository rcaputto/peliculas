import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AuthContext } from "../Context/AuthContex";
import { useContext } from "react";

export default function NavBar({usuarioLogueado}){
  const BackColor = {
    background: 'rgb(0,22,36)',
    background: 'radial-gradient(circle, rgba(0,22,36,1) 0%, rgba(123,147,241,1) 0%, rgba(17,31,0,1) 99%)'
  }

  const {login, handleLogout} = useContext(AuthContext)

  
    return(
       
        <Navbar expand="lg" className=" sticky-top" style={BackColor}  >
      <Container >
        <Navbar.Brand style={{marginRight:'4rem', fontSize:'28px'}} >
            <Link to='/home' 
            style = {{textDecoration:'none', color:'white', fontWeight:'bold', fontSize:'32px'}}>
            Películas.com
            </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto" style={{marginRight:'4rem'}}>
            <Link to="/home" style = {{textDecoration:'none', color:'white'}}>Inicio</Link>
            </Nav>
            {!login &&
            <>
            <NavDropdown title="Usuarios" id="basic-nav-dropdown" style={{color:'white'}}>
              <NavDropdown.Item ><Link to='/register' style = {{textDecoration:'none', color:'black'}}>Registro</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to='/login' style = {{textDecoration:'none', color:'black'}}>Login</Link></NavDropdown.Item>
            </NavDropdown>
            </>
            }
            {login && 
              <>
              <NavDropdown title={usuarioLogueado} id="basic-nav-dropdown" style={{color:'white'}}>
              <NavDropdown.Item > Perfil  </NavDropdown.Item>
              <NavDropdown.Item > Configuración  </NavDropdown.Item>
              <NavDropdown.Item ><Nav.Link onClick={handleLogout} style={{color:'black'}}> Salir </Nav.Link></NavDropdown.Item>
              </NavDropdown>
              
              </>
            }
        </Navbar.Collapse>
      </Container>
    </Navbar>
       
    )
}