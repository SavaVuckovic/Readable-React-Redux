import React from 'react';
import Comment from './comment';
import '../styles/comments.css';

// render <Comment /> component for each comment
const Comments = (props) => {
  return (
    <div className="comments">
      {props.comments.map((comment) => {
        return (
          <Comment key={comment.id} comment={comment} />
        );
      })}
    </div>
  );
}

export default Comments;
