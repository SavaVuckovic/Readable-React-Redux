import {
  SORT_POSTS_BY_TIMESTAMP,
  SORT_POSTS_BY_VOTES,
  UPVOTE_POST,
  DOWNVOTE_POST
} from '../actions';

export function sortReducer(state, action) {
  switch(action.type) {
    case SORT_POSTS_BY_TIMESTAMP:
      return 'timestamp';
    case SORT_POSTS_BY_VOTES:
      return 'votes';
    case UPVOTE_POST:
    case DOWNVOTE_POST:
      if(state === 'timestamp') {
        return 'timestamp';
      } else {
        return 'votes';
      }
    default:
      return 'votes';
  }
}
