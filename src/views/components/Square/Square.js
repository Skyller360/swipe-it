import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from "material-ui/Paper";
import PropTypes from 'prop-types';

import './Square.scss';

@connect(
  (state) => {
    return {color: state.colorState.color}
  },
  (dispatch) => {
    return {
      colored: (id) => {
        dispatch({type: 'COLORED', payload: id});
      }
    }
  }
)
export default class Square extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
      shouldBe: this.props.shouldBe,
      display: this.props.shouldBe === 'white',
      alreadyColored: false
    };
  }

  switchColor() {
    if (this.props.color === this.state.shouldBe && !this.state.alreadyColored) {
      this.setState({
        color: this.props.color,
        alreadyColored: true
      });
      this.props.colored(this.props.id);
    }
  }

  squareDisplay() {
    if (!this.state.display) {
      return <Paper className={'square'} elevation={1} style={{backgroundColor: this.state.color}} onClick={() => this.switchColor()}>
                <span className={'square_text'}>{ this.props.id }</span>
              </Paper>
    } else {
      return <div className={'square'}></div>
    }
  }

  render() {
    return (
      <div>
        { this.squareDisplay() }
      </div>
    );
  }
}

Square.propTypes = {
  color: PropTypes.shape({color: PropTypes.string}),
  shouldBe: PropTypes.string,
  id: PropTypes.number
};
