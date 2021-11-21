import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ContainerForm,
  Form,
  Label,
  Input,
  ButtonLogin,
  ButtonRegister,
  ContainerBtn,
  H2,
  Error
} from '../components/FormLoginStyles';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import useValidation from '../hooks/useValidacion';
import validateRegister from '../validation/validateRegister';

const INTIAL_STATE = {
  name: '',
  email: '',
  password: ''
}


const RegisterFrom = () => {

  const [ error, setError ] = useState(false);
  const navigate = useNavigate();

  const { 
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur
   } = useValidation(INTIAL_STATE, validateRegister, handleRegister);

   const { name, email, password } = values;

  function handleRegister() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name
        });
        // ...
        navigate('/login');
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage);
        // ..
      });
    
  }
     
  

  return ( 
    <ContainerForm>
      <H2>Registrarse</H2>
      <Form
        onSubmit={handleSubmit}
        noValidate
      >
          <Label htmlFor="nombre">Nombre</Label>
          <Input 
            type="text" 
            name="name" 
            id="nombre"
            placeholder="Tu nombre..."
            value={name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && <Error>*{errors.name}</Error>}

          <Label htmlFor="email">Email</Label>
          <Input 
            type="email" 
            name="email" 
            id="email"
            placeholder="example@productcrud.com"
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <Error>*{errors.email}</Error>}

          <Label htmlFor="password">Contraseña</Label>
          <Input 
            type="password" 
            name="password" 
            id="password"
            placeholder="********"
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && <Error>*{errors.password}</Error>}

          {error && <Error>{error}</Error>}
        
          <ButtonRegister type="submit">Registrarse</ButtonRegister>

      </Form>
      <ContainerBtn>
        <Link to={'/login'}><ButtonLogin type="submit">Iniciar Sesion</ButtonLogin></Link> 
      </ContainerBtn>
    </ContainerForm> 
  );
  }
export default RegisterFrom;