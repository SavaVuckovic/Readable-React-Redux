import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getCategories } from '../actions';

class Categories extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  renderCategories() {
    switch(this.props.categories) {
      case null:
        return;
      default:
        let categories = this.props.categories.map((cat) => {
          return(<li className="category">{cat.name}</li>)
        })
        return categories;
    }
  }

  render() {
    return (
      <div className="categories">
        <div className="categories-header">
          <h4>Categories</h4>
        </div>
        <ul className="category-list">
          {this.renderCategories()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ categories }) {
  return { categories };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCategories }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
