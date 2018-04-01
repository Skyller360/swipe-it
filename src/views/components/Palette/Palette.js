import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import { colorTypes } from '../../../state/ducks/color';
import './Palette.scss';

@connect(
  () => {
    return {}
  },
  (dispatch) => {
    return {
      switchColor: (color) => {
        dispatch({
          type: colorTypes.CHANGE_COLOR,
          payload: color
        });
      }
    }
  }
)
export default class Palette extends Component {

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

  switchColor = () => {
    this.props.switchColor(this.state.color);
  }

  render() {
    return (
      <Button variant="fab" color="inherit" aria-label="add" style={{backgroundColor: this.state.color}} onClick={this.switchColor} className={'palette'}>
        <span className={'palette_text'}>{this.props.id}</span>
      </Button>
    );
  }
}
