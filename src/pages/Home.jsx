import React, { useContext } from 'react';
import Sidebar from '../components/Sidebar';
import styled from '@emotion/styled';
import aguilaOriginal from '../assets/image/aguila-cerveza.png';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../firebase';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h2 {
    color: var(--color-text-secondary);
  }

  p {
    color: var(--color-text-primary);
  }

`;
const ContainerHome = styled.div`
  text-align: center;
`;

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

const Home = () => {

  const { user } = useContext(FirebaseContext);


  return ( 
    <div className="container-app">
      <div className="aside">
        <Sidebar />
      </div>
      <div className="main-section">
        {user ? (
          <>
          <ContainerHome>
            <h2>Tus productos</h2>
            <p>Aquí podrás ver todos los productos que has creado</p>
            <ContainerProduct>
              
              <ContainerImg>
                <p>Imagen</p>
                <img src={aguilaOriginal} alt="Aguila Original" />
              </ContainerImg>

              <ContainerText>
                <p>Nombre</p>
                <p>Aguila Original</p>
              </ContainerText>

              <ContainerText>
                <p>Precio</p>
                <p>$ 3000</p>
              </ContainerText>
              
              <ContainerTextArea>
                <p>Descripción</p>
                <p>
                  Es una cerveza de alta...
                  {/* Es una cerveza de alta fermentación, con una fuerte
                  característica de color rojo, con una nota de amargor
                  y una nota de alcohol. */}
                  <Link to={'productos/producto'}>Ver más</Link>
                </p>
              </ContainerTextArea>

              <ContainerButton>
                <Link to={'editar-producto'}><button type="button">Editar</button></Link> 
                <button type="button">Eliminar</button>
              </ContainerButton>
            </ContainerProduct>
            

          </ContainerHome>

         
          </>
        ) : (
          <>
            <Container>
              <h2>Bienvenido</h2>
              <p>
                Crea una cuenta y empieza a crear tus productos.
              </p>
            </Container>
          </>
        )}
      </div>
    </div>
  );
}
 
export default Home;