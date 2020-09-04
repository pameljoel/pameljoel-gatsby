import React, { Fragment } from 'react';
import SEO from '../components/seo';
import Daily from '../components/daily/Daily';

import '../index.scss';
import '../App.scss';
import '../bigheader.scss';

const DailyPage = () => (
  <Fragment>
    <SEO title="Pamel Joel Beltrè - Front End Designer - React, AngularJS, Webpack" />
    <Daily />
  </Fragment>
);
export default DailyPage;
