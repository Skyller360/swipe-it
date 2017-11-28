import React, { Component } from 'react';
import './Square.scss';

class Square extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: 'red'
    };
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
