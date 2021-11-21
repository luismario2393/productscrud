import React from 'react';
import styled from '@emotion/styled';



const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 100vh;
  margin: 2rem 0;
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

const ButtonNewProduct = styled.button`
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

const TextArea = styled.textarea`
  width: 95%;
  background-color: var(--light-secondary);
  border-radius: 1rem;
  height: 20rem;
  padding: 1rem;
  border: none;
`;

const H2 = styled.h2`
  width: 300px;
  color: var(--color-text-secondary);
`;


const NewProducts = () => {
  return ( 
    <ContainerForm>
      <H2>Crea un nuevo producto</H2>
      <Form>
          <Label htmlFor="nombre">Nombre del producto</Label>
          <Input 
            type="text" 
            name="nombre" 
            id="" 
            placeholder="Nombre del producto"
          />
        
          <Label htmlFor="precio">Precio del producto</Label>
          <Input 
            type="number" 
            name="precio" 
            id="" 
            placeholder="12000 "
          />

          <Label htmlFor="precio">Imagen del producto</Label>
          <Input 
            type="file" 
            name="precio" 
            id="" 
            placeholder="12000 "
          />

          <Label htmlFor="descripcion">Descripción del producto</Label>
          <TextArea></TextArea>
        
          <ButtonNewProduct type="submit">Crear Producto</ButtonNewProduct>

      </Form>
      
    </ContainerForm>
  );
}
 
export default NewProducts;