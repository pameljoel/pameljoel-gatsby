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
    enableCrisp();

    window.addEventListener('resize', this.isMobile);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.isMobile);
  }

  isMobile() {
    const mobileBreakPoint = 768;
    const bool = window.innerWidth < mobileBreakPoint;

    this.setState({ isMobile: bool });
  }

  HandleNavigation() {
    const { isMobile } = this.state;
    return isMobile ? <MobileNavigation /> : <DesktopNavigation />;
  }

  render() {
    return (
      <Fragment>
        <nav className="main-navigation">{this.HandleNavigation()}</nav>
      </Fragment>
    );
  }
}
