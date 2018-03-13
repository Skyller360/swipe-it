import React, { Component } from 'react';
import { connect } from 'react-redux';
import Square from '../Square/Square';

import './TilesMap.scss';

const mapStateToProps = (state) => {
  return {
    squares: state.squareState,
    color: state.colorState
  }
}

class TilesMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: []
    };
  }

  componentWillMount() {
    console.log('props', this.props);
    this.setSquareMap(this.props.type);
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps, this.props);
  }

  setSquareMap(type) {
    let squares = [];

    switch (type) {
      case 'apple':
        squares = [
          {shouldBe: 'green', id: 1},
          {shouldBe: 'green', id: 1},
          {shouldBe: 'white', id: 3},
          {shouldBe: 'white', id: 4},
          {shouldBe: 'white', id: 5},
          {shouldBe: 'white', id: 1},
          {shouldBe: 'red', id: 3},
          {shouldBe: 'red', id: 3},
          {shouldBe: 'white', id: 4},
          {shouldBe: 'white', id: 5},
          {shouldBe: 'white', id: 1},
          {shouldBe: 'red', id: 3},
          {shouldBe: 'red', id: 3},
          {shouldBe: 'white', id: 4},
          {shouldBe: 'white', id: 5}
        ];
        break;

      default:
        break;

    }

    this.setState({
      squares
    });
  }

  constructSquares(color, square, index) {
    return <div key={`div_square_${index}`}> <Square key={`square_${square.shouldBe}${index}`} color={color} shouldBe={square.shouldBe} id={square.id} /></div>;
  }

  render() {
    return (
      <div className={'TilesMap'}>
        { this.state.squares.map((square, index) => this.constructSquares(this.props.color, square, index)) }
      </div>
    );
  }
}

export default connect(mapStateToProps)(TilesMap);
