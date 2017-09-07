import React, { Component } from 'react';
import '../styles/App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import PostList from './postlist';
import Categories from './categories';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <BrowserRouter>

          <Route exact path="/" render={() => (
            <div className="row">
              <PostList />
              <Categories />
            </div>
          )} />

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
