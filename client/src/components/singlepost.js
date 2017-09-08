import React, { Component } from 'react';
import Comments from './comments';

class SinglePost extends Component {
  render() {
    return (
      <div className="row">
        <div className="post">
          <div className="post-header">
            <h2>Post Title</h2>
            <p>Posted by |Somebody| on |date|</p>
            <div className="edit-delete">
              <i className="fa fa-pencil" aria-hidden="true"></i>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </div>
          </div>
          <div className="post-body">
            <p>Lorem ipsum dolor sit ncididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat. Duis aute irure dolo sint occ.</p>
            <p>aecat cupidatat non proident, sunt in culpa qui officia deamet, consectetur adipis
              icing elit, sed do eiusmod tempor iserunt mollit anim id est laborum</p>
          </div>
          <div className="single-post-controls">
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
            <div className="clearfix"></div>
          </div>
          <Comments />
        </div>
      </div>

    );
  }
}

export default SinglePost;
