import { GET_COMMENTS } from '../actions';

export function commentsReducer(state = [], action) {
  switch(action.type) {
    case GET_COMMENTS:
      return action.payload;
    default:
      return state;
  }
}
