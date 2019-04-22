import React from 'react'
import Curriculum from '../components/curriculum/Curriculum'
import { PropTypes } from 'prop-types'
import '../index.scss'
import '../App.scss'
import '../bigheader.scss'

const CurriculumPage = props => (
  <Curriculum setSelectedProject={props.setSelectedProject} />
)

CurriculumPage.propTypes = {
  setSelectedProject: PropTypes.func,
}

CurriculumPage.defaultProps = {
  setSelectedProject: null,
}


export default CurriculumPage
