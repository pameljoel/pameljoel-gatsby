import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ProjectThumb from './ProjectThumb';
import { ProjectContext } from '../../Context';
import SharedState from '../SharedState';

const PassPropsToRelatedProject = (props) => {
  const { setSelectedProject, project, selectedProject } = props;
  console.log({ setSelectedProject, project, selectedProject });
  return (<Fragment>
    <button onClick={() => setSelectedProject(9)}>click me</button>
    <div
      className="related-project-image"
      role="button"
      tabIndex={0}
      onClick={() => setSelectedProject(project.sliderId)}
      onKeyDown={() => setSelectedProject(project.sliderId)}
    >
      value: {selectedProject}
      <ProjectThumb project={project} />
    </div >
  </Fragment>)
}

class RelatedProject extends Component {
  render() {
    return (
      <SharedState>
        <PassPropsToRelatedProject project={this.props.project} />
      </SharedState>
    );
  }
}

RelatedProject.contextType = ProjectContext;

export default RelatedProject;

RelatedProject.propTypes = {
  project: PropTypes.shape({

  }).isRequired
};
