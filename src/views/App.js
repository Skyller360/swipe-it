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
      colors: [{color: 'green', id: 1}, {color: 'blue', id: 2}, {color: 'red', id: 3}, {color: 'orange', id: 4}, {color: 'pink', id: 5}],
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
