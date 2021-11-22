import React, { useState, useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../firebase';
import { getFirestore, doc, getDoc, collection } from "firebase/firestore";

const ContainerProduct = styled.div`
  background-color: var(--light-primary);
  padding: 2rem;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;;
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
    width: 30rem;
    height: 30rem;
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
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  margin-top: 5rem;

  button {
    border: none;
    color: white;
    font-size: 1.6rem;
    font-family: var(--font);
    padding: 3rem;
    width: 15rem;
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





const Product = () => {

  const [ product, setProduct ] = useState({});

  const idPage = window.location.pathname.split('/')[3];
  const { firebase, user } = useContext(FirebaseContext);
  
  useEffect(() => {
    const getProducts = async () => {
      const db = getFirestore();

      const querySnapshot = doc(collection(db, "products"), idPage);
      const product = await getDoc(querySnapshot);
      if(product.exists) {
        setProduct(product.data());
      } else {
        console.log('No existe');
      }
    };
    getProducts();
    
  } , [idPage]);

  console.log(product);
  const { name, price, description, urlImage, id } = product;


  return ( 
    <div>
      <ContainerProduct>
        <div>
          <ContainerImg>
            <p>Imagen</p>
            <img src={urlImage} alt="Aguila Original" />
          </ContainerImg>
        </div>
        <div>
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
              {description}
              <Link to={`productos/producto/${id}`}>Ver más</Link>
            </p>
          </ContainerTextArea>
          <ContainerButton>
            <Link to={`/productos/editar-producto/${idPage}`}><button type="button">Editar</button></Link> 
            <button type="button">Eliminar</button>
          </ContainerButton>
        </div>
      </ContainerProduct>


    </div>


  );
}
 
export default Product;