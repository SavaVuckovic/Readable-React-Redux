import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from './modal';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deletePost, getComments, upVotePost, downVotePost } from '../actions';

class Post extends Component {
  // fetch comments for this post to display their number
  componentWillMount() {
    this.props.getComments(this.props.post.id);
  }

  // show modal
  showDeleteModal() {
    let modal = this.refs.deleteModal.modalTarget;
    if(modal.style.display !== 'block') {
      modal.style.display = 'block';
    }
  }

  // hide modal
  hideDeleteModal() {
    let modal = this.refs.deleteModal.modalTarget;
    if(modal.style.display !== 'none') {
      modal.style.display = 'none';
    }
  }

  // delete post
  deletePost(id, deletePost, modal) {
    deletePost(id);
    modal.modalTarget.style.display = 'none';
  }

  // render individual post in postlist
  render() {
    const post = this.props.post;
    const postUrl = `/posts/${post.category}/${post.id}`;

    return (
      <div className="post">

        <Modal
          ref="deleteModal"
          header="Delete Post">
          <h4 className="warning">Are you sure you want to delete this post?</h4>
          <button
            className="cancel-btn"
            onClick={this.hideDeleteModal.bind(this)} >Cancel</button>
          <button
            className="delete-btn"
            onClick={() => this.deletePost(post.id, this.props.deletePost, this.refs.deleteModal)}>Delete</button>
          <div className="clearfix"></div>
        </Modal>

        <div className="post-header">
          <div className="post-header-controlls">
            <Link to={{
              pathname: '/posts/create_edit',
              hash: `#${post.id}`,
              state: { fromPost: true }
            }}><i className="fa fa-pencil" aria-hidden="true"></i></Link>
            <i className="fa fa-trash" aria-hidden="true" onClick={this.showDeleteModal.bind(this)}></i>
          </div>
          <Link className="main-link-to-post" to={postUrl}><h3>{post.title}</h3></Link>
          <p>Posted by {post.author} on {moment(post.timestamp).format('ddd MM. DD. YYYY.')}</p>
          <div className="clearfix"></div>
        </div>

        <div className="post-body">
          {post.body}
        </div>

        <div className="post-footer">

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
              <Link to={postUrl} className="fa fa-comments" aria-hidden="true"></Link>
            </div>
          </div>

          <div className="clearfix"></div>
        </div>

      </div>
    );
  }
}

// map comments that belong to this post to props
function mapStateToProps({ comments }, ownProps) {
  const thisPostComments = comments.filter((comm) => {
    return comm.parentId === ownProps.post.id;
  });
  return { comments: thisPostComments };
}

// map delete post action to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deletePost,
    getComments, 
    upVotePost,
    downVotePost
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
