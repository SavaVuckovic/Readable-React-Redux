import React, { Component } from 'react';
import moment from 'moment';
import Modal from './modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteComment } from '../actions';

class Comment extends Component {
  // choose comment avatar image randomly
  chooseImageRandomly() {
    const randNum = Math.floor(Math.random()*7+1);
    return require(`../images/user_${ randNum }.jpg`);
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
    return (
      <div className="comment">

        <Modal
          ref="deleteModal"
          header="Delete Comment">
          <h4 className="warning">Are you sure you want to delete this comment?</h4>
          <button
            className="cancel-btn"
            onClick={this.hideDeleteModal.bind(this)} >Cancel</button>
          <button
            className="delete-btn"
            onClick={() => this.deleteComment(this.props.comment.id, this.props.deleteComment, this.refs.deleteModal)}>Delete</button>
          <div className="clearfix"></div>
        </Modal>

        <div className="comment-header">
          <div className="comment-header-controlls">
            <i className="fa fa-pencil" aria-hidden="true"></i>
            <i className="fa fa-trash" aria-hidden="true" onClick={this.showDeleteModal.bind(this)}></i>
          </div>
          <div className="comment-img">
            <img src={this.chooseImageRandomly()} alt="user" />
          </div>
          <div className="comment-author">
            <h4>{this.props.comment.author}</h4>
            <span>{moment(this.props.comment.timestamp).format('ddd MM. DD. YYYY.')}</span>
          </div>
        </div>

        <div className="comment-text">
          {this.props.comment.body}
        </div>

        <div className="comment-controlls">
          <span>some vote controlls here</span>
        </div>

      </div>
    );
  }
}

// map edit and delete comment actions to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteComment }, dispatch);
}

export default connect(null, mapDispatchToProps)(Comment);
