import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Square.scss';

const mapStateToProps = (state) => {
  return {
    color: state.colorState.color
  }
}

const mapDispatchToProps = dispatch => {
  return {
    colorized: (id) => {
      dispatch({
        type: 'COLORIZED',
        payload: id
      });
    }
  }
}

class Square extends Component {

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
    }
  }

  render() {
    return (
      <div className={this.state.display ? 'square' : 'square_border'} style={{backgroundColor: this.state.color}} onClick={() => this.switchColor()}>{this.state.display ? '' : this.props.id}</div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Square);
