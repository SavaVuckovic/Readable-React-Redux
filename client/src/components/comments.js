import React, { Component } from 'react';
import '../styles/comments.css';

class Comments extends Component {
  renderComment() {
    return (
      <div className="comment">
        <img src="/images/user_3.jpg" alt="user" />
      </div>
    );
  }

  render() {
    return (
      <div className="comments">
        { this.renderComment() }
        { this.renderComment() }
        { this.renderComment() }
      </div>
    );
  }
}

export default Comments;
