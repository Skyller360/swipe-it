import React, { Component } from 'react';
import Square from '../Square/Square.js';
import Palette from '../Palette/Palette.js';
import './App.scss';

class App extends Component {

  constructor() {
    super();
    this.switchColor = this.switchColor.bind(this);

    this.state = {
      selectedColor: 'white',
      colors: ['green', 'red', 'blue']
    };
  }

  switchColor(selectedColor) {
    this.setState({
      selectedColor
    });
  }

  constructElems(color) {
    return <div key={`div_${color}`}> <Square key={`square_${color}`} color={this.state.selectedColor} /> <Palette color={color} key={`palette_${color}`} click={() => this.switchColor(color)} /> </div>
  }

  render() {
    return (
      <div className="App">
        { this.state.colors.map(color => this.constructElems(color)) }
      </div>
    );
  }
}

export default App;
