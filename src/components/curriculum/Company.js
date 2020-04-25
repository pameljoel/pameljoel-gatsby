import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

import Tags from './../tags/Tags';
import RelatedProjects from './../carousel/RelatedProjects';

import { getData } from '../../helpers';
import projectsJSON from '../../../static/resources/projects.json';

import './company.scss';
import './../card.scss';

const Company = (props) => {
  const [projects, setProjects] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState([]);

  getData(projectsJSON).then((data) => setProjects(data));

  const emptyFilteredProjects = () => {
    setSelectedTag(null);
  };

  const showRelatedProjectsCarousel = (name) => {
    const filteredProjects = [];
    setSelectedTag(name);

    projects.map((item) =>
      item.tags.reduce(
        (prev, tag) => tag === name && filteredProjects.push(item),
        []
      )
    );
    setFilteredProjects(filteredProjects);
  };

  const {
    data: {
      title,
      company,
      contract,
      city,
      year,
      description,
      website,
      skills,
    },
    setSelectedProject,
  } = props;

  return (
    <article className="card company-container">
      {title && (
        <header className="company-role">
          <h1>{title}</h1>
        </header>
      )}

      <div className="company-data-container">
        {company && (
          <span className="company-name">
            <span className="prefix">@</span>
            <span className="text">{company}</span>
          </span>
        )}

        {contract && (
          <span className="company-contract">
            <span className="prefix">as</span>
            <span className="text">{contract}</span>
          </span>
        )}

        {city && (
          <span className="company-city">
            <span className="prefix">in</span>
            <span className="text">{city}</span>
          </span>
        )}

        {year && (
          <span className="company-year">
            <span className="prefix">in</span>
            <span className="text">{year}</span>
          </span>
        )}
      </div>

      <div className="company-content-container">
        <div className="company-description-container">
          <div className="company-description">{description}</div>
          {website && (
            <div className="company-website">
              <a
                name="visit website"
                href={website}
                target="_blank"
                rel="noopener noreferrer"
              >
                visit website
              </a>
            </div>
          )}
        </div>

        <div className="company-skills-container">
          <Tags data={skills} handleClick={showRelatedProjectsCarousel} />
        </div>
      </div>

      <div className="company-projects-container">
        <RelatedProjects
          projects={filteredProjects}
          emptyFilteredProjects={emptyFilteredProjects}
          setSelectedProject={setSelectedProject}
          selected={selectedTag}
        />
      </div>
    </article>
  );
};

Company.propTypes = {
  data: PropTypes.object,
  setSelectedProject: PropTypes.func,
};

Company.defaultProps = {
  data: [],
  setSelectedProject: null,
};

export default Company;
