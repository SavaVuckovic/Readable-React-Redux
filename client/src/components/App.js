import React, { Component } from 'react';
import '../styles/App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import PostList from './postlist';
import Aside from './aside';
import SinglePost from './singlepost';
import AddPost from './addpost';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <BrowserRouter>
          <div>

            <Route exact path="/" render={() => (
              <div className="row">
                <PostList />
                <Aside />
              </div>
            )} />

            <Route path="/posts/test" component={SinglePost} />

            <Route path="/posts/add" component={AddPost} />

          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
