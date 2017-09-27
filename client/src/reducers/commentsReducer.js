import {
  GET_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT
} from '../actions';

export function commentsReducer(state = [], action) {
  switch(action.type) {
    case GET_COMMENTS:
      return action.payload;
    case ADD_COMMENT:
      return [ ...state, action.payload ];
    case DELETE_COMMENT:
      let newState = state.filter((comment) => {
        return comment.id !== action.payload;
      });
      return newState;
    default:
      return state;
  }
}
