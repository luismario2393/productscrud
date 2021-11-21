import React from 'react';
import Sidebar from '../components/Sidebar';

const Product = () => {
  return ( 
    <div className="container-app">
      <div className="aside">
        <Sidebar />
      </div>
      <div className="main-section">
        <h2>Desde Producto</h2>
      </div>
    </div>
   );
}
 
export default Product;