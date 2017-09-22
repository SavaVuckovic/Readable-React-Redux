import React, { Component } from 'react';
import FullPost from '../components/fullpost';
import Comments from '../components/comments';

class SinglePost extends Component {
  render() {
    return (
      <div>
        <FullPost />
        <Comments />
      </div>
    );
  }
}

export default SinglePost;
