import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const ProjectThumb = ({ project }) => {
  return (
    <Link to="/projects">
      <img
        className="project-image"
        src={`/images/works/${project.slug}/thumb.jpg`}
        alt={project.about}
      />
    </Link>
  );
};

export default ProjectThumb;

ProjectThumb.propTypes = {
  project: PropTypes.shape({
    slug: PropTypes.string,
    about: PropTypes.string,
  }),
};
