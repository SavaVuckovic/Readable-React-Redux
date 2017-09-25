import React, { Component } from 'react';

class Comment extends Component {
  chooseImageRandomly() {
    const randNum = Math.floor(Math.random()*7+1);
    return require(`../images/user_${ randNum }.jpg`);
  }

  render() {
    return (
      <div className="comment">
        <div className="comment-header">
          <div className="comment-img">
            <img src={this.chooseImageRandomly()} alt="user" />
          </div>
          <div className="comment-author">
            <h4>Sava Vuckovic</h4>
            <span>Some timestamp</span>
          </div>
        </div>
        <div className="comment-text">
          jashjlsa hdkjashdk sajhdjks hak asdsdad aas
          jashjlsa hdkj jashjl sa hdkja shdk sajhdjks hak a
          sdsdad aasashd
          k sajhdjks hak asdsdad aas
        </div>
        <div className="comment-controlls">
          <span>some vote controlls here</span>
        </div>
      </div>
    );
  }
}

export default Comment;
