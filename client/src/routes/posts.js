import React, { Component } from 'react';
import Aside from '../components/aside';
import PostList from '../components/postlist';

class Posts extends Component {
  render() {
    return (
      <div className="row">
        <Aside />
        <PostList />
      </div>
    );
  }
}

export default Posts;
