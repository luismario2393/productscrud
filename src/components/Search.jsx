import React from 'react';
import styled from '@emotion/styled';
import iconSearch from '../assets/icons/icon-search.svg';



const InputText = styled.input`
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
  background-color: white;
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
  return ( 

      <form >
        <ContenedorSearch>
          <InputText 
            type="text" 
            placeholder="Buscar Producto..."
          />
          <InputSubmit 
            type="button"
            onClick={() => {console.log('sirve')}}
          >Buscar</InputSubmit>
        </ContenedorSearch>
      </form>
  );
}
 
export default Search;
