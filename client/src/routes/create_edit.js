import React, { Component } from 'react';
import '../styles/create_edit.css';
import { Link } from 'react-router-dom';
import CreatePostForm from '../components/createpostform';
import EditPostForm from '../components/editpostform';

// render a page for creating or editing a post
class CreateEditPost extends Component {
  // check if user wants to edit post or create a new one
  constructor(props) {
    super(props);
    if(this.props.location.state) {
      this.edit = true;
    } else {
      this.edit = false;
    }
  }

  // decide which form to render
  createOrEdit() {
    if(this.edit) {
      return (<EditPostForm />);
    } else {
      return (<CreatePostForm />);
    }
  }

  // render the create/edit page
  render() {
    return (
      <div className="row justify-content-md-center">
        <div className="create-edit-post offset-md-2 col-md-8">
          <div className="create-edit-post-header">
            <h2>{this.edit === true ? 'Edit Post' : 'Create Post'}</h2>
            <Link to="/" className="go-back">
              <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
            </Link>
            <div className="clearfix"></div>
          </div>
          {this.createOrEdit()}
        </div>
      </div>
    );
  }
}

export default CreateEditPost;
