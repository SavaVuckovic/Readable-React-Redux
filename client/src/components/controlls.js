import React, { Component } from 'react';
import { connect } from 'react-redux';

class Controlls extends Component {
  render() {
    return (
      <div className="page-controlls">
        <h3>Add New Post</h3>
        <h4>Sort by:</h4>
        <select>
          <option>Most votes</option>
          <option>Most recent</option>
        </select>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ex: state.ex,
    testt: state.testt
  }
}

export default connect(mapStateToProps)(Controlls);
