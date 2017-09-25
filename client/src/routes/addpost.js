import React, { Component } from 'react';
import '../styles/addpost.css';
import { Link } from 'react-router-dom';
import AddPostForm from '../components/addpostform';

class AddPost extends Component {
  render() {
    return (
      <div className="row justify-content-md-center">
        <div className="add-post offset-md-3 col-md-6">

          <div className="add-post-header">
            <h2>Add Post</h2>
            <Link to="/" className="go-back">Go back</Link>
            <div className="clearfix"></div>
          </div>

          <AddPostForm />

        </div>
      </div>
    );
  }
}

export default AddPost;
