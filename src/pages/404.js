import React, { Fragment } from 'react';
import SEO from '../components/seo';
import Link from 'gatsby-link';
import '../buttons.scss';

const StaticHeader = () => {
  return (
    <header
      className="big-header"
      style={{ marginBottom: '0', paddingBottom: '100px' }}
    >
      <div className="big-header-content">
        <h1 className="">404</h1>
        <div className="subtitle">
          Sorry, could not find the page you're looking for
        </div>
      </div>
      <div className="big-header-background" />
    </header>
  );
};

const NotFoundPage = () => (
  <Fragment>
    <StaticHeader />
    <div className="">
      <div className="error-panel">
        <SEO title="404: Not found" />
        <div className="error-message">
          You just hit a route that doesn&#39;t exist... the sadness.
          <br />
          <br />
          <br />
          <br />
          <div className="container">
            <div className="homepage-container">
              <button className="big-button-primary">
                <Link to="/">back to Home</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default NotFoundPage;
