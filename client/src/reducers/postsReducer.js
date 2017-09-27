import {
  GET_ALL_POSTS,
  GET_CATEGORY_POSTS,
  DELETE_POST
} from '../actions';

export function postsReducer(state = [], action) {
  switch(action.type) {
    case GET_ALL_POSTS:
    case GET_CATEGORY_POSTS:
      return action.payload;
    case DELETE_POST:
      let newState = state.filter((post) => {
        return post.id !== action.payload;
      });
      return newState
    default:
      return state;
  }
}
