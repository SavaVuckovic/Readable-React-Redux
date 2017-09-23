import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';
import './styles/bootstrap-grid.min.css';
import './styles/index.css';
import App from './App';
import reducers from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

// store with middleware and redux devtools extension enabled
export const store = createStore(
  reducers,
  composeWithDevTools(
    //applyMiddleware(logger, thunk)
    applyMiddleware(thunk)
  )
);

// connect the app to the store and render it
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
