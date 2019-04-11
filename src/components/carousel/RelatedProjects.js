import React, { Component } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

import RelatedProject from './RelatedProject';
import CloseButton from './../buttons/CloseButton';

import './relatedProjects.scss';

export default class RelatedProjects extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
    };
    const { projects, selected, emptyFilteredProjects } = this.props;
    return (
      <div className="related-projects">

        {selected && projects.length === 0 &&
          <div className="related-project-no-result">
            <CloseButton callback={emptyFilteredProjects} />
            There are no featured projects at the moment with <strong>{selected}</strong>
          </div>
        }

        {selected && projects.length > 0 &&
          <div className="related-projects-result">
            <CloseButton callback={emptyFilteredProjects} />
            <p>
              Projects with <strong>{selected}</strong>
            </p>
            <Slider {...settings}>
              {projects.map((project, i) => {
                const { slug } = project;
                return (<div key={slug}>
                  <RelatedProject
                    project={project}
                    addSelectedProjectCallback={addSelectedProjectCallback}
                    index={i}
                  />
                </div>
                )
              })}
            </Slider>
          </div>
        }
      </div>
    );
  }
}


RelatedProject.propTypes = {
  projects: PropTypes.array,
  selected: PropTypes.string,
  emptyFilteredProjects: PropTypes.func,
  addSelectedProjectCallback: PropTypes.func.isRequired,
};

RelatedProject.defaultProps = {
  projects: [],
  selected: null,
  emptyFilteredProjects() { },
};
