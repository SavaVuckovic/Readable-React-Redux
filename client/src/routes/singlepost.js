import React from 'react';
import FullPost from '../components/fullpost';
import Comments from '../components/comments';

// render single post page
const SinglePost = (props) => {
    return (
      <div>
        <FullPost postID={props.match.params.post_id} />
        <Comments postID={props.match.params.post_id} />
      </div>
    );
}

export default SinglePost;
