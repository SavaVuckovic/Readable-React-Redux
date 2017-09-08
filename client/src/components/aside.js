import React, { Component } from 'react';
import Categories from './categories';
import '../styles/categories.css';

class Aside extends Component {
  render() {
    return (
      <div className="aside col-md-4">
        <Categories />
      </div>
    );
  }
}

export default Aside;
