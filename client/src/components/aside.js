import React from 'react';
import Categories from './categories';
import Controlls from './controlls';
import '../styles/aside.css';

// render page controlls and categories
const Aside = () => {
  return (
    <div className="aside col-md-4">
      <Controlls />
      <Categories />
    </div>
  );
}

export default Aside;
