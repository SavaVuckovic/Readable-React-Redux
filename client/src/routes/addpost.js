import React, { Component } from 'react';
import '../styles/addpost.css';
import { Link } from 'react-router-dom';

class AddPost extends Component {
  onFormSubmit(e) {
    e.preventDefault();

    console.log('Submitted');

  }

  render() {
    return (
      <div className="row justify-content-md-center">
        <div className="add-post offset-md-3 col-md-6">
          <div className="add-post-header">
            <h2>Add Post</h2>
            <Link to="/" className="go-back">Go back</Link>
            <div className="clearfix"></div>
          </div>
          <form
            className="add-post-form"
            onSubmit={this.onFormSubmit}>
            <input
              type="text"
              className="form-field"
              placeholder="Title" />
            <input
              type="text"
              className="form-field"
              placeholder="Author" />
            <select className="category-select form-field">
              <option selected>Select category</option>
              <option>Category 1</option>
              <option>Category 2</option>
              <option>Category 3</option>
            </select>
            <textarea className="post-body-field form-field"></textarea>
            <button type="submit">Post</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPost;
