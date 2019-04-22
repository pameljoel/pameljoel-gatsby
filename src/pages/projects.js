import React, { Component, Fragment } from 'react';
import Footer from '../components/footer/Footer';
import Navigation from '../components/navigation/Navigation';
import Projects from '../components/projects/Projects';
import { ProjectContext } from '../Context';
import SharedState from '../components/SharedState';

import '../index.scss';
import '../App.scss';
import '../bigheader.scss';

const PassPropstoProjectsPage = (props) => {
    const { selectedProject } = props;
    return (<div>
        <Navigation />
        <Projects selectedProject={selectedProject} />
        <Footer></Footer>
    </div>)
}

const ProjectsPage = () => {
    return (
        <SharedState>
            <PassPropstoProjectsPage />
        </SharedState >
    )
}

export default ProjectsPage;
