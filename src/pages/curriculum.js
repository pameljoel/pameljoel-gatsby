import React, { Fragment } from 'react';
import Footer from '../components/footer/Footer';
import Navigation from '../components/navigation/Navigation';
import Curriculum from '../components/curriculum/Curriculum';


const CurriculumPage = () => (
    <Fragment>
        <Navigation />
        <Curriculum />
        <Footer></Footer>
    </Fragment>
)

export default CurriculumPage