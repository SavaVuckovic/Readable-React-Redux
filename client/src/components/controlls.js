import React, { Component } from 'react';
import { connect } from 'react-redux';

class Controlls extends Component {
  render() {
    console.log('PROPS: ');
    console.log(this.props);

    return (
      <div>
        <h4>constolls test</h4>
        <p>{this.props.ex}</p>
        <p>{this.props.testt}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ex: state.ex,
    testt: state.testt
  }
}

export default connect(mapStateToProps)(Controlls);
