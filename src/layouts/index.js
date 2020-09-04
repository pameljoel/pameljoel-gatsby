import React, { cloneElement, Children, Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import * as Sentry from '@sentry/browser';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import ScrollTop from '../components/scrollTop/ScrollTop';

Sentry.init({
  dsn: 'https://9ad1e40b5209458cb212458aad59cf3f@sentry.io/1779398',
});

const SharedState = (props) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const removeSelectedProject = () => {
    setSelectedProject(null);
  };

  const publicAPI = {
    selectedProject,
    setSelectedProject,
    removeSelectedProject,
  };

  return (
    <>
      <Navigation />
      <ScrollTop />
      {cloneElement(Children.only(props.children), publicAPI)}
      <Footer />
    </>
  );
};

SharedState.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default SharedState;
