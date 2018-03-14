import React, { Component } from 'react';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';

import './SnackbarNotif.scss';

@connect(
  (state) => {
    return {
      ended: state.gameState.ended
    }
  },
  () => {
    return {}
  }
)
export default class SnackbarNotif extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.ended) {
      this.setState({
        open: true
      });
    }
  }

  handleClose() {
    this.setState({
      open: false
    });
  }

  render() {
    return (
      <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={() => this.handleClose()}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id='message-id'>Game Finished !</span>}
          action={[
            <IconButton
              key='close'
              aria-label='Close'
              color='inherit'
              onClick={() => this.handleClose()}
            >
              X
            </IconButton>,
          ]}
        />
    );
  }
}
