import React, { Component } from 'react';
import Link from 'gatsby-link';

export default class Branding extends Component {
  render() {
    return (
      <Link className="nav-logo__container" to="/">
        <div className="nav-logo"><strong>P</strong>amel <strong>J</strong>oel <strong>B</strong>eltrè <small> | Personal Portfolio site</small></div>
      </Link>
    );
  }
}
