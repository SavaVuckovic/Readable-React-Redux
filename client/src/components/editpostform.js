import React, { Component } from 'react';
import '../styles/forms.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSinglePost, editPost } from '../actions';
import { withRouter } from 'react-router-dom';

class EditPostForm extends Component {
  // get post to edit & create state
  componentWillMount() {
    this.props.getSinglePost(this.props.location.hash.substr(1));

    this.state = {
      title: '',
      body: ''
    };
  }

  // update state to populate the form values with active post data
  componentDidUpdate(prevProps) {
    if(this.props.post !== prevProps.post) {
      this.setState({
        title: this.props.post.title,
        body: this.props.post.body
      });
    }
  }

  // edit post on form submit
  handleSubmit(e) {
    e.preventDefault();
    this.props.editPost(this.props.post.id, this.state.title, this.state.body);
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

  // render a form for editing a post
  render() {
    const post = this.props.post;
    if(!post) {
      return (<div>NO POST IS SELECTED</div>);
    }

    return (
      <form
        className="form"
        onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          value={this.state.title}
          onChange={(e) => this.setState({ title: e.target.value })} />
        <textarea
          value={this.state.body}
          onChange={(e) => this.setState({ body: e.target.value })}></textarea>
        <button type="submit">Edit</button>
      </form>
    );
  }
}

// map active post to props
function mapStateToProps({ activePost }) {
  return { post: activePost };
}

// map actions for fetching single post and editing a post to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getSinglePost, editPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditPostForm));
