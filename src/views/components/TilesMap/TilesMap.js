import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Square from '../Square/Square';

import './TilesMap.scss';

@connect(
  (state) => {
    return {
      ids: state.squareState.ids,
      color: state.colorState
    }
  },
  () => {
    return {}
  }
)
export default class TilesMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: [],
      squareWithColor: []
    };
  }

  componentWillMount() {
    this.setSquareMap(this.props.type);
  }

  componentDidUpdate() {
    this.verifyColoredSquare();
  }

  setSquareMap(type) {
    let squares = [];

    switch (type) {
      case 'apple':
        squares = [
          {shouldBe: '#4CAF50', id: 1},
          {shouldBe: '#4CAF50', id: 1},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0}
        ];
        break;

      default:
        break;

    }

    this.setState({
      squares,
      squareWithColor: squares.filter(square => square.id !== 0)
    });
  }

  verifyColoredSquare() {
    if (this.props.ids.length === this.state.squareWithColor.length) {
      console.log('ended');
    }
  }

  constructSquares(color, square, index) {
    return <Square key={`square_${square.shouldBe}${index}`} color={color} shouldBe={square.shouldBe} id={square.id} />;
  }

  render() {
    return (
      <div className={'TilesMap'}>
        { this.state.squares.map((square, index) => this.constructSquares(this.props.color, square, index)) }
      </div>
    );
  }
}

TilesMap.PropTypes =  {
  type: PropTypes.oneOf(['apple']),
  color: PropTypes.string
}
