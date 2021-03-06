export const ADD_POST = 'ADD_POST';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_CATEGORY_POSTS = 'GET_CATEGORY_POSTS';
export const GET_SINGLE_POST = 'GET_SINGLE_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const SORT_POSTS_BY_TIMESTAMP = 'SORT_POSTS_BY_TIMESTAMP';
export const SORT_POSTS_BY_VOTES = 'SORT_POSTS_BY_VOTES';
export const UPVOTE_POST = 'UPVOTE_POST';
export const DOWNVOTE_POST = 'DOWNVOTE_POST';

// root URL and headers
const ROOT_URL = 'http://localhost:3001';

// regular headers
const headers = new Headers({
  'Authorization': 'Something Random'
});

// JSON headers
const jsonHeaders = new Headers({
  'Content-Type': 'application/json',
  'Authorization': 'Something Random'
});

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

  const request = fetch(`${ROOT_URL}/posts`, {
    headers: jsonHeaders,
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

// fetch all posts from the server
export function getAllPosts() {
  let request = fetch(`${ROOT_URL}/posts`, { headers });

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
  let request = fetch(`${ROOT_URL}/${category}/posts`, { headers });

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
  let request = fetch(`${ROOT_URL}/posts/${id}`, { headers });

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

// edit post
export function editPost(id, title, body) {
  const postObj = {
    title,
    body
  };

  let request = fetch(`${ROOT_URL}/posts/${id}`, {
    headers: jsonHeaders,
    method: 'PUT',
    body: JSON.stringify(postObj)
  });

  return (dispatch) => {
    request
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: EDIT_POST,
          payload: data
        });
      });
  };
}

// delete post
export function deletePost(id) {
  let request = fetch(`${ROOT_URL}/posts/${id}`, {
    headers,
    method: 'DELETE'
  });

  return (dispatch) => {
    request
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: DELETE_POST,
          payload: id
        });
      });
  };
}

// sort posts by timestamp
export function sortPostsByTime() {
  return { type: SORT_POSTS_BY_TIMESTAMP };
}

// sort posts by vote score
export function sortPostsByVotes() {
  return { type: SORT_POSTS_BY_VOTES };
}

// upvote a post
export function upVotePost(id) {
  let request = fetch(`${ROOT_URL}/posts/${id}`, {
    headers: jsonHeaders,
    method: 'POST',
    body: JSON.stringify({ option: 'upVote' })
  });

  return (dispatch) => {
    request
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: UPVOTE_POST,
        payload: data
      });
    });
  };
}

// downvote a post
export function downVotePost(id) {
  let request = fetch(`${ROOT_URL}/posts/${id}`, {
    headers: jsonHeaders,
    method: 'POST',
    body: JSON.stringify({ option: 'downVote' })
  });

  return (dispatch) => {
    request
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: DOWNVOTE_POST,
        payload: data
      });
    });
  };
}
