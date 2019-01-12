import React, { Component } from 'react';

import arrowLeft from './../carousel/arrow-left.svg';


export default class LeftNavButton extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        <img src={arrowLeft} alt="previous" />;
      </button>
    )
  }
}

