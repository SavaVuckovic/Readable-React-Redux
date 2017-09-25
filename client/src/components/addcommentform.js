import React, { Component } from 'react';
import '../styles/forms.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addComment } from '../actions';

class AddCommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: 'Your Name Here',
      body: 'Write a comment'
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // test
    console.log('1');
    this.props.addComment(this.state.author, this.state.body, this.props.postID);
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          name="author"
          value={this.state.author}
          onChange={(e) => this.setState({ author: e.target.value })} />
        <textarea
          name="body"
          onChange={(e) => this.setState({ body: e.target.value })}>
          {this.state.body}</textarea>
        <button type="submit">Done</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addComment }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddCommentForm);
