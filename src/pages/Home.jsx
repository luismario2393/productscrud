import React, { useContext, useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import styled from '@emotion/styled';
import { FirebaseContext } from '../firebase';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ProductosContainer from '../components/ProductosContainer';


const ContainerHome = styled.div`
  text-align: center;
`;

const H2 = styled.h2`
  color: var(--color-text-primary);
`;

const P = styled.p`
  color: var(--blue-primary);
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
            <H2>Tus productos</H2>
            <P>Aquí podrás ver todos los productos que has creado</P>
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