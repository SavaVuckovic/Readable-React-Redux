import React, { Component } from 'react';
import '../styles/addpost.css';

class AddPost extends Component {
  onFormSubmit(e) {
    e.preventDefault();
    console.log('Submitted');
  }

  render() {
    return (
      <div className="row justify-content-md-center">
        <form
          className="add-post-form offset-md-3 col-md-6"
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
    );
  }
}

export default AddPost;
