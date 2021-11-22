import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../firebase';



const NavContainer = styled.nav`
  display: grid;
  column-gap: 2rem;
  width: 100%;
  padding:  0 1rem 0 2rem;
  place-items: center;

  @media (max-width: 745px) {
    padding-bottom: 1rem;
  }

`;

const Ul = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;

  li a{
    color: var(--color-text-primary);
    font-size: 1.8rem;

    &:hover {
    cursor: pointer;
    color: var(--color-text-secondary);
    transition: .3s ease;
    }
  }

`;



// activo cuando se va hacia la luna


const Nav = () => {

  
  const { user } = useContext(FirebaseContext);

  

  return (
    <NavContainer>
      {user && (
        <Ul>
          <li>
            <Link to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/productos">
              Productos
            </Link>
          </li>
        </Ul>
      )}



    </NavContainer>
  );
}

export default Nav;
