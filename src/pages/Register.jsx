import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';


const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
`;
const Form = styled.form`
  display: flex;  
  flex-direction: column;
  gap: 1rem;
  width: 300px;
`;
const Label = styled.label`
  color: var(--color-text-primary);
`;
const Input = styled.input`
  border: none;
  width: 95%;
  padding: 2rem;
  background-color: var(--light-secondary);
  border-radius: 1rem;

  &::placeholder {
    color: var(--color-text-primary);
    font-family: var(--font);
  }
`;

const ButtonRegister = styled.button`
  border: none;
  width: 95%;
  padding: 2rem;
  background-color: var(--light-secondary);
  border-radius: 1rem;
  margin-top: 3rem;
  font-family: var(--font);
  font-size: 1.8rem;
  color: white;
  background-color: var(--blue-primary);
  cursor: pointer;

  &:hover {
    background-color: var(--blue-secondary);
    transition: .3s ease;
  }
`;
const ButtonLogin = styled.button`
  border: none;
  width: 95%;
  padding: 2rem;
  background-color: var(--light-secondary);
  border-radius: 1rem;
  margin-top: 3rem;
  font-family: var(--font);
  font-size: 1.8rem;
  color: white;
  background-color: var(--blue-secondary);
  cursor: pointer;;

  &:hover {
    background-color: white;
    border: 1px solid var(--blue-secondary);
    color: var(--blue-secondary);
    transition: .3s ease;
  }
`;
const ContainerBtnLogin = styled.div`
  width: 30rem;
`;

const H2 = styled.h2`
  width: 300px;
  color: var(--color-text-secondary);
`;


const Register = () => {
  return ( 
    <ContainerForm>
      <H2>Registrarse</H2>
      <Form>
          <Label htmlFor="nombre">Nombre</Label>
          <Input 
            type="text" 
            name="nombre" 
            id="" 
            placeholder="Tu nombre..."
          />
          
          <Label htmlFor="email">Email</Label>
          <Input 
            type="text" 
            name="email" 
            id="" 
            placeholder="example@productcrud.com"
          />
        
          <Label htmlFor="password">Contraseña</Label>
          <Input 
            type="password" 
            name="password" 
            id="" 
            placeholder="********"
          />
        
          <ButtonRegister type="submit">Registrarse</ButtonRegister>

      </Form>
      <ContainerBtnLogin>
        <Link to={'/login'}><ButtonLogin type="submit">Iniciar Sesion</ButtonLogin></Link> 
      </ContainerBtnLogin>
    </ContainerForm>
  );
}
 
export default Register;