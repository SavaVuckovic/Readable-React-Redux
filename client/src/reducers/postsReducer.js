import { GET_POSTS } from '../actions';

export function postsReducer(state=null, action) {
  switch(action.type) {
    case GET_POSTS:
      return action.payload;
    default:
      return state;
  }
}
