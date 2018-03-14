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
  () => {
    return {}
  }
)
export default class App extends Component {

  constructor() {
    super();
    this.state = {
      colors: [{color: '#4CAF50', id: 1}, {color: '#2196F3', id: 2}, {color: '#F44336', id: 3}, {color: '#FF9800', id: 4}, {color: '#E91E63', id: 5}],
      selectedColor: 'white'
    };
  }

  constructPalettes(obj, index) {
    return <Palette color={obj.color} id={obj.id} key={`palette_${index}`} />;
  }

  render() {
    return (
      <section className={'App'}>
        <header className={'App_header'}>
          <h1 className={'App_header_title'}>Pixel art</h1>
        </header>
        <section className={'App_tiles'}>
          <TilesMap type='apple' />
        </section>
        <section className={'App_palette'}>
          { this.state.colors.map((obj, index) => this.constructPalettes(obj, index)) }
        </section>
      </section>
    );
  }
}
