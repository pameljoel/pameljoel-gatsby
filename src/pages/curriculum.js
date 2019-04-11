import React, { Fragment } from 'react';
import Footer from '../components/footer/Footer';
import Navigation from '../components/navigation/Navigation';
import Curriculum from '../components/curriculum/Curriculum';

import '../index.scss';
import '../App.scss';
import '../bigheader.scss';

const CurriculumPage = () => (
    <Fragment>
        <Navigation />
        <Curriculum />
        <Footer></Footer>
    </Fragment>
)

export default CurriculumPage