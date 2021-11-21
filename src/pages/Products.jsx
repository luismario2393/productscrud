import React from 'react';
import Sidebar from '../components/Sidebar';

const Products = () => {
  return ( 
    <div className="container-app">
      <div className="aside">
        <Sidebar />
      </div>
      <div className="main-section">
        <h2>Desde Productos</h2>
      </div>
    </div>

   );
}
 
export default Products;