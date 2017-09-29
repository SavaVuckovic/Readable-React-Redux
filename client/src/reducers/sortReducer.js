import { SORT_POSTS_BY_TIMESTAMP, SORT_POSTS_BY_VOTES } from '../actions';

export function sortReducer(state, action) {
  switch(action.type) {
    case SORT_POSTS_BY_TIMESTAMP:
      return 'timestamp';
    case SORT_POSTS_BY_VOTES:
      return 'votes';
    default:
      return 'votes';
  }
}
