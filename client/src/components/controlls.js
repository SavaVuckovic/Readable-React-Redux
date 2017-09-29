import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sortPostsByTime, sortPostsByVotes } from '../actions';

class Controlls extends Component {
  // decide how to sort posts
  sortBy(criteria) {
    if(criteria === 'timestamp') {
      this.props.sortPostsByTime();
    } else if (criteria === 'votes') {
      this.props.sortPostsByVotes();
    }
  }

  // render link for adding new post and controlls for sorting
  render() {
    return (
      <div className="page-controlls">

        <Link to="/posts/create_edit" className="add-post-link" >
          <h3>Add New Post</h3>
        </Link>

        <h4>Sort by:</h4>
        <select defaultValue={'votes'} onChange={(e) => this.sortBy(e.target.value)}>
          <option value='timestamp'>Most recent</option>
          <option value='votes'>Most votes</option>
        </select>

      </div>
    );
  }
}

// map sorting actions to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sortPostsByTime, sortPostsByVotes }, dispatch);
}

export default connect(null, mapDispatchToProps)(Controlls);
