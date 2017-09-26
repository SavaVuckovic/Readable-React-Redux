import React from 'react';
import Aside from '../components/aside';
import PostList from '../components/postlist';

// render home page with all posts & categories
const Posts = () => {
  return (
    <div className="row">
      <Aside />
      <PostList />
    </div>
  );
}

export default Posts;
