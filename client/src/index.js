import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './styles/bootstrap-grid.min.css';
import './styles/index.css';
import App from './components/App';
import reducers from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

// store with middleware and redux devtools extension enabled
const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(logger, thunk)
  )
)

// connect the app to the store and render it
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
