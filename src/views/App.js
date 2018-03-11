import React, { Component } from 'react';
import Square from './components/Square/Square.js';
import Palette from './components/Palette/Palette.js';
import { connect } from 'react-redux';
import './App.scss';

const mapStateToProps = (state) => {
  return {
    color: state.colorState.color,
    ids: state.squareState.ids
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    switchColor: (color) => {
      dispatch({
        type: 'CHANGE_COLOR',
        payload: color
      });
    }
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      colors: ['green', 'blue', 'red', 'orange', 'pink'],
      squares: 12
    };
  }

  switchColor(selectedColor) {
    this.props.switchColor(selectedColor);
  }

  constructPalettes(color) {
    return <div key={`div_${color}`}> <Palette color={color} key={`palette_${color}`} click={() => this.switchColor(color)} /> </div>
  }

  constructSquares() {
    let result = [];
    for (let i = 0; i < this.state.squares; i++) {
      result = [
        ...result,
        <div key={`div_${i}`}> <Square key={`square_${i}`} color={this.props.color} /> </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
