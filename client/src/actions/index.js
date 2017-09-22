export const GET_POSTS = 'GET_POSTS';

export function getPosts() {
  let request = fetch('http://localhost:3001/posts', { headers: {
    Authorization: 'Something Random'
  }});

  return (dispatch) => {
    request
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: GET_POSTS,
        payload: data
      });
    });
  };

}
