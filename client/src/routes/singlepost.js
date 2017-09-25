import React, { Component } from 'react';
import FullPost from '../components/fullpost';
import Comments from '../components/comments';

class SinglePost extends Component {
  render() {
    return (
      <div>
        <FullPost postID={this.props.match.params.post_id} />
        <Comments postID={this.props.match.params.post_id} />
      </div>
    );
  }
}

export default SinglePost;
