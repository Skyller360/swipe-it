import React, { Component } from 'react';
// import io from 'socket.io-client';

import './Square.scss';

class Square extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: ''
    };
  }

  componentWillMount() {
    this.setState({
      color: 'white'
    });
  }

  switchColor() {
    this.setState({
      color: this.props.color
    });
  }

  render() {
    return (
      <div className={'square'} style={{backgroundColor: this.state.color}} onClick={() => this.switchColor()}></div>
    );
  }
}

export default Square;
