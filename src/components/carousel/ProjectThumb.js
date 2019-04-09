import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

export default class ProjectThumb extends Component {
    render() {
        const { project } = this.props;
        return (
            <Link to="/projects">
                <img
                    className="project-image"
                    src={`/images/works/${project.slug}/thumb.jpg`}
                    alt={project.about}
                />
            </Link>
        )
    }
}

ProjectThumb.propTypes = {
    project: PropTypes.shape({
        slug: PropTypes.string,
        about: PropTypes.string,
    })
}