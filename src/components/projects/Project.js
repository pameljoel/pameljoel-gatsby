import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tags from './../tags/Tags';

const Project = ({
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
}) => {
  const showDate = date && (
    <div data-test="project-date" className="project-date">
      {date}
    </div>
  );

  const showName = name && (
    <header data-test="project-name" className="project-name">
      <h1>{name}</h1>
    </header>
  );

  const showCategory = category && (
    <div data-test="project-category" className="project-category">
      {category}
    </div>
  );

  const showJob = job && (
    <article data-test="project-work" className="project-my-work-container">
      <header>
        <h1 className="project-subtitle">My role in this project</h1>
      </header>
      <div className="project-my-work">
        {job && <strong>{job}</strong>} {myWork}
      </div>
    </article>
  );

  const showAbout = about && (
    <article data-test="project-about" className="project-about-container">
      <header>
        <h1 className="project-subtitle">About the Company</h1>
      </header>
      <div className="project-about">{about}</div>
      <hr className="project-divider" />
    </article>
  );

  const showDescription = description && (
    <article
      data-test="project-description"
      className="project-description-container"
    >
      <header>
        <h1 className="project-subtitle">About the Project</h1>
      </header>
      <div className="project-description">{description}</div>
    </article>
  );

  const showUrl = url && (
    <div data-test="project-link" className="project-link">
      <a href={url}>{url}</a>
    </div>
  );

  const showImage = images && (
    <div data-test="project-images" className="project-images-container">
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
  );

  const showTags = tags && (
    <div data-test="project-tags" className="project-tags-container">
      <div className="project-tags">
        <Tags data={tags} />
      </div>
    </div>
  );

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
        {showDate}
        {showName}
        {showCategory}
        {showJob}
        {showAbout}
        {showDescription}
        {showUrl}
        {showImage}
        {showTags}
      </div>
    </article>
  );
};

export default Project;

Project.propTypes = {
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
};
