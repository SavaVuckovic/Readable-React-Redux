import React, { Component } from 'react';
import Post from './post';
import '../styles/post.css';

class PostList extends Component {
  renderPostList() {
    switch(this.props.posts) {
      case null:
        return;
      default:
        let posts = this.props.posts.map((post, index) => {
          return (<Post key={index} post={post} />);
        });
        return posts;
    }
  }

  render() {
    return (
      <div className="postlist col-md-8 pull-md-4">
        {this.renderPostList()}
      </div>
    );
  }
}

export default PostList;
