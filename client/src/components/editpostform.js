import React, { Component } from 'react';
import '../styles/forms.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { getCategories } from '../actions';

class EditPostForm extends Component {
  // get categories, set post values to state so they can be edited with form
  componentWillMount() {
    this.props.getCategories();
    this.post = this.props.activePost;
    this.state = {
      title: this.post.title,
      body: this.post.body,
      author: this.post.author,
      category: this.post.category
    }
  }

  // edit post on form submit
  handleSubmit(e) {
    e.preventDefault();
    // const { title, body, author, category } = this.state;
    // action here
    //this.props.history.push('/');
  }

  // renders <option> tag for each category
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
        onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          value={this.state.title}
          onChange={(e) => this.setState({ title: e.target.value })} />
        <input
          type="text"
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
        <button type="submit">Edit</button>
      </form>
    );
  }
}

function mapStateToProps({ activePost, categories }) {
  return { activePost, categories };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCategories }, dispatch);
}

const EditPostFormWithRouter = withRouter(EditPostForm);
export default connect(mapStateToProps, mapDispatchToProps)(EditPostFormWithRouter);
