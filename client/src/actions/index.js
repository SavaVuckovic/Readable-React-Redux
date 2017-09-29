// export category action types
export { GET_CATEGORIES } from './categoryactions';

// export post action types
export {
  ADD_POST,
  GET_ALL_POSTS,
  GET_CATEGORY_POSTS,
  GET_SINGLE_POST,
  EDIT_POST,
  DELETE_POST,
  SORT_POSTS_BY_TIMESTAMP,
  SORT_POSTS_BY_VOTES,
  UPVOTE_POST,
  DOWNVOTE_POST
} from './postactions';

// export comment action types
export {
  ADD_COMMENT,
  GET_COMMENTS,
  EDIT_COMMENT,
  DELETE_COMMENT,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT
} from './commentactions';

// export category actions
export { getCategories} from './categoryactions';

// export post actions
export {
  addPost,
  getAllPosts,
  getCategoryPosts,
  getSinglePost,
  editPost,
  deletePost,
  sortPostsByTime,
  sortPostsByVotes,
  upVotePost,
  downVotePost
} from './postactions';

// export comment actions
export {
  addComment,
  getComments,
  editComment,
  deleteComment,
  upVoteComment,
  downVoteComment
} from './commentactions'
