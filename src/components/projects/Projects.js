import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import Loading from '../status/Loading';
import { enableCrisp } from '../crisp/Crisp';
import Project from './Project';

import { getData } from '../../helpers';
import projectJson from './resources/projects.json';

import './projects.scss';
import './../carousel/slick.scss';

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    enableCrisp();
    getData(projectJson)
      .then(data => this.setState({ projects: data, isLoading: false }))
      .catch((error) => { this.setState({ isLoading: false }); console.error(error); });
  }

  render() {
    const { selectedProject } = this.props;
    const { projects, isLoading } = this.state;
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      initialSlide: selectedProject || 0,
    };
    return (
      <div>

        <header
          className="big-header"
          style={{ marginBottom: '-300px', paddingBottom: '200px' }}
        >
          <div className="big-header-content">
            <h1 className="">PROJECTS</h1>
            <div className="subtitle">This is a selection of my web projects</div>
          </div>
          <div className="big-header-background" />
        </header>
        <div className="projects-container">
          {!isLoading && projects ? (
            <div className="projects">
              <Slider {...settings}>
                {projects.map(project => (
                  <div key={`project-slider-${project.slug}`}>
                    <Project data={project} />
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
              <Loading isLoading={isLoading} />
            )}
        </div>
      </div>
    );
  }
}

Projects.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    about: PropTypes.string,
    category: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    job: PropTypes.string,
    mywork: PropTypes.string,
    name: PropTypes.string,
    sliderId: PropTypes.number,
    slug: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  })),
  selectedProject: PropTypes.number,
};

Projects.defaultProps = {
  selectedProject: 0
};
