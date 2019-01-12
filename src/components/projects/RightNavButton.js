import React, { Component } from 'react';

import arrowRight from './../carousel/arrow-right.svg';


export default class RightNavButton extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        <img className="arrow-left-icon" src={arrowRight} alt="next" />
      </button>
    );
  }
}
