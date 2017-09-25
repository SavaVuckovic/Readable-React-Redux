import {
  GET_ALL_POSTS,
  GET_CATEGORY_POSTS,
  GET_SINGLE_POST
} from '../actions';

export function postsReducer(state = [], action) {
  switch(action.type) {
    case GET_ALL_POSTS:
    case GET_CATEGORY_POSTS:
      state = action.payload;
      return state;
    case GET_SINGLE_POST:
      return [ action.payload ];
    default:
      return state;
  }
}
