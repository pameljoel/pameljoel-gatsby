import React, { Component } from 'react';

import './closeButton.scss';

export default class CloseButton extends Component {
  render() {
    const { callback } = this.props;
    return (
      <div className="close-button" onClick={callback}>×</div>
    );
  }
}
