import React, { Fragment } from 'react';
import Footer from '../components/footer/Footer';
import Navigation from '../components/navigation/Navigation';
import Daily from '../components/daily/Daily';


const DailyPage = () => (
    <Fragment>
        <Navigation />
        <Daily />
        <Footer></Footer>
    </Fragment>
)

export default DailyPage