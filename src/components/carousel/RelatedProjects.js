import React, { Component } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

import RelatedProject from './RelatedProject';
import CloseButton from './../buttons/CloseButton';

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

const ResultsHeader = (props) => {
  const { hasResults, callback, selected } = props;
  const resultsText = `Featured projects with `;
  const noResultsText = `There are no featured projects at the moment with `;
  const text = hasResults ? resultsText : noResultsText;

  return (
    <header>
      <CloseButton callback={callback} />
      {text} <strong>{selected}</strong>
    </header>
  );
};

export default class RelatedProjects extends Component {
  render() {
    const {
      projects,
      selected,
      emptyFilteredProjects,
      setSelectedProject,
    } = this.props;
    return (
      <div className="related-projects">
        {selected && projects.length === 0 && (
          <div className="related-projects__result">
            <ResultsHeader
              hasResults={false}
              selected={selected}
              callback={emptyFilteredProjects}
            />
          </div>
        )}

        {selected && projects.length > 0 && (
          <div className="related-projects__result">
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
        )}
      </div>
    );
  }
}

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
