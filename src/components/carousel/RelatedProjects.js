import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

import RelatedProject from './RelatedProject';
import CloseButton from '../buttons/CloseButton';

import './relatedProjects.scss';

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const showResults = (props) => {
  const {
    projects,
    selected,
    emptyFilteredProjects,
    setSelectedProject,
  } = props;
  return (
    <div className="related-projects__results">
      <ResultsHeader
        hasResults={true}
        selected={selected}
        callback={emptyFilteredProjects}
      />
      <Slider {...settings}>
        {projects.map((project, i) => {
          const { slug } = project;
          return (
            <div key={slug}>
              <RelatedProject
                project={project}
                index={i}
                setSelectedProject={setSelectedProject}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

const showNoResults = (props) => {
  const { selected, emptyFilteredProjects } = props;
  return (
    <div className="related-projects__results">
      <ResultsHeader
        hasResults={false}
        selected={selected}
        callback={emptyFilteredProjects}
      />
    </div>
  );
};

const ResultsHeader = (props) => {
  const { hasResults, callback, selected } = props;
  const resultsText = `Featured projects with `;
  const noResultsText = `There are no featured projects at the moment with `;
  const text = hasResults ? resultsText : noResultsText;
  const resultsClass = hasResults ? 'has-results' : 'no-results';

  return (
    <header className={resultsClass}>
      <CloseButton callback={callback} />
      {text} <strong>{selected}</strong>.
    </header>
  );
};

const RelatedProjects = (props) => {
  const {
    projects,
    selected,
    emptyFilteredProjects,
    setSelectedProject,
  } = props;

  const hasResults = !!selected && projects.length > 0;
  const hasNoResults = !!selected && projects.length === 0;
  return (
    <div className="related-projects">
      {hasResults &&
        showResults({
          projects,
          selected,
          emptyFilteredProjects,
          setSelectedProject,
        })}
      {hasNoResults &&
        showNoResults({
          selected,
          emptyFilteredProjects,
        })}
    </div>
  );
};

RelatedProjects.propTypes = {
  projects: PropTypes.array,
  selected: PropTypes.string,
  emptyFilteredProjects: PropTypes.func,
  setSelectedProject: PropTypes.func,
};

RelatedProjects.defaultProps = {
  projects: [],
  selected: null,
  setSelectedProject: null,
};

export default RelatedProjects;
