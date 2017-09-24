import React, { Component } from 'react';
import FullPost from '../components/fullpost';
import Comments from '../components/comments';

class SinglePost extends Component {
  render() {
    return (
      <div>
        <FullPost params={this.props.match.params} />
        <Comments />
      </div>
    );
  }
}

export default SinglePost;
