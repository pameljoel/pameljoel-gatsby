import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class RelatedProject extends Component {
  render() {
    const { project } = this.props;
    const Image = () => (
      <Link to="./projects" href="./projects">
        <img
          className="project-image"
          src={`./images/works/${project.slug}/thumb.jpg`}
          alt={project.about}
        />
      </Link>
    );
    return (
      <div
        className="related-project-image"
        role="button"
        tabIndex={0}
        onClick={() => this.props.addSelectedProjectCallback(project.sliderId)}
        onKeyDown={() => this.props.addSelectedProjectCallback(project.sliderId)}
      >
        <Image />
      </div >
    );
  }
}

RelatedProject.propTypes = {
  project: PropTypes.shape({

  }).isRequired,
  addSelectedProjectCallback: PropTypes.func.isRequired,
};
