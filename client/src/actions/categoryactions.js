export const GET_CATEGORIES = 'GET_CATEGORIES';

// root URL and headers
const ROOT_URL = 'http://localhost:3001';
const headers = new Headers({
  'Authorization': 'Something Random'
})

// fetch categories from the server
export function getCategories() {
  let request = fetch(`${ROOT_URL}/categories`, { headers });

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
