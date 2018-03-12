import React, { Component } from 'react';
// import io from 'socket.io-client';

import './Palette.scss';

class Palette extends Component {

  constructor(props) {
    super(props);

    this.state = {
      color: ''
    };
  }

  componentWillMount() {
    this.setState({
      color: this.props.color
    });
  }

  render() {
    return (
      <div className={'palette'} style={{backgroundColor: this.state.color}} onClick={this.props.click}>{this.props.id}</div>
    );
  }
}

export default Palette;
