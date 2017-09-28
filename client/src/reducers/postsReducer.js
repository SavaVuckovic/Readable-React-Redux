import {
  GET_ALL_POSTS,
  GET_CATEGORY_POSTS,
  DELETE_POST,
  UPVOTE_POST,
  DOWNVOTE_POST
} from '../actions';

export function postsReducer(state = [], action) {
  switch(action.type) {
    case GET_ALL_POSTS:
    case GET_CATEGORY_POSTS:
      return action.payload;
    case DELETE_POST:
      var newState = state.filter((post) => {
        return post.id !== action.payload;
      });
      return newState;
    case UPVOTE_POST:
    case DOWNVOTE_POST:
      var oldPosts = state.filter((post) => {
        return post.id !== action.payload.id;
      });
      return [ action.payload, ...oldPosts ];
    default:
      return state;
  }
}
