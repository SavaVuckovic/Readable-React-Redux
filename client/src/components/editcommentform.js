import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editComment } from '../actions';

class EditCommentForm extends Component {
  // set state to populate the textarea
  constructor(props) {
    super(props);
    this.state = { body: this.props.body };
  }

  // edit post on form submit
  handleSubmit(e) {
    e.preventDefault();
    this.props.hideModal();
    this.props.editComment(this.props.id, this.state.body);
  }

  // render a form for editing a post
  render() {
    return (
      <form
        className="form"
        onSubmit={this.handleSubmit.bind(this)}>
        <textarea
          value={this.state.body}
          onChange={(e) => this.setState({ body: e.target.value })}></textarea>
        <button type="submit">Edit</button>
      </form>
    );
  }
}

// map action for editing comments to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ editComment }, dispatch);
}

export default connect(null, mapDispatchToProps)(EditCommentForm);
