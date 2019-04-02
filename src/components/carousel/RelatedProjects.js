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
    return (
      <div className="related-projects">

        {this.props.selected && this.props.projects.length === 0 &&
          <div className="related-project-no-result">
            <CloseButton callback={this.props.emptyFilteredProjects} />
            There are no featured projects at the moment with <strong>{this.props.selected}</strong>
          </div>
        }

        {this.props.selected && this.props.projects.length > 0 &&
          <div className="related-projects-result">
            <CloseButton callback={this.props.emptyFilteredProjects} />
            <p>
              Projects with <strong>{this.props.selected}</strong>
            </p>
            <Slider {...settings}>
              {this.props.projects.map((project, i) => (
                <div key={project.slug}>
                  <RelatedProject
                    project={project}
                    addSelectedProjectCallback={this.props.addSelectedProjectCallback}
                    index={i}
                  />
                </div>
              ))}
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
  emptyFilteredProjects() {},
};
