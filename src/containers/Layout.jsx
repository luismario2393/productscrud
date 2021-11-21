import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Layout = ({children}) => {
  return ( 
    <>
      <Header />
      {children}
    </>
   );
}
 
export default Layout;
