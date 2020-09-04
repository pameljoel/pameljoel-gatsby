import React, { Fragment } from 'react';
import SEO from '../components/seo';
import Curriculum from '../components/curriculum/Curriculum';
import { PropTypes } from 'prop-types';
import '../index.scss';
import '../App.scss';
import '../bigheader.scss';

const CurriculumPage = ({ setSelectedProject }) => (
  <Fragment>
    <SEO title="Pamel Joel Beltrè - Front End Designer - React, AngularJS, Webpack" />
    <Curriculum setSelectedProject={setSelectedProject} />
  </Fragment>
);

CurriculumPage.propTypes = {
  setSelectedProject: PropTypes.func,
};

CurriculumPage.defaultProps = {
  setSelectedProject: null,
};

export default CurriculumPage;
