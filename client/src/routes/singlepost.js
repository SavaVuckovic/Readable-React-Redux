import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Modal from '../components/modal';
import AddCommentForm from '../components/addcommentform';
import Comments from '../components/comments';
import {
  getSinglePost,
  deletePost,
  getComments,
  upVotePost,
  downVotePost
} from '../actions';

// render single post page
class SinglePost extends Component {
  // fetch the post and its comments from the api server
  componentWillMount() {
    this.props.getSinglePost(this.props.match.params.post_id);
    this.props.getComments(this.props.match.params.post_id);
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
  deletePost(id, deletePost) {
    deletePost(id);
    this.props.history.push('/');
  }

  // render a post with all related information and comment section
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
            postID={post.id}
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
            onClick={() => this.deletePost(post.id, this.props.deletePost)}>Delete</button>
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

          <div className="single-post-footer">

            <div className="post-footer-info">
              <div>votes: {post.voteScore}</div>
              <div>comments: {this.props.comments.length}</div>
            </div>

            <div className="post-footer-controlls">
              <div className="control">
                <i className="fa fa-thumbs-up" aria-hidden="true"
                onClick={() => this.props.upVotePost(post.id)}></i>
              </div>
              <div className="control">
                <i className="fa fa-thumbs-down" aria-hidden="true"
                onClick={() => this.props.downVotePost(post.id)}></i>
              </div>
              <div className="control">
                <i className="fa fa-comments" aria-hidden="true"
                  onClick={this.showCommentModal.bind(this)}></i>
              </div>
            </div>

            <div className="clearfix"></div>
          </div>

        </div>

        <Comments comments={this.props.comments} />

      </div>
    );
  }
}

// map post to show and its comments to props
function mapStateToProps(state, ownProps) {
  const thisPostComments = state.comments.filter((comm) => {
    return comm.parentId === ownProps.match.params.post_id;
  });

  return {
    post: state.activePost,
    comments: thisPostComments
  };
}

// map action for fetching and deleting a post, and getting comments to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getSinglePost,
    deletePost,
    getComments,
    upVotePost,
    downVotePost
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
