import React, { Component } from 'react';
import Post from './post';
import '../styles/post.css';
import { getAllPosts, getCategoryPosts } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// test
import { createSelector } from 'reselect';

class PostList extends Component {
  // fetch posts from api server
  componentWillMount() {
    if(this.props.postCategory) {
      this.props.getCategoryPosts(this.props.postCategory);
    } else {
      this.props.getAllPosts();
    }
  }

  // fetch posts from api server again if props update
  componentDidUpdate(prevProps) {
    if(prevProps.postCategory !== this.props.postCategory) {
      this.props.getCategoryPosts(this.props.postCategory);
    }
  }

  // render a <Post /> component for each post on the server
  renderPostList() {
    switch(this.props.posts) {
      case null:
        return;
      default:
        // sort posts
        var sortedPosts = (posts, sortBy) => {
          if(sortBy === 'timestamp') {
            var sortedByTime = posts.sort((a, b) => {
              return b.timestamp - a.timestamp;
            });
            return sortedByTime;
          } else if (sortBy === 'votes') {
            var sortedByVotes = posts.sort((a, b) => {
              return b.voteScore - a.voteScore;
            });
            return sortedByVotes;
          }
        }


        let posts = sortedPosts(this.props.posts, this.props.sortBy).map((post) => {
          return (<Post key={post.id} post={post} />);
        });
        return posts;
    }
  }

  // render posts
  render() {
    return (
      <div className="postlist col-md-8">
        {this.renderPostList()}
      </div>
    );
  }
}

// map posts from api server to props
function mapStateToProps({ posts, sortBy }) {
  return { posts, sortBy };
}

// map actions for fetching posts to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAllPosts, getCategoryPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
