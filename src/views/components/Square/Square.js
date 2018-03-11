import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Square.scss';

const mapStateToProps = (state) => {
  return {
    color: state.colorState
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
    console.log('props', this.props);
  }

  switchColor() {
    console.log('props', this.props.color);
    this.setState({
      color: this.props.color.color
    });
  }

  render() {
    return (
      <div className={'square'} style={{backgroundColor: this.state.color}} onClick={() => this.switchColor()}></div>
    );
  }
}

export default connect(mapStateToProps)(Square);
