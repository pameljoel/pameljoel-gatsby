import React, { Component } from 'react';

import arrowLeft from './../carousel/arrow-left.svg';

export default class LeftNavButton extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <button onClick={onClick}>
        <img src={arrowLeft} alt="previous" />;
      </button>
    )
  }
}

