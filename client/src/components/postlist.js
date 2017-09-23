import React, { Component } from 'react';
import Post from './post';
import '../styles/post.css';
import { getAllPosts, getCategoryPosts } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class PostList extends Component {
  componentWillMount() {
    if(this.props.postCategory) {
      this.props.getCategoryPosts(this.props.postCategory);
    } else {
      this.props.getAllPosts();
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.postCategory !== this.props.postCategory) {
      this.props.getCategoryPosts(this.props.postCategory);
    }
  }

  renderPostList() {
    switch(this.props.posts) {
      case null:
        return;
      default:
        let posts = this.props.posts.map((post) => {
          return (<Post key={post.id} post={post} />);
        });
        return posts;
    }
  }

  render() {
    return (
      <div className="postlist col-md-8 pull-md-4">
        {this.renderPostList()}
      </div>
    );
  }
}

function mapStateToProps({ posts }) {
  return { posts };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAllPosts, getCategoryPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
