import React, { useContext, useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import styled from '@emotion/styled';
import { FirebaseContext } from '../firebase';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ProductosContainer from '../components/ProductosContainer';

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



const Home = () => {

  const { user } = useContext(FirebaseContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const db = getFirestore();

      const querySnapshot = await getDocs(collection(db, "products"));

      return querySnapshot;
    }
    getProducts().then(querySnapshot => {
      setProducts(querySnapshot.docs.map(doc => { 
        return {
          id: doc.id,
          ...doc.data()
        }
      }));
    });
  } , []);


  console.log(products);
  const { userId } = products;

  return ( 
    <div className="container-app">
      <div className="aside">
        <Sidebar />
      </div>
      <div className="main-section">
      <ContainerHome>

          <>
            <h2>Tus productos</h2>
            <p>Aquí podrás ver todos los productos que has creado</p>
          </>

              
        
        { products.map(product => (
          <div
            key={product.id}
          >
              {user && user.uid === product.userId && (
                <ProductosContainer 
                  product={product}
                />
              )}
          </div>
        ))}
        
          
        </ContainerHome>
      </div>
    </div>
  );
}
 
export default Home;