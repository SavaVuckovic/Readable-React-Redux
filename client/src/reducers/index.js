import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer';
import { categoriesReducer } from './categoriesReducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  posts: postsReducer,
  onepost: postsReducer
});

export default rootReducer;
