import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Search from './Search';
import { FirebaseContext } from '../firebase';

const LogoHeader = styled.h1`

  font-size: 3rem;
  color: var(--color-text-primary);
  padding: 2rem;
  margin-bottom: 0;
  &:hover {
    cursor: pointer;
  }
  span {
    color: var(--blue-primary);
  }
  @media (max-width: 745px) { 
    text-align: center;
  }

 
  
`;
const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  width: 100%;
  @media (max-width: 745px) { 
    display: block;
  }
  
`;

const Header = () => {
  const { user } = useContext(FirebaseContext);

  return ( 
    <>
      <HeaderStyled>
        <Link to="/">
          <LogoHeader>Product<span>CRUD</span></LogoHeader>
        </Link>
        {user && (<Search />)}
        
        <Nav />
      </HeaderStyled>
    </>
  );
}
 
export default Header;
