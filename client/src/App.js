import React, { Component } from 'react';
import './styles/App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Posts from './routes/posts';
import SinglePost from './routes/singlepost';
import AddPost from './routes/addpost';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Posts} />
            <Route path='/posts/category' component={Posts} />
            <Route path="/posts/category/test" component={SinglePost} />
            <Route path="/posts/add" component={AddPost} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
