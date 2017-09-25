import React, { Component } from 'react';
import Comment from './comment';
import '../styles/comments.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getComments } from '../actions';

class Comments extends Component {
  componentWillMount() {
    this.props.getComments(this.props.postID);
  }

  render() {
    return (
      <div className="comments row">
        {this.props.comments.map((comment) => {
          return (
            <Comment key={comment.id} comment={comment} />
          );
        })}
      </div>
    );
  }
}

function mapStateToProps({ comments }) {
  return { comments };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getComments }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
