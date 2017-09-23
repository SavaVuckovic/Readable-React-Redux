import React, { Component } from 'react';
import Aside from '../components/aside';
import PostList from '../components/postlist';

class CategoryPosts extends Component {
  render() {
    return (
      <div className="row">
        <Aside />
        <PostList postCategory={this.props.match.params.category} />
      </div>
    );
  }
}

export default CategoryPosts;
