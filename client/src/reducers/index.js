import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer';
import { activePostReducer } from './activePostReducer';
import { categoriesReducer } from './categoriesReducer';
import { commentsReducer } from './commentsReducer';

// combine all reducers
const rootReducer = combineReducers({
  categories: categoriesReducer,
  posts: postsReducer,
  activePost: activePostReducer,
  comments: commentsReducer
});

export default rootReducer;
