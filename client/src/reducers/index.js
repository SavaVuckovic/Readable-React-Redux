import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer';

const rootReducer = combineReducers({
  ex: () => 'another one',
  posts: postsReducer
});

export default rootReducer;
