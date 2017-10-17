import React, { Component } from 'react';
import moment from 'moment';
import Modal from './modal';
import EditCommentForm from './editcommentform';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteComment, upVoteComment, downVoteComment } from '../actions';

class Comment extends Component {
  // choose comment avatar image randomly
  chooseImageRandomly() {
    const randNum = Math.floor(Math.random()*7+1);
    return require(`../images/user_${ randNum }.jpg`);
  }

  // show edit modal
  showEditModal() {
    let modal = this.refs.editModal.modalTarget;
    if(modal.style.display !== 'block') {
      modal.style.display = 'block';
    }
  }

  // hide edit modal
  hideEditModal() {
    let modal = this.refs.editModal.modalTarget;
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

  // delete comment
  deleteComment(id, deleteComment, modal) {
    deleteComment(id);
    modal.modalTarget.style.display = 'none';
  }

  // render a comment
  render() {
    const comment = this.props.comment;

    return (
      <div className="comment">

        <Modal
          ref="editModal"
          header="Edit Comment">
          <EditCommentForm
            body={comment.body}
            id={comment.id}
            hideModal={this.hideEditModal.bind(this)} />
        </Modal>

        <Modal
          ref="deleteModal"
          header="Delete Comment">
          <h4 className="warning">Are you sure you want to delete this comment?</h4>
          <button
            className="cancel-btn"
            onClick={this.hideDeleteModal.bind(this)} >Cancel</button>
          <button
            className="delete-btn"
            onClick={() => this.deleteComment(comment.id, this.props.deleteComment, this.refs.deleteModal)}>Delete</button>
          <div className="clearfix"></div>
        </Modal>

        <div className="comment-header">
          <div className="comment-header-controlls">
            <i className="fa fa-pencil" aria-hidden="true" onClick={this.showEditModal.bind(this)}></i>
            <i className="fa fa-trash" aria-hidden="true" onClick={this.showDeleteModal.bind(this)}></i>
          </div>
          <div className="comment-img">
            <img src={this.chooseImageRandomly()} alt="user" />
          </div>
          <div className="comment-author">
            <h4>{comment.author}</h4>
            <span>{moment(comment.timestamp).format('ddd MM. DD. YYYY.')}</span>
          </div>
        </div>

        <div className="comment-text">
          {comment.body}
        </div>

        <div className="comment-footer">
          <div className="comment-vote-score">votes: {comment.voteScore}</div>
          <div className="comment-footer-controlls">
            <div className="control">
              <i className="fa fa-thumbs-up" aria-hidden="true"
                onClick={() => this.props.upVoteComment(comment.id)}></i>
            </div>
            <div className="control">
              <i className="fa fa-thumbs-down" aria-hidden="true"
                onClick={() => this.props.downVoteComment(comment.id)}></i>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>

      </div>
    );
  }
}

// map comment actions to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteComment, upVoteComment, downVoteComment }, dispatch);
}

export default connect(null, mapDispatchToProps)(Comment);
