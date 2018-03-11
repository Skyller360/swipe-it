import React, { Component } from 'react';
import Square from './components/Square/Square.js';
import Palette from './components/Palette/Palette.js';
import './App.scss';

class App extends Component {

  constructor() {
    super();
    this.state = {
      selectedColor: 'white',
      colors: ['green', 'red', 'blue', 'orange'],
      squares: 12
    };
  }

  switchColor(selectedColor) {
    this.setState({
      selectedColor
    });
  }

  constructPalettes(color) {
    return <div key={`div_${color}`}> <Palette color={color} key={`palette_${color}`} click={() => this.switchColor(color)} /> </div>
  }

  constructSquares() {
    let result = [];
    for (let i = 0; i < this.state.squares; i++) {
      result = [
        ...result,
        <div key={`div_${i}`}> <Square key={`square_${i}`} color={this.state.selectedColor} /> </div>
      ]
    }
    return result;
  }

  render() {
    return (
      <div className="App">
        <div className="App_palette">
          { this.state.colors.map(color => this.constructPalettes(color)) }
        </div>
        <div className="App_square">
          { this.constructSquares() }
        </div>
      </div>
    );
  }
}

export default App;
