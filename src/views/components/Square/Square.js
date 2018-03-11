import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Square.scss';

const mapStateToProps = (state) => {
  return {
    color: state.colorState
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

class Square extends Component {

  componentWillMount() {
    console.log('props', this.props);
  }

  switchColor() {
    this.props.changeColor();
  }

  render() {
    return (
      <div className={'square'} style={{backgroundColor: this.props.color}} onClick={() => this.switchColor()}></div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Square);
