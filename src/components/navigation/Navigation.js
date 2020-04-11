import React, { Component, Fragment } from 'react';
import { enableCrisp } from '../crisp/Crisp';

import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';

import './navigation.scss';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: true,
    };
    this.isMobile = this.isMobile.bind(this);
  }
  componentDidMount() {
    this.isMobile();
    window.addEventListener('resize', this.isMobile);
    enableCrisp();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.isMobile);
  }

  isMobile() {
    const { isMobile } = this.state;
    const mobileBreakPoint = 768;
    const bool = window.innerWidth < mobileBreakPoint;
    if (bool === isMobile) {
      return;
    }

    this.setState({ isMobile: bool });
  }

  render() {
    const { isMobile } = this.state;
    return (
      <Fragment>
        <nav className="main-navigation">
          {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
        </nav>
      </Fragment>
    );
  }
}
