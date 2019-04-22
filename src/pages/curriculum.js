import React, { Fragment } from 'react'
import SEO from '../components/seo'
import Curriculum from '../components/curriculum/Curriculum'
import { PropTypes } from 'prop-types'
import '../index.scss'
import '../App.scss'
import '../bigheader.scss'

const CurriculumPage = props => (
  <Fragment>
    <SEO title="Pamel Joel Beltrè - Front End Designer - React, AngularJS, Webpack" />
    <Curriculum setSelectedProject={props.setSelectedProject} />
  </Fragment>
)

CurriculumPage.propTypes = {
  setSelectedProject: PropTypes.func,
}

CurriculumPage.defaultProps = {
  setSelectedProject: null,
}

export default CurriculumPage
