import React, { Component } from 'react';

class Categories extends Component {
  render() {
    return (
      <div className="categories">
        <div className="categories-header">
          <h4>Categories</h4>
        </div>
        <ul className="category-list">
          <li className="category">Technology</li>
          <li className="category">Health</li>
          <li className="category">Math</li>
          <li className="category">Programming</li>
          <li className="category">Games</li>
        </ul>
      </div>
    );
  }
}

export default Categories;
