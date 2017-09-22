export const GET_POSTS = 'GET_POSTS';
export const GET_CATEGORIES = 'GET_CATEGORIES';

// fetch posts from the server
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

// fetch categories from the server
export function getCategories() {
  let request = fetch('http://localhost:3001/categories', { headers: {
    Authorization: 'Something Random'
  }});

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
