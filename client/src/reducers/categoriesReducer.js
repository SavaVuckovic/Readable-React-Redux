import { GET_CATEGORIES } from '../actions';

export function categoriesReducer(state=null, action) {
  switch(action.type) {
    case GET_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
}
