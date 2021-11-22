import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Search from '../components/Search';
import { FirebaseContext } from '../firebase';
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";

const Div = styled.div` 
  background: var(--dark-primary);
`;

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

const DivSvg = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  align-items: center;
  @media (max-width: 745px) {
    padding-bottom: 2rem;
    margin: 0 auto;
  } 
    
  
  img {
    width: 1.8rem;
    height: 1.8rem;
  }
`;
const Svg = styled.div`
  display: flex;
  align-items: center;
  path {
    fill: var(--blue-primary);
    width: 100%;
  }
`;
const ContentInput = styled.div`
	position: relative;
	margin-bottom: 0px;
	padding:0 1rem;
	display: flex;
  align-items: center;
`;
const Label = styled.label`
  display: inline-block;
  width: 40px;
  height: 20px;
  border-radius: 100px;
  border: 1px solid var(--blue-primary);
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 100px;
    background-color: var(--blue-primary);
    transition: .3s ease;
    position: absolute;
    top: 1.5px;
    left: 3px;
  }

`;
const LabelDark = styled.label`
  display: inline-block;
  width: 40px;
  height: 20px;
  border-radius: 100px;
  border: 1px solid var(--blue-primary);
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 100px;
    background-color: var(--blue-primary);
    transition: .3s ease;
    position: absolute;
    top: 1.5px;
    left: 20px;
  }

`;

const Input = styled.input`
  display: none;
  &:checked + label::after {
    left: 20px;
  }
`;

const Layout = ({children}) => {
  const { user } = useContext(FirebaseContext);

  const [ darkMode, setDarkMode ] = useState(false);

  console.log(darkMode);

  return ( 
    <>
      { darkMode ? (
        <Div>
          
          <HeaderStyled>
            <Link to="/">
              <LogoHeader>Product<span>CRUD</span></LogoHeader>
            </Link>
            {user && (<Search />)}
            <Nav />
            <DivSvg>

              <Svg
                onClick={() => setDarkMode(!darkMode)}
              >
                <BsFillSunFill />
              </Svg>

              <ContentInput>
                <Input 
                  type="checkbox" 
                  name="" 
                  id="switch"
                  onChange={() => setDarkMode(!darkMode)}
                />
                <LabelDark htmlFor="switch"></LabelDark>
              </ContentInput>

              <Svg>
                <BsMoonFill />
              </Svg>

            </DivSvg>
          </HeaderStyled>
    
          {children}
        </Div>

      ) : (

        <>
          <HeaderStyled>
            <Link to="/">
              <LogoHeader>Product<span>CRUD</span></LogoHeader>
            </Link>
            {user && (<Search />)}
            
            <Nav />
            <DivSvg>

              <Svg>
                <BsFillSunFill />
              </Svg>

              <ContentInput>
                <Input 
                  type="checkbox" 
                  name="" 
                  id="switch"
                  onChange={() => setDarkMode(!darkMode)}
                />
                <Label htmlFor="switch"></Label>
              </ContentInput>

              <Svg>
                <BsMoonFill />
              </Svg>

            </DivSvg>
            
          </HeaderStyled>
          {children}
        </>
      ) }
        
    
    </>
   );
}
 
export default Layout;
