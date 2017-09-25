import React, { Component } from 'react';
import '../styles/forms.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addComment } from '../actions';

class AddCommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      body: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addComment(this.state.author, this.state.body, this.props.postID);
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          name="author"
          value={this.state.author}
          placeholder="Enter Your Name"
          onChange={(e) => this.setState({ author: e.target.value })} />
        <textarea
          name="body"
          value={this.state.body}
          placeholder="Write a Comment"
          onChange={(e) => this.setState({ body: e.target.value })}>
          </textarea>
        <button type="submit">Done</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addComment }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddCommentForm);
