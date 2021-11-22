import React, { useContext } from 'react';
import styled from '@emotion/styled';
import iconLogin from '../assets/icons/login.svg';
import iconUser from '../assets/icons/user.svg';
import iconLogout from '../assets/icons/logout.svg';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../firebase';
import { getAuth, signOut } from "firebase/auth";

const Aside = styled.aside`
  min-height: 100%;
  padding: 2rem;
  box-shadow: 0px 1.5px 5px 0px rgba(0,0,0,0.75);
  margin-top: 2px;

  h2 {
    margin-top: 0;
    color: var(--color-text-primary);

    span {
      color: var(--blue-primary);
    }
  }

  @media (max-width: 745px) {
    min-height: 100%;
  }

`;

const BtnNewProject = styled.button`
  border: none;
  width: 22rem;
  padding: 2rem;
  font-family: var(--font);
  font-size: 1.8rem;
  background-color: var(--orange-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
  border-radius: 1rem;
  &:hover {
    background-color: var(--orange-secondary);
    transition: .3s ease;
  }
  span {
    width: 3rem;
    height: 3rem;
    border: 1px solid white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
  }
`;
const ContainerBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14rem;
  @media (max-width: 745px) {
    gap: 2rem;
  }
`;
const ContainerBtns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14rem;
  @media (max-width: 745px) {
    flex-direction: row;
    gap: 2rem;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
const BtnLogin = styled.button`
  border: none;
  width: 22rem;
  padding: 2rem;
  border: none;
  padding: 2rem;
  font-family: var(--font);
  font-size: 1.8rem;
  background-color: var(--blue-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
  border-radius: 1rem;
  &:hover {
    background-color: var(--blue-secondary);
    transition: .3s ease;
  }
`;
const BtnRegister = styled.button`
  border: none;
  width: 22rem;
  padding: 2rem;
  border: none;
  padding: 2rem;
  font-family: var(--font);
  font-size: 1.8rem;
  background-color: var(--blue-secondary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
  border-radius: 1rem;
  &:hover {
    background-color: var(--blue-primary);
    transition: .3s ease;
  }
`;
const BtnLogout = styled.button`
  border: none;
  width: 22rem;
  padding: 2rem;
  border: none;
  padding: 2rem;
  font-family: var(--font);
  font-size: 1.8rem;
  background-color: var(--blue-secondary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
  border-radius: 1rem;
  &:hover {
    background-color: var(--blue-primary);
    transition: .3s ease;
  }
`;

const Sidebar = () => {
  const { user } = useContext(FirebaseContext);

  const handleSingOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log('Se Cerro la seccion')
    }).catch((error) => {
      console.log(error)
    });
  }

  return ( 
      <Aside>
        <ContainerBtn>
          {user ? (
            
            <>
              <h2>Hola: <span>{''}{user.displayName}</span></h2>
              <ContainerBtns>
                <div>
                  <Link to="/nuevo-producto">
                    <BtnNewProject type="button"><span>+</span>Nuevo Producto</BtnNewProject>
                  </Link>
                </div>
                <BtnLogout
                  onClick={handleSingOut}
                >
                  <span>
                    <img src={iconLogout} alt="" />
                  </span>
                  Cerrar Sesión
                </BtnLogout>
              </ContainerBtns>
            </>

          ) : (
            <>
              <h2>Bienvenido</h2>
              <Link to={'/login'}>
                <BtnLogin 
                >
                  <span>
                    <img src={iconLogin} alt="" />
                  </span>
                  Iniciar Sesión
                </BtnLogin>
              </Link>

              <Link to={'/register'}>
                <BtnRegister>
                  <span>
                    <img src={iconUser} alt="" />
                  </span>
                  Registrarse
                </BtnRegister>
              </Link>
            </>
          )}

          

        </ContainerBtn>
      </Aside>
   );
}
 
export default Sidebar;