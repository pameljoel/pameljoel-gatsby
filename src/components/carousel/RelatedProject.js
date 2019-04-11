import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectThumb from './ProjectThumb';

export default class RelatedProject extends Component {
  render() {
    const { project, addSelectedProjectCallback } = this.props;
    return (
      <div
        className="related-project-image"
        role="button"
        tabIndex={0}
        onClick={() => addSelectedProjectCallback(project.sliderId)}
        onKeyDown={() => addSelectedProjectCallback(project.sliderId)}
      >
        <ProjectThumb project={project} />
      </div >
    );
  }
}

RelatedProject.propTypes = {
  project: PropTypes.shape({

  }).isRequired,
  addSelectedProjectCallback: PropTypes.func.isRequired,
};
