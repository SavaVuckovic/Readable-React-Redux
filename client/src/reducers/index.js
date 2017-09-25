import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer';
import { categoriesReducer } from './categoriesReducer';
import { commentsReducer } from './commentsReducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  posts: postsReducer,
  comments: commentsReducer
});

export default rootReducer;
