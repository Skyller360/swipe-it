import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Square.scss';

const mapStateToProps = (state) => {
  return {
    color: state.colorState.color
  }
}

class Square extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color
    };
  }

  componentWillMount() {
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

export default connect(mapStateToProps)(Square);
