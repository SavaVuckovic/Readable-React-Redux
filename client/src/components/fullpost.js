import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSinglePost } from '../actions';
import Modal from './modal';
import AddCommentForm from './addcommentform';

class FullPost extends Component {
  componentWillMount() {
    this.props.getSinglePost(this.props.postID);
  }

  toggleModal() {
    let modal = this.refs.modal.modalTarget;
    if(modal.style.display !== 'block') {
      modal.style.display = 'block';
    }

  }

  render() {
    const post = this.props.post;
    // temp solution
    if(!post) {
      return (<div>Loading</div>)
    }

    return (
      <div className="row">

        <Modal
          ref="modal"
          header="Add a Comment">
          <AddCommentForm postID={this.props.postID} />
        </Modal>

        <div className="post">
          <div className="post-header">
            <h2>{post.title}</h2>
            <p>Posted by {post.author} on {post.timestamp}</p>
            <div className="edit-delete">
              <i className="fa fa-pencil" aria-hidden="true"></i>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </div>
          </div>
          <div className="post-body">
            {post.body}
            ------------------asdddddddddddddddd dddddddddddd ddddddddasdddd sadddddddddddddddddd
            asddddddddddddddddddddddddddddd ddddddddddddddddd dddddddddddddddddddddddddddd
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
              onClick={this.toggleModal.bind(this)}>Add a comment</div>

            <div className="clearfix"></div>
          </div>
        </div>


      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.posts[0]
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getSinglePost }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FullPost);
