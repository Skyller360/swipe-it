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
      colors: [{color: 'green', id: 1}, {color: 'blue', id: 2}, {color: 'red', id: 3}, {color: 'orange', id: 4}, {color: 'pink', id: 5}],
      squares: [
        {shouldBe: 'green', id: 1},
        {shouldBe: 'blue', id: 2},
        {shouldBe: 'red', id: 3},
        {shouldBe: 'orange', id: 4},
        {shouldBe: 'pink', id: 5},
        {shouldBe: 'green', id: 1},
        {shouldBe: 'blue', id: 2},
        {shouldBe: 'red', id: 3},
        {shouldBe: 'orange', id: 4},
        {shouldBe: 'pink', id: 5},
        {shouldBe: 'green', id: 1},
        {shouldBe: 'blue', id: 2},
        {shouldBe: 'red', id: 3},
        {shouldBe: 'orange', id: 4},
        {shouldBe: 'pink', id: 5}
      ],
      selectedColor: 'white'
    };
  }

  switchColor(selectedColor) {
    this.props.switchColor(selectedColor);
  }

  constructPalettes(obj) {
    return <div key={`div_${obj.color}${obj.id}`}> <Palette color={obj.color} id={obj.id} key={`palette_${obj.color}${obj.id}`} click={() => this.switchColor(obj.color)} /> </div>
  }

  constructSquares(color, square) {
    return <div key={`div_square_${square.shouldBe}`}> <Square key={`square_${square.shouldBe}`} color={color} shouldBe={square.shouldBe} id={square.id} /></div>;
  }

  render() {
    return (
      <div className="App">
        <div className="App_palette">
          { this.state.colors.map(obj => this.constructPalettes(obj)) }
        </div>
        <div className="App_square">
          { this.state.squares.map(square => this.constructSquares(this.state.selectedColor, square)) }
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
