import React, { Component } from 'react';
import Comment from './comment';
import '../styles/comments.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Comments extends Component {
  renderComments(comments) {
    // sort comments by vote score first
    var sortedByVotes = comments.sort((a, b) => {
      return b.voteScore - a.voteScore;
    });

    // render sorted comments
    return sortedByVotes.map((comment) => {
      return (
        <Comment key={comment.id} comment={comment} />
      );
    })
  }

  // render <Comment /> component for each comment
  render() {
    // transition options
    const transitionOptions = {
      transitionName: 'fade',
      transitionEnterTimeout: 400,
      transitionLeaveTimeout: 400
    };

    return (
      <div className="comments">
        <ReactCSSTransitionGroup {...transitionOptions} >
          {this.renderComments(this.props.comments)}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Comments;
