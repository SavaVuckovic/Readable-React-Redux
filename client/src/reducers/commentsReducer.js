import {
  GET_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT
} from '../actions';

export function commentsReducer(state = [], action) {
  switch(action.type) {
    case GET_COMMENTS:
      if(state.length === 0) {
        return [ ...action.payload ];
      } else  {
        // list of IDs of the comments in the state
        var stateCommentsIDList = state.map((comm) => {
          return comm.id;
        });
        // add comments if they are not in the state already
        var newComments = [];
        for(let i = 0; i < action.payload.length; i++) {
          if(stateCommentsIDList.indexOf(action.payload[i].id) === -1) {
            newComments.push(action.payload[i]);
          }
        }
        // return old state and new comments if any
        return [ ...state, ...newComments ]
      }
    case ADD_COMMENT:
      return [ ...state, action.payload ];
    case DELETE_COMMENT:
      var newState = state.filter((comment) => {
        return comment.id !== action.payload;
      });
      return newState;
    case UPVOTE_COMMENT:
    case DOWNVOTE_COMMENT:
      var oldComments = state.filter((comm) => {
        return comm.id !== action.payload.id;
      });
      return [ action.payload, ...oldComments ];
    default:
      return state;
  }
}
