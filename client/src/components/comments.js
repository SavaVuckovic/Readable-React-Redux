import React, { Component } from 'react';
import Comment from './comment';
import '../styles/comments.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getComments } from '../actions';

class Comments extends Component {
  // fetch comments for particular post from the api server
  componentWillMount() {
    this.props.getComments(this.props.postID);
  }

  // render <Comment /> component for each comment
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

// map comments from api server to props
function mapStateToProps({ comments }) {
  return { comments };
}

// map action for fetching comments to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getComments }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
