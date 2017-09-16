import React, { Component } from 'react';
import Categories from './categories';
import Controlls from './controlls';
import '../styles/categories.css';

class Aside extends Component {
  render() {
    return (
      <div className="aside col-md-4">
        <Categories />
        <Controlls />
      </div>
    );
  }
}

export default Aside;
