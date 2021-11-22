import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import RegisterFrom from '../pages/RegisterFrom';
import Error404 from '../pages/Error404';
import Product from '../pages/Product';
import NewProducts from '../pages/NewProducts';
import EditProduct from '../pages/EditProduct';
import firebase, { FirebaseContext } from '../firebase';
import useAuthentication from '../hooks/useAuthentication';
import Products from '../pages/Products';



function App() {
  const user = useAuthentication();



  return (
    <>
      <FirebaseContext.Provider value={{firebase, user}}> 
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/" element={<Home />} />
              <Route exact path="/register" element={<RegisterFrom />} />
              <Route exact path="/productos" element={<Products />} />
              <Route path="/productos/producto/:id" element={<Product />} />
              <Route exact path="/nuevo-producto" element={<NewProducts />} />
              <Route exact path="/productos/editar-producto/:id" element={<EditProduct />} />
              <Route exact path="*" element={<Error404 />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </FirebaseContext.Provider>
    </>
   
  );
}

export default App;
