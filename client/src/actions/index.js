export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORY_POSTS = 'GET_CATEGORY_POSTS';
export const GET_SINGLE_POST = 'GET_SINGLE_POST';

const ROOT_URL = 'http://localhost:3001';
const headers = {
  headers: {
    Authorization: 'Something Random'
  }
}

// fetch posts from the server
export function getAllPosts() {
  let request = fetch(`${ROOT_URL}/posts`, headers);
  return (dispatch) => {
    request
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_ALL_POSTS,
          payload: data
        });
      });
  };
}

// fetch categories from the server
export function getCategories() {
  let request = fetch(`${ROOT_URL}/categories`, headers);

  return (dispatch) => {
    request
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_CATEGORIES,
          payload: data.categories
        });
      });
  };
}

// fetch posts for specific category
export function getCategoryPosts(category) {
  let request = fetch(`${ROOT_URL}/${category}/posts`, headers);

  return (dispatch) => {
    request
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: GET_CATEGORY_POSTS,
        payload: data
      });
    });
  };
}

// fetch single post
export function getSinglePost(id) {
  let request = fetch(`${ROOT_URL}/posts/${id}`, headers);

  return (dispatch) => {
    request
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: GET_SINGLE_POST,
        payload: data
      });
    });
  };
}
