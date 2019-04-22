import React, { Component, cloneElement, Children } from 'react';
import PropTypes from 'prop-types';
import { ProjectContext } from '../Context';

export default class SharedState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProject: 5
        }
        this.setSelectedProject = this.setSelectedProject.bind(this);
        this.removeSelectedProject = this.removeSelectedProject.bind(this);
    }
    setSelectedProject(number) {
        this.setState({ selectedProject: number });
    }
    removeSelectedProject() {
        this.setState({ selectedProject: null })
    }
    render() {
        const publicAPI = {
            selectedProject: this.state.selectedProject,
            setSelectedProject: this.setSelectedProject,
            removeSelectedProject: this.removeSelectedProject,
        };
        return cloneElement(Children.only(this.props.children), publicAPI);
    }
}

SharedState.contextType = ProjectContext;

SharedState.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}