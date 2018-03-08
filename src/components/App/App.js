import React, { Component } from 'react';
import Square from '../Square/Square.js';
import './App.scss';

class App extends Component {

  constructor() {
    super();

    this.state = {
      squareNbr: 12,
      squares: []
    };
  }

  componentWillMount() {
    this.constructSquares();
  }

  constructSquares() {
    let squares = [];

    for (let i = 0; i < this.state.squareNbr; i++) {
      squares = [
        ...squares,
        <Square key={i} />
      ];
    }

    this.setState({
      squares
    });

  }

  render() {
    return (
      <div className="App">
        { this.state.squares.map(square => square) }
      </div>
    );
  }
}

export default App;
