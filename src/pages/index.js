import React, { Fragment } from 'react'
import Home from '../components/home/Home'
import SEO from '../components/seo'

import '../index.scss'
import '../App.scss'
import '../bigheader.scss'
import '../buttons.scss'

const IndexPage = () => (
  <Fragment>
    <SEO title="Pamel Joel Beltrè - Front End Designer - React, AngularJS, Javascript, CSS3, HTML5 projects" />
    <Home />
  </Fragment>
)

export default IndexPage
