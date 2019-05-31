import React, { Fragment } from 'react'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Fragment>

    <div className="card" >
      <div className="error-panel">
        <SEO title="404: Not found" />
        <h1 className="error-code">NOT FOUND</h1>
        <div className="error-message">
          You just hit a route that doesn&#39;t exist... the sadness.
          </div>
      </div>
    </div>
  </Fragment>
)

export default NotFoundPage
