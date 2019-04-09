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
      mywork,
      tags,
      slug,
      url,
    } = this.props.data;
    return (
      <article className="project">
        <div className="container">
          <div className="project-header">
            <img src={`/images/works/${slug}/header.png`} alt={description} />
          </div>

          <div className="project-date">{date}</div>

          <header className="project-name">
            <h1>{name}</h1>
          </header>

          {category && <div className="project-category">{category}</div>}

          {about && (
            <article className="project-about-container">
              <header>
                <h1 className="project-subtitle">About the Company</h1>
              </header>
              <div className="project-about">{about}</div>
              <hr className="project-divider" />
            </article>
          )}

          {description && (
            <article className="project-description-container">
              <header>
                <h1 className="project-subtitle">About the Project</h1>
              </header>
              <div className="project-description">{description}</div>
            </article>
          )}

          {url && (
            <div className="project-link">
              <a href={url}>{url}</a>
            </div>
          )}

          <div className="project-images-container">
            <div className="projects-images">
              {images.map(image => (
                <img
                  className="project-image"
                  src={`/images/works/${slug}/${image}`}
                  alt={about}
                  key={`project-${slug}-${image}`}
                />
              ))}
            </div>
          </div>

          <article className="project-my-work-container">
            <header>
              <h1 className="project-subtitle">About my work</h1>
            </header>
            <div className="project-my-work">{job && <strong>{job}</strong>} {mywork}</div>
          </article>

          <div className="project-tags-container">
            <div className="project-tags">
              <Tags data={tags} />
            </div>
          </div>
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
