export const GET_COMMENTS = 'GET_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';

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

  let request = fetch(`${ROOT_URL}/comments`, {
    headers: {
      Authorization: 'Something Random'
    },
    method: 'POST',
    body: JSON.stringify(commentObj)
  });

  return (dispatch) => {
    request.then((res) => {
      dispatch({
        type: ADD_COMMENT,
        payload: res.data
      });
    });
  };
}
