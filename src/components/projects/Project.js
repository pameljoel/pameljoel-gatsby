import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tags from './../tags/Tags';

export default class Project extends Component {
  render() {
    const {
      date,
      name,
      category,
      about,
      description,
      images,
      job,
      myWork,
      tags,
      slug,
      url,
    } = this.props.data;
    return (
      <article className="project">
        <div className="container">
          {slug && (
            <div className="project-header">
              <img
                data-test="project-header"
                src={`/images/works/${slug}/header.png`}
                alt={description}
              />
            </div>
          )}

          {date && (
            <div data-test="project-date" className="project-date">
              {date}
            </div>
          )}

          {name && (
            <header data-test="project-name" className="project-name">
              <h1>{name}</h1>
            </header>
          )}

          {category && (
            <div data-test="project-category" className="project-category">
              {category}
            </div>
          )}

          {about && (
            <article
              data-test="project-about"
              className="project-about-container"
            >
              <header>
                <h1 className="project-subtitle">About the Company</h1>
              </header>
              <div className="project-about">{about}</div>
              <hr className="project-divider" />
            </article>
          )}

          {description && (
            <article
              data-test="project-description"
              className="project-description-container"
            >
              <header>
                <h1 className="project-subtitle">About the Project</h1>
              </header>
              <div className="project-description">{description}</div>
            </article>
          )}

          {url && (
            <div data-test="project-link" className="project-link">
              <a href={url}>{url}</a>
            </div>
          )}

          {images && (
            <div
              data-test="project-images"
              className="project-images-container"
            >
              <div className="projects-images">
                {images.map((image) => (
                  <img
                    className="project-image"
                    src={`/images/works/${slug}/${image}`}
                    alt={about}
                    key={`project-${slug}-${image}`}
                  />
                ))}
              </div>
            </div>
          )}

          {job && (
            <article
              data-test="project-work"
              className="project-my-work-container"
            >
              <header>
                <h1 className="project-subtitle">About my work</h1>
              </header>
              <div className="project-my-work">
                {job && <strong>{job}</strong>} {myWork}
              </div>
            </article>
          )}

          {tags && (
            <div data-test="project-tags" className="project-tags-container">
              <div className="project-tags">
                <Tags data={tags} />
              </div>
            </div>
          )}
        </div>
      </article>
    );
  }
}

Project.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    about: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.array.isRequired,
    job: PropTypes.string,
    myWork: PropTypes.string,
    slug: PropTypes.string.isRequired,
    url: PropTypes.string,
    tags: PropTypes.array,
  }).isRequired,
};
