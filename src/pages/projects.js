import React from 'react';
import Footer from '../components/footer/Footer';
import Navigation from '../components/navigation/Navigation';
import Projects from '../components/projects/Projects';

import '../index.scss';
import '../App.scss';
import '../bigheader.scss';

const ProjectsPage = () => (
    <div>
        <Navigation />
        <Projects />
        <Footer></Footer>
    </div>
)

export default ProjectsPage