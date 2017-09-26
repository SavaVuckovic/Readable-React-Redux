import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Controlls extends Component {
  // render link for adding new post and controlls for sorting
  render() {
    return (
      <div className="page-controlls">

        <Link to="/posts/create_edit" className="add-post-link" >
          <h3>Add New Post</h3>
        </Link>

        <h4>Sort by:</h4>
        <select>
          <option>Most votes</option>
          <option>Most recent</option>
        </select>

      </div>
    );
  }
}

// might need this later /////////////////
function mapStateToProps(state) {
  // fake data
  return {
    ex: state.ex,
    testt: state.testt
  }
}

export default connect(mapStateToProps)(Controlls);
