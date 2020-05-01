import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import Loading from '../status/Loading';
import { enableCrisp } from '../crisp/Crisp';
import Project from './Project';

import { getDataAsync } from '../../helpers';
import projectJson from '../../../static/resources/projects.json';

import './projects.scss';
import './../carousel/slick.scss';

const Projects = (props) => {
  const { selectedProject } = props;
  const [projects, setProjects] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function getData() {
    const projectsData = await getDataAsync(projectJson);
    setProjects(projectsData);
    setIsLoading(false);
  }

  useEffect(() => {
    enableCrisp();
    getData().catch((error) => {
      setIsLoading(false);
      console.error(error);
    });
  });

  const settings = {
    dots: false,
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
            {projects.length > 0 && (
              <Slider {...settings}>
                {projects.map((project) => (
                  <div key={`project-slider-${project.slug}`}>
                    <Project data={project} />
                  </div>
                ))}
              </Slider>
            )}
          </div>
        ) : (
          <Loading isLoading={isLoading} />
        )}
      </div>
    </div>
  );
};

Projects.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      about: PropTypes.string,
      category: PropTypes.string,
      date: PropTypes.string,
      description: PropTypes.string,
      images: PropTypes.arrayOf(PropTypes.string),
      job: PropTypes.string,
      myWork: PropTypes.string,
      name: PropTypes.string,
      sliderId: PropTypes.number,
      slug: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  selectedProject: PropTypes.number,
};

Projects.defaultProps = {
  selectedProject: 0,
};

export default Projects;
