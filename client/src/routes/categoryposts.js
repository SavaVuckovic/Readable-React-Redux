import React from 'react';
import Aside from '../components/aside';
import PostList from '../components/postlist';

// render posts from specific category
const CategoryPosts = (props) => {
  return (
    <div className="row">
      <Aside />
      <PostList postCategory={props.match.params.category} />
    </div>
  );
}

export default CategoryPosts;
