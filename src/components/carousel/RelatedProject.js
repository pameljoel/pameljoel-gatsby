import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import ProjectThumb from './ProjectThumb'
import { ProjectContext } from '../../Context'

class RelatedProject extends Component {
  render() {
    const { setSelectedProject, project } = this.props
    return (
      <Fragment>
        <div
          className="related-project-image"
          role="button"
          tabIndex={0}
          onClick={() => setSelectedProject(project.sliderId)}
          onKeyDown={() => setSelectedProject(project.sliderId)}
        >
          <ProjectThumb project={project} />
        </div>
      </Fragment>
    )
  }
}

RelatedProject.contextType = ProjectContext

export default RelatedProject

RelatedProject.propTypes = {
  project: PropTypes.shape({}).isRequired,
  setSelectedProject: PropTypes.func,
}

RelatedProject.defaultProps = {
  setSelectedProject : null
}
