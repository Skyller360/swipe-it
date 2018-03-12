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
      squares: ['green']
    };
  }

  switchColor(selectedColor) {
    this.props.switchColor(selectedColor);
  }

  constructPalettes(color) {
    return <div key={`div_${color}`}> <Palette color={color} key={`palette_${color}`} click={() => this.switchColor(color)} /> </div>
  }

  constructSquares(color, shouldBe) {
    return <div key={`div_square_${color}`}> <Square key={`square_${color}`} color={color} shouldBe={shouldBe} /> </div>;
  }

  render() {
    return (
      <div className="App">
        <div className="App_palette">
          { this.state.colors.map(color => this.constructPalettes(color)) }
        </div>
        <div className="App_square">
          { this.state.squares.map(color => this.constructSquares(color, color)) }
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
