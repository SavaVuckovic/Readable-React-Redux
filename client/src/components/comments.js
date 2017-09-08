import React, { Component } from 'react';
import Comment from './comment';
import '../styles/comments.css';

class Comments extends Component {
  render() {
    return (
      <div className="comments">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    );
  }
}

export default Comments;
