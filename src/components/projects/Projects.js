import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import Loading from '../status/Loading';
import { enableCrisp } from '../crisp/Crisp';

import Project from './Project';

import './projects.css';
import './../carousel/slick.css';

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
    fetch('./resources/projects.js')
      .then(data => data.json())
      .then(data => this.setState({ projects: data, isLoading: false }))
      .catch((error) => { this.setState({ isLoading: false }); console.error(error); });
  }

  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      initialSlide: this.props.selectedProject || 0,
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
          {!this.state.isLoading && this.state.projects ? (
            <div className="projects">
              {this.state.projects.length > 0 && (
                <Slider {...settings}>
                  {this.state.projects.map(project => (
                    <div key={`project-slider-${project.slug}`}>
                      <Project data={project} />
                    </div>
                  ))}
                </Slider>
              )}
            </div>
          ) : (
            <Loading isLoading={this.state.isLoading} />
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
  selectedProject: 0,
  data: [],
};
