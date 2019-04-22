import React, { Fragment } from 'react';
import Footer from '../components/footer/Footer';
import Navigation from '../components/navigation/Navigation';
import Daily from '../components/daily/Daily';

import '../index.scss';
import '../App.scss';
import '../bigheader.scss';

const DailyPage = () => (
    <Fragment>
        <Navigation />
        <Daily />
        <Footer></Footer>
    </Fragment>
)

export default DailyPage