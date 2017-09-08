import React, { Component } from 'react';
import '../styles/comments.css';

class Comments extends Component {
  renderComment() {
    return (
      <div className="comment">

        <div className="comment-header">

          <div className="comment-img">
            <img src={require('../images/user_3.jpg')} alt="user" />
          </div>

          <div className="comment-author">
            <h4>Sava Vuckovic</h4>
            <span>Some timestamp</span>
          </div>

        </div>

        <div className="comment-text">
          jashjlsa hdkjashdk sajhdjks hak asdsdad aas
        </div>

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

/*

<img src={require('../images/user_3.jpg')} alt="user" />
<div className="user">
  <h4>Sava Vuckovic</h4>
  <span>Some timestamp</span>
</div>

*/
