import React, { Component } from 'react';
import Post from './post';

class PostList extends Component {
  render() {
    return (
      <div className="col-md-8">

        <Post />
        <Post />

      </div>
    );
  }
}

export default PostList;
