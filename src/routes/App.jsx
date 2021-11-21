import React from 'react';
import styled from '@emotion/styled';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Error404 from '../pages/Error404';
import Product from '../pages/Product';
import NewProducts from '../pages/NewProducts';


function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/login" element={<Login />} />
              <Route exact path="/" element={<Home />} />
              <Route exact path="/productos" element={<Products />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/productos/producto" element={<Product />} />
              <Route exact path="/nuevo-producto" element={<NewProducts />} />
              <Route exact path="*" element={<Error404 />} />
          </Routes>
        </Layout>
    </BrowserRouter>
    </>
   
  );
}

export default App;
