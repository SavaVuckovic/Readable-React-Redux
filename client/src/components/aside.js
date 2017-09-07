import React, { Component } from 'react';
import Categories from './categories';

class Aside extends Component {
  render() {
    return (
      <div className="col-md-4">
        <Categories />
      </div>
    );
  }
}

export default Aside;
