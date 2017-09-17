import React, { Component } from 'react';
import Categories from './categories';
import Controlls from './controlls';
import '../styles/aside.css';

class Aside extends Component {
  render() {
    return (
      <div className="aside col-md-4">
        <Controlls />
        <Categories />
      </div>
    );
  }
}

export default Aside;
