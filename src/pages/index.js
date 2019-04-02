import React, { Fragment } from 'react';
import Footer from '../components/footer/Footer';
import Navigation from '../components/navigation/Navigation';
import Home from '../components/home/Home';

import '../index.scss';
import '../App.scss';
import '../bigheader.scss';
import '../buttons.scss';

const IndexPage = () => (
  <Fragment>
    <Navigation />
    <Home />
    <Footer></Footer>
  </Fragment>
)

export default IndexPage
