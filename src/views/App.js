import React, { Component } from 'react';
// import Square from './components/Square/Square.js';
import TilesMap from './components/TilesMap/TilesMap.js';
import Palette from './components/Palette/Palette.js';
import { connect } from 'react-redux';
import './App.scss';

@connect(
  (state) => {
    return {
      color: state.colorState.color
    }
  },
  (dispatch) => {
    return {
      switchColor: (color) => {
        dispatch({
          type: 'CHANGE_COLOR',
          payload: color
        });
      }
    }
  }
)
export default class App extends Component {

  constructor() {
    super();
    this.state = {
      colors: [{color: 'green', id: 1}, {color: 'blue', id: 2}, {color: 'red', id: 3}, {color: 'orange', id: 4}, {color: 'pink', id: 5}],
      selectedColor: 'white'
    };
  }

  switchColor(selectedColor) {
    this.props.switchColor(selectedColor);
  }

  constructPalettes(obj, index) {
    return <div key={`div_${index}`}> <Palette color={obj.color} id={obj.id} key={`palette_${obj.color}${obj.id}${index}`} click={() => this.switchColor(obj.color)} /> </div>
  }

  render() {
    return (
      <div className="App">
        <div className="App_palette">
          { this.state.colors.map((obj, index) => this.constructPalettes(obj, index)) }
        </div>
        <div>
          <TilesMap type="apple" />
        </div>
      </div>
    );
  }
}
