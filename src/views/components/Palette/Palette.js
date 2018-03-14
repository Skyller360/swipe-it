import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Palette.scss';

@connect(
  () => {
    return {}
  },
  (dispatch) => {
    return {
      switchColor: (color) => {
        dispatch({
          type: 'CHANGE_COLOR',
          payload: color
        });
      }
    }
  }
)
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

  switchColor() {
    this.props.switchColor(this.state.color);
  }

  render() {
    return (
      <div className={'palette'} style={{backgroundColor: this.state.color}} onClick={() => this.switchColor()}>{this.props.id}</div>
    );
  }
}

export default Palette;
