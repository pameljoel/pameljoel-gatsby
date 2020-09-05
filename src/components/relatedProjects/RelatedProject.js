import React from 'react';
import PropTypes from 'prop-types';
import ProjectThumb from '../carousel/ProjectThumb';

const RelatedProject = ({ setSelectedProject, project }) => {
  return (
    <>
      <div
        className="related-project-image"
        role="button"
        tabIndex={0}
        onClick={() => setSelectedProject(project.sliderId)}
        onKeyDown={() => setSelectedProject(project.sliderId)}
      >
        <ProjectThumb project={project} />
      </div>
    </>
  );
};

export default RelatedProject;

RelatedProject.propTypes = {
  project: PropTypes.shape({}).isRequired,
  setSelectedProject: PropTypes.func,
};

RelatedProject.defaultProps = {
  setSelectedProject: null,
};
