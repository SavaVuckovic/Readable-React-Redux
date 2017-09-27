import React, { Component } from 'react';
import '../styles/forms.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPost, getCategories } from '../actions';
import { withRouter } from 'react-router'

class CreatePostForm extends Component {
  // get all categories and create state for the controlled form inputs
  componentWillMount() {
    this.props.getCategories();
    this.state = {
      title: '',
      body: '',
      author: '',
      category: ''
    };
  }

  // add a post on form submit
  handleSubmit(e) {
    e.preventDefault();
    const { title, body, author, category } = this.state;
    this.props.addPost(title, body, author, category);
    this.props.history.push('/');
  }

  // renders <option> tag for each category
  renderCategoryOptions() {
    switch(this.props.categories) {
      case null:
        return;
      default:
        let catOptions = this.props.categories.map((cat) => {
          return(<option value={cat.name} key={cat.name}>{cat.name}</option>);
        });
      return catOptions;
    }
  }

  // renders a form for adding a post
  render() {
    return (
      <form
        className="form"
        onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          placeholder="Title"
          value={this.state.title}
          onChange={(e) => this.setState({ title: e.target.value })} />
        <input
          type="text"
          placeholder="Author"
          value={this.state.author}
          onChange={(e) => this.setState({ author: e.target.value })} />
        <select
          value={this.state.category}
          onChange={(e) => this.setState({ category: e.target.value })}>
          <option>Select category</option>
          {this.renderCategoryOptions()}
        </select>
        <textarea
          value={this.state.body}
          onChange={(e) => this.setState({ body: e.target.value })}></textarea>
        <button type="submit">Post</button>
      </form>
    );
  }
}

// map categories to props
function mapStateToProps({ categories }) {
  return { categories };
}

// map actions for adding a post and for fetching categories to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addPost, getCategories }, dispatch);
}

const CreatePostFormWithRouter = withRouter(CreatePostForm);
export default connect(mapStateToProps, mapDispatchToProps)(CreatePostFormWithRouter);
