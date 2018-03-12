import React, { Component } from 'react';
import { connect } from 'react-redux';

import './TilesMap.scss';

const mapStateToProps = (state) => {
  return {
    color: state.colorState.color
  }
}

class TilesMap extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('props', this.props);
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
      <div className="TilesMap">
      </div>
    );
  }
}

export default connect(mapStateToProps)(TilesMap);
