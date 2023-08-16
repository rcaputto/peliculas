import {useForm} from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import ButtonWithLoading from '../../Components/ButtonWithLoading';
import {registroUser} from '../Services/authService';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import { RegistroMessage } from '../../Utils/ErrorMessages';
import { useNavigate } from 'react-router-dom';
import AlertNavigation from '../../Components/AlertNavigation';
import Input from '../../Components/Input'


export default function Register (){
    const{
        register,
        handleSubmit,
        formState: {errors},
    } = useForm ({mode: 'onChange'})

    const [alert, setAlert ]= useState({variant:'', text:'', duration: 0, link:''})
    const [loading, setLoading] = useState(false)


    const onSubmit = async (data) => {
        setLoading(true)
        try{
            console.log ('REGISTRO',data)
            const response = await registroUser(data)
            console.log ('RESPUESTA', response);
            setAlert({
                duration: 3000,
                variant:'success', 
                text:'Su usuario ha sido registrado',
                link:'/login'
            });
            setLoading(false)
        }
        
        catch(e){
            console.log(e);
            setAlert({
                duration: 0,
                variant:'danger', 
                text: RegistroMessage[e.code] || 'Ha ocurrido un error',
            })
            setLoading(false)
            
        }
    }
    

    const registerStyle = {
        display:'flex',
        justifyContent:'center',
        
        
    }
   
    return(
        <div style={registerStyle}>
        <Form
        onSubmit={handleSubmit(onSubmit)}
        style={{width:'50%', marginTop:'4rem'}}
        >
            
            <Input
            type='text' label='Nombre' placeholder='Ingrese su nombre' register= {{...register("nombre", { required: true })}}
            errors = {errors} name= 'nombre' 
            />
            <Input
            type='text' label='Apellido' placeholder='Ingrese su apellido' register= {{...register("apellido", { required: true })}}
            errors = {errors} name= 'apellido'
            />
            <Input
            type='email' label='Email' placeholder='Ingrese su email' register= {{...register("email", { required: true })}}
            errors = {errors} name= 'email'
            />
            <Input
            type='password' 
            label='Password' 
            placeholder='Ingrese su constraseña' 
            register= {{...register("password", { required: true, minLength: 4, maxLength: 12 })}}
            errors = {errors} name= 'password'
            >
                {errors?.password?.type === 'minLength' && 
                <Form.Text style={{color:'red'}}>La contraseña debe contener al menos 4 caracteres </Form.Text>}
                {errors?.password?.type ==='maxLength' && 
                <Form.Text style={{color:'red'}}>La contraseña debe contener menos de 12 caracteres </Form.Text>}
            </Input>
            
        
                <ButtonWithLoading loading={loading} variant="primary" type="submit" style = {{marginTop:'6px', width:'100%'}}>Registrarse</ButtonWithLoading>
                <AlertNavigation
                    {...alert}
                /> 
            </Form> 
        </div>
    )
}