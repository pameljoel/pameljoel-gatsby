import React from 'react';
import Footer from '../components/footer/Footer';
import Navigation from '../components/navigation/Navigation';
import Home from '../components/home/Home';

import '../bigheader.scss';
import '../buttons.scss';

const IndexPage = () => (
  <div>
    <Navigation /> 
    <Home/>
    <Footer></Footer>
  </div>
)

export default IndexPage
