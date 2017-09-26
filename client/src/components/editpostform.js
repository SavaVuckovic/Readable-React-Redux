import React, { Component } from 'react';
import '../styles/forms.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCategories, getSinglePost } from '../actions';
import { withRouter } from 'react-router-dom';

class EditPostForm extends Component {
  // get categories, active post
  componentWillMount() {
    this.props.getSinglePost(this.props.location.hash.substr(0));
    this.props.getCategories();
    this.state = {
      title: this.props.post.title,
      body: this.props.post.body,
      author: this.props.post.author,
      category: this.props.post.category
    };
  }

  // edit post on form submit
  handleSubmit(e) {
    e.preventDefault();
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

  // render a form for editing a post
  render() {
    const post = this.props.post;
    if(!post) {
      return (
        <div>NO POST IS SELECTED</div>
      );
    }

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

function mapStateToProps(state) {
  return {
    categories: state.categories,
    post: state.posts[0]
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCategories, getSinglePost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditPostForm));
