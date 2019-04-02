import React, { Component } from 'react';

import './closeButton.scss';

export default class CloseButton extends Component {
  render() {
    return (
      <div className="close-button" onClick={this.props.callback}>×</div>
    );
  }
}
