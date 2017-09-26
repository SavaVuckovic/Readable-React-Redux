import React, { Component } from 'react';
import '../styles/addpost.css';
import { Link } from 'react-router-dom';
import CreatePostForm from '../components/createpostform';
import EditPostForm from '../components/editpostform';

// render a page for creating or editing a post
class CreateEditPost extends Component {
  render() {
    return (
      <div className="row justify-content-md-center">
        <div className="create-edit-post offset-md-3 col-md-6">

          <div className="create-edit-post-header">
            <h2>Add Post</h2>
            <Link to="/" className="go-back">Go back</Link>
            <div className="clearfix"></div>
          </div>

          <CreatePostForm />

        </div>
      </div>
    );
  }
}

export default CreateEditPost;
