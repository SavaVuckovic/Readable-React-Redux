export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_CATEGORY_POSTS = 'GET_CATEGORY_POSTS';
export const GET_SINGLE_POST = 'GET_SINGLE_POST';
export const ADD_POST = 'ADD_POST';

// root URL and headers
const ROOT_URL = 'http://localhost:3001';
const headers = {
  headers: {
    Authorization: 'Something Random'
  }
}

// generate UUID
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + s4() + s4() + s4();
}

// add post
export function addPost(title, body, author, category) {
  const postObj = {
    id: guid(),
    timestamp: Date.now(),
    title,
    body,
    author,
    category
  };

  const myHeaders = new Headers({
    'Content-Type': 'application/json',
    'Authorization': 'Something Random'
  });

  const request = fetch(`${ROOT_URL}/posts`, {
    headers: myHeaders,
    method: 'POST',
    body: JSON.stringify(postObj)
  });

  return (dispatch) => {
    request
      .then((res) => {
        dispatch({
          type: ADD_POST,
          payload: res.data
        });
      });
  };
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
