import React, { Component } from 'react';
import '../styles/forms.css';

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
    console.log('SUBMITTED')
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
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

export default AddCommentForm;
