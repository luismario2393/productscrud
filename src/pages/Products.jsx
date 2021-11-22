import React, { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../firebase';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ProductosContainer from '../components/ProductosContainer';
import styled from '@emotion/styled';

const Container = styled.div`
  padding: 2rem;
  height: 100vh;
`;



const Products = () => {
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

  return ( 
    <Container>
      
      {products.map(product => (
        user && user.uid === product.userId && (
          <ProductosContainer product={product} key={product.id} />
        )
      ))}
    </Container>
   );
}
 
export default Products;