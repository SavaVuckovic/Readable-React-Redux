import { GET_COMMENTS, ADD_COMMENT } from '../actions';

export function commentsReducer(state = [], action) {
  switch(action.type) {
    case GET_COMMENTS:
      return action.payload;
    case ADD_COMMENT:
      return [ ...state, action.payload ];
    default:
      return state;
  }
}
