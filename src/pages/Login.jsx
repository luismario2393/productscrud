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
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";

import useValidation from '../hooks/useValidacion';
import validateLogin from '../validation/validateLogin';

const INTIAL_STATE = {
  email: '',
  password: ''
}


const Login = () => {

  const [ error, setError ] = useState(false);
  const navigate = useNavigate();

  const { 
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur
   } = useValidation(INTIAL_STATE, validateLogin, handleLogin);

   const { email, password } = values;

  function handleLogin() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => { 
        // Signed in
        const user = userCredential.user;
        // ...
        navigate('/');
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
      <H2>Iniciar Sesión</H2>
      <Form
        onSubmit={handleSubmit}
        noValidate
      >
          <Label htmlFor="email">Email</Label>
          <Input 
            type="text" 
            name="email" 
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
            placeholder="********"
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && <Error>*{errors.password}</Error>}

          {error && <Error>{error}</Error>}
          <ButtonLogin type="submit">Iniciar sesión</ButtonLogin>

      </Form>
      <ContainerBtn>
        <Link to={'/register'}><ButtonRegister type="submit">Registrarse</ButtonRegister></Link> 
      </ContainerBtn>
    </ContainerForm>
  );
}
 
export default Login;