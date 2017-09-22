import React, { Component } from 'react';
import Post from './post';
import '../styles/post.css';

class PostList extends Component {
  render() {
    return (
      <div className="postlist col-md-8 pull-md-4">

        <Post />
        <Post />

      </div>
    );
  }
}

export default PostList;
