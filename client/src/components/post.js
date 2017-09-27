import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from './modal';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deletePost } from '../actions';

class Post extends Component {
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
          <h3>{post.title}</h3>
          <p>Posted by {post.author} on {moment(post.timestamp).format('ddd MM. DD. YYYY.')}</p>
          <div className="clearfix"></div>
        </div>

        <div className="post-body">
          {post.body}
        </div>

        <div className="post-controls">
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
          <Link className="read-more" to={postUrl}>read more</Link>
          <div className="clearfix"></div>
        </div>

      </div>
    );
  }
}

// map delete post action to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deletePost }, dispatch);
}

export default connect(null, mapDispatchToProps)(Post);
