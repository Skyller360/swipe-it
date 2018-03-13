import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import './Square.scss';


@connect(
  (state) => {
    return {
      color: state.colorState.color
    }
  },
  (dispatch) => {
    return {
      colored: (id) => {
        dispatch({
          type: 'COLORED',
          payload: id
        });
      }
    }
})
export default class Square extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
      shouldBe: this.props.shouldBe,
      display: this.props.shouldBe === 'white'
    };
  }

  switchColor() {
    if (this.props.color === this.state.shouldBe) {
      this.setState({
        color: this.props.color
      });
      this.props.colored(this.props.id);
    }
  }

  render() {
    return (
      <div className={this.state.display ? 'square' : 'square_border'} style={{backgroundColor: this.state.color}} onClick={() => this.switchColor()}>{this.state.display ? '' : this.props.id}</div>
    );
  }
}

Square.propTypes = {
  color: PropTypes.shape({
    color: PropTypes.string
  }),
  shouldBe: PropTypes.string,
  id: PropTypes.number
};
