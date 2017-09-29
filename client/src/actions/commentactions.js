export const ADD_COMMENT = 'ADD_COMMENT';
export const GET_COMMENTS = 'GET_COMMENTS';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT';
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT';

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

// add a comment
export function addComment(author, body, postID) {
  let commentObj = {
    id: guid(),
    timestamp: Date.now(),
    author,
    body,
    parentId: postID
  };

  let request = fetch(`${ROOT_URL}/comments`, {
    headers: jsonHeaders,
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

// fetch comments
export function getComments(id) {
  let request = fetch(`${ROOT_URL}/posts/${id}/comments`, { headers });

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

// edit comment
export function editComment(id, body) {
  const commentObj = {
    timestamp: Date.now(),
    body
  };

  let request = fetch(`${ROOT_URL}/comments/${id}`, {
    headers: jsonHeaders,
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
    headers,
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
  let request = fetch(`${ROOT_URL}/comments/${id}`, {
    headers: jsonHeaders,
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
  let request = fetch(`${ROOT_URL}/comments/${id}`, {
    headers: jsonHeaders,
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
