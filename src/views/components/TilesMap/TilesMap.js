import React, { Component } from 'react';
import { connect } from 'react-redux';
import { gameTypes } from '../../../state/ducks/game';
import PropTypes from 'prop-types';
import Square from '../Square/Square';

import './TilesMap.scss';

@connect(
  (state) => {
    return {
      ids: state.squareState.ids,
      color: state.colorState,
      game: state.gameState
    }
  },
  (dispatch) => {
    return {
      endGame: () => {
        dispatch({
          type: gameTypes.ENDED
        });
      }
    }
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

      case 'cherry':
        squares = [
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: '#4CAF50', id: 1},
          {shouldBe: '#4CAF50', id: 1},
          {shouldBe: '#4CAF50', id: 1},
          {shouldBe: '#4CAF50', id: 1},
          {shouldBe: '#4CAF50', id: 1}, // End First Line
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: '#4CAF50', id: 1},
          {shouldBe: '#4CAF50', id: 1},
          {shouldBe: '#4CAF50', id: 1},
          {shouldBe: '#4CAF50', id: 1},
          {shouldBe: '#4CAF50', id: 1},
          {shouldBe: 'white', id: 0}, // End Second Line
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: '#4CAF50', id: 1},
          {shouldBe: '#4CAF50', id: 1},
          {shouldBe: '#4CAF50', id: 1},
          {shouldBe: '#4CAF50', id: 1},
          {shouldBe: '#4CAF50', id: 1},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0}, // End Third Line
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: '#4CAF50', id: 1},
          {shouldBe: '#4CAF50', id: 1},
          {shouldBe: '#4CAF50', id: 1},
          {shouldBe: '#4CAF50', id: 1},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0}, // End Fourth Line
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: '#4CAF50', id: 1},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0}, // End Fifth Line
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: '#4CAF50', id: 1},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0}, // End Sixth Line
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: '#4CAF50', id: 1},
          {shouldBe: 'white', id: 0},
          {shouldBe: '#4CAF50', id: 1},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0}, // End Seventh Line
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: '#4CAF50', id: 1},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: '#4CAF50', id: 1},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0}, // End Seventh Line
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: '#4CAF50', id: 1},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: '#4CAF50', id: 1},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0}, // End Eighth Line
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: '#4CAF50', id: 1},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: '#4CAF50', id: 1},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0}, // End Ninth Line
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: '#4CAF50', id: 1},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: '#4CAF50', id: 1},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0}, // End Tenth Line
          {shouldBe: 'white', id: 0},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0}, // End Eleventh Line
          {shouldBe: '#F44336', id: 3},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: 'white', id: 0},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: 'white', id: 0},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: 'white', id: 0},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: 'white', id: 0}, // End Twelve Line
          {shouldBe: '#F44336', id: 3},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: 'white', id: 0},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: 'white', id: 0}, // End Thirteen Line
          {shouldBe: '#F44336', id: 3},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: 'white', id: 0},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: 'white', id: 0}, // End Fourteen Line
          {shouldBe: 'white', id: 0},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: '#F44336', id: 3},
          {shouldBe: 'white', id: 0},
          {shouldBe: 'white', id: 0}, // End Fifteen Line
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
    if (this.props.ids.length === this.state.squareWithColor.length && !this.props.game.ended) {
      this.props.endGame();
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
