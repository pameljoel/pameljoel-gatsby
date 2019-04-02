import React, { Component } from 'react';

import { animateScroll } from 'react-scroll';

import ArrowUp from './arrow-up.svg';
import './scrollTop.scss';

export default class ScrollTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTop: true,
    };
  }

  goToTop() {
    animateScroll.scrollTo(0, 0);
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 300;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }
  render() {
    return (
      <div
        className={
          `scroll-to-top ${this.state.isTop ? 'not-visible' : 'visible'}`
        }
        onClick={this.goToTop}
      >
        <img src={ArrowUp} alt="arrow up" />
      </div>
    );
  }
}
