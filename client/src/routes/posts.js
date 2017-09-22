import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Aside from '../components/aside';
import PostList from '../components/postlist';
import { getPosts } from '../actions';

class Posts extends Component {
  componentWillMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <div className="row">
        <Aside categories={this.props.categories} />
        <PostList posts={this.props.posts || null} />
        {this.posts}
      </div>
    );
  }
}

function mapStateToProps({ posts }) {
  return { posts };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
