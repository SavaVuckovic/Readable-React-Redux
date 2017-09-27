import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSinglePost } from '../actions';
import { Link } from 'react-router-dom';
import Modal from './modal';
import AddCommentForm from './addcommentform';

class FullPost extends Component {
  // fetch the post from the api server
  componentWillMount() {
    this.props.getSinglePost(this.props.postID);
  }

  // show comment modal
  showCommentModal() {
    let modal = this.refs.commentModal.modalTarget;
    if(modal.style.display !== 'block') {
      modal.style.display = 'block';
    }
  }

  // hide comment modal
  hideCommentModal() {
    let modal = this.refs.commentModal.modalTarget;
    if(modal.style.display !== 'none') {
      modal.style.display = 'none';
    }
  }

  // show delete modal
  showDeleteModal() {
    let modal = this.refs.deleteModal.modalTarget;
    if(modal.style.display !== 'block') {
      modal.style.display = 'block';
    }
  }

  // hide delete modal
  hideDeleteModal() {
    let modal = this.refs.deleteModal.modalTarget;
    if(modal.style.display !== 'none') {
      modal.style.display = 'none';
    }
  }

  // delete post
  deletePost() {
    console.log('delete called');
  }

  // render a post with all related information
  render() {
    const post = this.props.post;
    if(!post) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <div className="row">

        <Modal
          ref="commentModal"
          header="Add a Comment">
          <AddCommentForm
            postID={this.props.postID}
            hideModal={this.hideCommentModal.bind(this)} />
        </Modal>

        <Modal
          ref="deleteModal"
          header="Delete Post">
          <h4 className="warning">Are you sure you want to delete this post?</h4>
          <button
            className="cancel-btn"
            onClick={this.hideDeleteModal.bind(this)} >Cancel</button>
          <button
            className="delete-btn"
            onClick={this.deletePost}>Delete</button>
          <div className="clearfix"></div>
        </Modal>

        <div className="fullpost">

          <div className="post-header">
            <div className="post-header-controlls">

              <Link to="/"><i className="fa fa-arrow-circle-left" aria-hidden="true"></i></Link>
              <Link to={{
                pathname: '/posts/create_edit',
                hash: `#${post.id}`,
                state: { fromSinglePost: true }
              }}><i className="fa fa-pencil" aria-hidden="true"></i></Link>
              <i className="fa fa-trash" aria-hidden="true" onClick={this.showDeleteModal.bind(this)}></i>

            </div>
            <h2>{post.title}</h2>
            <p>Posted by {post.author} on {moment(post.timestamp).format('ddd MM. DD. YYYY.')}</p>
          </div>

          <div className="post-body">
            {post.body}
          </div>

          <div className="single-post-controls">
            <div className="control">
              <i className="fa fa-thumbs-up" aria-hidden="true"></i>
              <span>13</span>
            </div>
            <div className="control">
              <i className="fa fa-thumbs-down" aria-hidden="true"></i>
              <span>2</span>
            </div>
            <div className="control">
              <i className="fa fa-comments" aria-hidden="true"></i>
              <span>5</span>
            </div>

            <div
              id="addcomment"
              onClick={this.showCommentModal.bind(this)}>Write a comment</div>

            <div className="clearfix"></div>
          </div>

        </div>

      </div>
    );
  }
}

// map post to show to props
function mapStateToProps(state) {
  return {
    post: state.activePost
  };
}

// map action for fetching a post to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getSinglePost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FullPost);
