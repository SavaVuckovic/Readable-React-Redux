import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getCategories } from '../actions';
import { Link } from 'react-router-dom';

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
          return(
            <li key={cat.name}>
              <Link to={`/posts/${cat.name}`} className="category" >{cat.name}</Link>
            </li>
          );
        });
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
          <li key="All"><Link to="/" className="category">All</Link></li>
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
