export const GET_COMMENTS = 'GET_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT';
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT';

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

// fetch comments
export function getComments(id) {
  let request = fetch(`${ROOT_URL}/posts/${id}/comments`, headers);

  return (dispatch) => {
    request
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: GET_COMMENTS,
        payload: data
      });
    });
  };
}

// add a comment
export function addComment(author, body, postID) {
  let commentObj = {
    id: guid(),
    timestamp: Date.now(),
    author,
    body,
    parentId: postID
  };

  const myHeaders = new Headers({
    'Content-Type': 'application/json',
    'Authorization': 'Something Random'
  });

  let request = fetch(`${ROOT_URL}/comments`, {
    headers: myHeaders,
    method: 'POST',
    body: JSON.stringify(commentObj)
  });

  return (dispatch) => {
    request
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: ADD_COMMENT,
          payload: data
        });
      });
  };
}

// edit comment
export function editComment(id, body) {
  const myHeaders = new Headers({
    'Content-Type': 'application/json',
    'Authorization': 'Something Random'
  });

  const commentObj = {
    timestamp: Date.now(),
    body
  };

  let request = fetch(`${ROOT_URL}/comments/${id}`, {
    headers: myHeaders,
    method: 'PUT',
    body: JSON.stringify(commentObj)
  });

  return (dispatch) => {
    request
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: EDIT_COMMENT,
          payload: data
        });
      });
  };
}

// delete comment
export function deleteComment(id) {
  let request = fetch(`${ROOT_URL}/comments/${id}`, {
    headers: {
      'Authorization': 'Something Random'
    },
    method: 'DELETE'
  });

  return (dispatch) => {
    request
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: DELETE_COMMENT,
          payload: id
        });
      });
  };
}

// upvote comment
export function upVoteComment(id) {
  const myHeaders = new Headers({
    'Content-Type': 'application/json',
    'Authorization': 'Something Random'
  });

  let request = fetch(`${ROOT_URL}/comments/${id}`, {
    headers: myHeaders,
    method: 'POST',
    body: JSON.stringify({ option: 'upVote' })
  });

  return (dispatch) => {
    request
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: UPVOTE_COMMENT,
          payload: data
        });
      });
  };
}

// downvote comment
export function downVoteComment(id) {
  const myHeaders = new Headers({
    'Content-Type': 'application/json',
    'Authorization': 'Something Random'
  });

  let request = fetch(`${ROOT_URL}/comments/${id}`, {
    headers: myHeaders,
    method: 'POST',
    body: JSON.stringify({ option: 'downVote' })
  });

  return (dispatch) => {
    request
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: DOWNVOTE_COMMENT,
          payload: data
        });
      });
  };
}
