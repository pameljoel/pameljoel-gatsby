import React from 'react';
import Link from 'gatsby-link';

const Branding = () => {
  return (
    <Link className="nav-logo__container" to="/">
      <div className="nav-logo">
        <strong>P</strong>amel <strong>J</strong>oel <strong>B</strong>eltrè{' '}
        <small> | Personal Portfolio site</small>
      </div>
    </Link>
  );
};

export default Branding;
