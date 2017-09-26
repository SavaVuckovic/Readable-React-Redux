import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {
  // render individual post in postlist
  render() {
    const post = this.props.post;
    const postUrl = `/posts/${post.category}/${post.id}`;

    return (
      <div className="post">

        <div className="post-header">
          <h3>{post.title}</h3>
          <p>Posted by {post.author} on {post.timestamp}</p>
          <div className="post-header-controlls">
            <i className="fa fa-pencil" aria-hidden="true"></i>
            <i className="fa fa-trash" aria-hidden="true"></i>
          </div>
        </div>

        <div className="post-body">
          {post.body}
        </div>

        <div className="post-controls">
          <div className="control">
            <i className="fa fa-thumbs-up" aria-hidden="true"></i>
            <span>13</span>
          </div>
          <div className="control">
            <i className="fa fa-thumbs-down" aria-hidden="true"></i>
            <span>2</span>
          </div>
          <div className="control">
            <i className="fa fa-comments" aria-hidden="true"></i>
            <span>5</span>
          </div>
          <Link className="read-more" to={postUrl}>read more</Link>
          <div className="clearfix"></div>
        </div>

      </div>
    );
  }
}

export default Post;
