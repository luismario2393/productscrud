import React, { useContext, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import iconSearch from '../assets/icons/icon-search.svg';
import { FirebaseContext } from '../firebase';
import { collection, getDocs, getFirestore } from "firebase/firestore";




const InputText = styled.input`
  background: transparent;
  border-radius: 2.5rem;
  border: none;
  width: 100%;
  outline: none;
  &::placeholder {
    color: var(--color-text-primary);
    font-family: var(--font);
  }
  
  
  
`;

const InputSubmit = styled.button`
  height: 2rem;
  width: 2rem;
  display: block;
  background-size: cover;
  background-image: url(${iconSearch});
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  text-indent: -9999px;
  &:hover {
    cursor: pointer;
  }

`;
const ContenedorSearch = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--color-text-primary);
  padding: 1rem;
  min-width: 30rem;
  border-radius: 2.5rem;
  &:hover {
    border: 1px solid var(--color-text-secondary);
    transition: .3s ease;
  }
  @media (max-width: 845px) {
    min-width: 20rem;
    transition: .3s ease;
  }
  @media (max-width: 745px) { 
    margin: 2rem;
  }
`;


const Search = () => {

  const { user } = useContext(FirebaseContext);

  const [searchValue, setSearchValue] = useState('');
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



  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  }

  let SearchProducts = [];

  if (searchValue <= 1) {
    SearchProducts = products;
  } else {
    SearchProducts = products.filter(product => {
      const productText = product.name.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return productText.includes(searchText);
    })
  }

  

  console.log(SearchProducts);

  


  return ( 

      <form >
        {user  && (

          <ContenedorSearch>
            <InputText 
              type="text" 
              placeholder="Buscar Producto..."
              value={searchValue}
              onChange={handleSearch}
            />
            
            <InputSubmit 
              type="button"
            >Buscar</InputSubmit>
          </ContenedorSearch>
        )}
      </form>
  );
}
 
export default Search;
