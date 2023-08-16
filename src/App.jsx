import Home from "./assets/Pages/Home"
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import Detalle from "./Components/Detalle"
import Reparto from "./Components/Reparto"
import NavBar from "./Components/NavBar"
import MovieImages from "./Components/MovieImages"
import Login from "./assets/Pages/Login"
import Register from "./assets/Pages/Register"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react"
import AuthProvider from "./Context/AuthContex"


function App() {
  const [userLogued, setUserLogued]= useState('')
  const usuarioLogueado = userLogued.name
  console.log ('USUARIOLOGUEADO', usuarioLogueado)
  return (
    <>
    <Router>
      <AuthProvider>
      <NavBar usuarioLogueado = {usuarioLogueado} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/> 
        
        <Route path="/detail/:id" element={<Detalle/>}/>
        <Route path="/images/:id" element={<MovieImages/>}/>
        <Route path="/reparto/:id" element={<Reparto/> }/>
        <Route path="/login" element={<Login setUserLogued = {setUserLogued}/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      </AuthProvider>
    </Router>
  </>
  )
}
export default App
