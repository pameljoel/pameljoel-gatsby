import React, { Fragment } from 'react';
import SEO from '../components/seo';
import Projects from '../components/projects/Projects';
import { PropTypes } from 'prop-types';

import '../index.scss';
import '../App.scss';
import '../bigheader.scss';

const ProjectsPage = (props) => {
  return (
    <Fragment>
      <SEO title="Pamel Joel Beltrè - Front End Designer - React, AngularJS, Webpack" />
      <Projects selectedProject={props.selectedProject} />
    </Fragment>
  );
};

ProjectsPage.propTypes = {
  selectedProject: PropTypes.number,
};

ProjectsPage.defaultProps = {
  selectedProject: null,
};

export default ProjectsPage;
