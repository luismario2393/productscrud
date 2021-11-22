import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { getFirestore, doc, deleteDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';



const ContainerProduct = styled.div`
  background-color: var(--light-primary);
  padding: 2rem;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 1rem;
  margin-bottom: 2rem;
  @media (max-width: 550px) { 
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  }

`;
const ContainerImg = styled.div`
  border-right: 1px solid var(--color-text-primary);
  @media (max-width: 550px) { 
    border-right: none;
    border-bottom: 1px solid var(--color-text-primary);
  }
  p {
    font-weight: bold;
    color: var(--color-text-secondary);
  }
  img {
    width: 5rem;
    height: 5rem;
    border: 1px solid var(--light-secondary);
    border-radius: 0.5rem;
  }

`;

const ContainerText = styled.div`
  border-right: 1px solid var(--color-text-primary);
  @media (max-width: 550px) { 
    border-right: none;
    border-bottom: 1px solid var(--color-text-primary);
  }
  p {
    font-weight: bold;
    color: var(--color-text-secondary);
  }
  p:last-of-type {
    color: var(--color-text-primary);
    font-weight: 400;
  }
`;

const ContainerTextArea = styled.div`
  border-right: 1px solid var(--color-text-primary);
  @media (max-width: 550px) { 
    border-right: none;
    border-bottom: 1px solid var(--color-text-primary);
  }
  p {
    font-weight: bold;
    color: var(--color-text-secondary);
  }
  p:last-of-type {
    color: var(--color-text-primary);
    font-weight: 400;
    line-height: 1;

    a {
      color: var(--color-text-secondary);
    }
    a:hover{
      border-bottom: 1px solid var(--color-text-secondary);
      transition: .3s ease;
    }
  }
`;

const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  button {
    border: none;
    color: white;
    font-size: 1.6rem;
    font-family: var(--font);
    padding: 1rem;
    width: 10rem;
    border-radius: 0.5rem;
    cursor: pointer;
  }
  a button:first-of-type {
    background-color: var(--blue-primary);
  }
  button:hover {
    color: var(--color-text-secondary);
    transition: 0.3s ease; 
  }
  button:last-of-type {
    background-color: #f33b3b;
    align-items: center;
  }
`;

const Productos = ({product}) => {

  const navigate = useNavigate();

  const { urlImage, name, price, description, id } = product;

  const handleDelete = async (id) => {
    const db = getFirestore();

    await deleteDoc(doc(db, "products", id));
    window.location.href = window.location.href;
  }

  return ( 
    <>
      <ContainerProduct>
        
        <ContainerImg>
          <p>Imagen</p>
          <img src={urlImage} alt="Aguila Original" />
        </ContainerImg>

        <ContainerText>
          <p>name</p>
          <p>{name}</p>
        </ContainerText>

        <ContainerText>
          <p>Precio</p>
          <p>$ {price}</p>
        </ContainerText>
        
        <ContainerTextArea>
          <p>Descripción</p>
          <p>
            {description.slice(0, 5)}{'...'}
            <Link to={`productos/producto/${id}`}>Ver más</Link>
          </p>
        </ContainerTextArea>

        <ContainerButton>
          <Link to={`/productos/editar-producto/${id}`}><button type="button">Editar</button></Link> 
          <button type="button"
            onClick={() => handleDelete(id)}
          >Eliminar</button>
        </ContainerButton>
      </ContainerProduct>

    </>

  );
}
 
export default Productos;