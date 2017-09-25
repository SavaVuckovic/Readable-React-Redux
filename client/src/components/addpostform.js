import React, { Component } from 'react';
import '../styles/forms.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPost, getCategories } from '../actions';

class AddPostForm extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.addPost();
  }

  renderCategoryOptions() {
    switch(this.props.categories) {
      case null:
        return;
      default:
        let catOptions = this.props.categories.map((cat) => {
          return(
            <option value={cat.name} key={cat.name}>{cat.name}</option>
          );
        });
      return catOptions;
    }
  }

  render() {
    return (
      <form
        className="form"
        onSubmit={this.onFormSubmit.bind(this)}>
        <input
          type="text"
          placeholder="Title" />
        <input
          type="text"
          placeholder="Author" />
        <select>
          <option>Select category</option>
          {this.renderCategoryOptions()}
        </select>
        <textarea></textarea>
        <button type="submit">Post</button>
      </form>
    );
  }
}

function mapStateToProps({ categories }) {
  return { categories };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addPost, getCategories }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPostForm);
