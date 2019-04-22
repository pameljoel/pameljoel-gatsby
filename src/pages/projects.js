import React from 'react'
import Projects from '../components/projects/Projects'
import { PropTypes } from 'prop-types'

import '../index.scss'
import '../App.scss'
import '../bigheader.scss'

const ProjectsPage = props => {
  return <Projects selectedProject={props.selectedProject} />
}

ProjectsPage.propTypes = {
  selectedProject: PropTypes.func,
}

ProjectsPage.defaultProps = {
  selectedProject: null,
}

export default ProjectsPage
