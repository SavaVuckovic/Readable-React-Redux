import React, { Component } from 'react';
import './styles/App.css';
import { Switch, Route } from 'react-router-dom';
import Posts from './routes/posts';
import SinglePost from './routes/singlepost';
import CategoryPosts from './routes/categoryposts';
import AddPost from './routes/addpost';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/posts/add" component={AddPost} />
          <Route path="/posts/:category/:post_id" component={SinglePost} />
          <Route path="/posts/:category" component={CategoryPosts} />
        </Switch>
      </div>
    );
  }
}

export default App;
