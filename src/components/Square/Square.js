import React, { Component } from 'react';
// import io from 'socket.io-client';

import './Square.scss';

class Square extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: 'red'
      // socket: io('http://localhost:8800')
    };
  }

  componentWillMount() {
    // this.state.socket.on('connect', () => {
    //   console.log('connected');
    // })
  }

  switchColor() {
    this.setState({
      color: this.state.color === 'red' ? 'blue' : 'red'
    });
  }

  render() {
    return (
      <div className={`square square_${this.state.color}`} onClick={() => this.switchColor()}></div>
    );
  }
}

export default Square;
