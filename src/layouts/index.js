import React, { Component, cloneElement, Children, Fragment } from 'react'
import PropTypes from 'prop-types'
import * as Sentry from '@sentry/browser';
import { ProjectContext } from '../Context'
import Navigation from '../components/navigation/Navigation'
import Footer from '../components/footer/Footer'
import ScrollTop from '../components/scrollTop/ScrollTop';
import { setSelectedProject } from '../utils/http';

Sentry.init({dsn: "https://9ad1e40b5209458cb212458aad59cf3f@sentry.io/1779398"});

export default class SharedState extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedProject: null,
    }
    this.setSelectedProject = this.setSelectedProject.bind(this)
    this.removeSelectedProject = this.removeSelectedProject.bind(this)
  }
  setSelectedProject(number) {
    this.setState({ selectedProject: number })
  }
  removeSelectedProject() {
    this.setState({ selectedProject: null })
  }
  render() {
    const publicAPI = {
      selectedProject: this.state.selectedProject,
      setSelectedProject: this.setSelectedProject,
      removeSelectedProject: this.removeSelectedProject,
    }
    return (
      <Fragment>
        <Navigation />
        <ScrollTop />
        {cloneElement(Children.only(this.props.children), publicAPI)}
        <Footer />
      </Fragment>
    )
  }
}

SharedState.contextType = ProjectContext

SharedState.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
