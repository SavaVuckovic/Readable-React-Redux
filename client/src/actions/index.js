// export category action types
export { GET_CATEGORIES } from './categoryactions';

// export post action types
export {
  SORT_POSTS_BY_TIMESTAMP,
  SORT_POSTS_BY_VOTES,
  GET_ALL_POSTS,
  GET_CATEGORY_POSTS,
  GET_SINGLE_POST,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  UPVOTE_POST,
  DOWNVOTE_POST
} from './postactions';

// export comment action types
export {
  GET_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT
} from './commentactions';

// export category actions
export { getCategories} from './categoryactions';

// export post actions
export {
  sortPostsByTime,
  sortPostsByVotes,
  addPost,
  editPost,
  getAllPosts,
  getCategoryPosts,
  getSinglePost,
  deletePost,
  upVotePost,
  downVotePost
} from './postactions';

// export comment actions
export {
  getComments,
  addComment,
  deleteComment,
  upVoteComment,
  downVoteComment
} from './commentactions'
