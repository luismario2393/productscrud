import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { FirebaseContext } from '../firebase';



const NavContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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

const DivSvg = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
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

const Input = styled.input`
  display: none;
  &:checked + label::after {
    left: 20px;
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



      <DivSvg>

        <Svg>
          <BsFillSunFill />
        </Svg>

        <ContentInput>
          <Input type="checkbox" name="" id="switch" />
          <Label htmlFor="switch"></Label>
        </ContentInput>

        <Svg>
          <BsMoonFill />
        </Svg>


      </DivSvg>


    </NavContainer>
  );
}

export default Nav;
