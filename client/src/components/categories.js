import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getCategories } from '../actions';
import { Link } from 'react-router-dom';

class Categories extends Component {
  // get all categories from the api server
  componentWillMount() {
    this.props.getCategories();
  }

  // render an <li> ekement with a link to category page for each category
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

  // render categories
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

// map categories from the api server to props
function mapStateToProps({ categories }) {
  return { categories };
}

// map getCategories action to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCategories }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
