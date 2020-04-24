import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import { enableCrisp } from '../crisp/Crisp';
import DailyHeader from './DailyHeader';
import Loading from '../status/Loading';
import { showResults } from './partials/month';
import { addDailiesToMonths } from './partials/months';
import { createLightboxUrl } from './partials/lightbox';
import Header from './partials/header';
import { getData } from '../../helpers';

import dailyJson from '../../../static/resources/daily.json';
import monthsJson from '../../../static/resources/months.json';

import './daily.scss';
import './modal.scss';

export default class Daily extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dailies: null,
      months: [],
      isLightboxOpen: false,
      lightboxUrl: null,
      isLoading: true,
      day: 0,
    };

    this.addImageToSlideShow = this.addImageToSlideShow.bind(this);
    this.openLightBox = this.openLightBox.bind(this);
    this.closeLightBox = this.closeLightBox.bind(this);
  }

  componentDidMount() {
    enableCrisp();

    getData(dailyJson)
      .then((data) => this.setDailies(data))
      .then(() => {
        getData(monthsJson)
          .then((data) => this.setMonths(data))
          .then((data) => this.setDailiesInMonth(data, this.state.dailies))
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        this.closeLightBox();
        console.error(error);
      });
  }

  setDailiesInMonth(data, dailies) {
    this.setState({ months: addDailiesToMonths(data, dailies) });
  }

  setMonths(data) {
    this.setState({ months: data });
    return data;
  }

  setDailies(data) {
    this.setState({ dailies: data, isLoading: false });
  }

  setDay(day) {
    this.setState({ day });
  }

  setLightboxUrl(day) {
    const { dailies } = this.state;
    this.setState({
      lightboxUrl: createLightboxUrl(day, dailies),
    });
  }

  openLightBox() {
    this.setState({ isLightboxOpen: true });
  }

  closeLightBox() {
    this.setState({ isLightboxOpen: false });
  }

  renderLightBox() {
    const { day, dailies, lightboxUrl } = this.state;
    const prevDay = day - 1;
    const nextDay = day + 1;

    const getPrevDay = () => {
      this.setDay(prevDay);
      this.setLightboxUrl(prevDay, dailies);
    };

    const getNextDay = () => {
      this.setDay(nextDay);
      this.setLightboxUrl(nextDay, dailies);
    };

    return (
      <Lightbox
        mainSrc={lightboxUrl}
        nextSrc={createLightboxUrl(day, dailies)}
        prevSrc={createLightboxUrl(day, dailies)}
        onCloseRequest={() => this.closeLightBox()}
        onMovePrevRequest={() => getPrevDay()}
        onMoveNextRequest={() => getNextDay()}
        shouldAnimate
        imageTitle={`Daily #${day}`}
        imageCaption={dailies[prevDay].description}
      />
    );
  }

  renderDailies() {
    const { months } = this.state;

    return (
      <div className="daily-container">
        {months.map((month) => {
          return showResults(month, this.addImageToSlideShow);
        })}
      </div>
    );
  }

  addImageToSlideShow(day) {
    this.setDay(day);
    this.setLightboxUrl(day);
    this.openLightBox();
  }

  render() {
    const { isLightboxOpen, lightboxUrl, dailies, isLoading } = this.state;
    const hasLightbox = isLightboxOpen && lightboxUrl;
    const showDailies = !isLoading && dailies;
    const lightbox = hasLightbox && this.renderLightBox();
    const daily = showDailies ? (
      this.renderDailies()
    ) : (
      <Loading isLoading={isLoading} />
    );

    return (
      <div>
        <Header />
        <div className="container">
          <DailyHeader />
          {lightbox}
          {daily}
        </div>
      </div>
    );
  }
}
