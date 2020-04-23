import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import { enableCrisp } from '../crisp/Crisp';
import DailyHeader from './DailyHeader';
import Loading from '../status/Loading';

import { getData } from '../../helpers';
import dailyJson from '../../../static/resources/daily.json';
import monthsJson from '../../../static/resources/months.json';

import './daily.scss';
import './modal.scss';
import { showResults } from './partials/month';

const header = (
  <header className="big-header">
    <div className="big-header-content">
      <h1 className="">DAILY</h1>
      <div className="subtitle">One design a day</div>
    </div>
    <div className="big-header-background" />
  </header>
);

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
    this.addDailyToMonth = this.addDailyToMonth.bind(this);
  }

  componentDidMount() {
    enableCrisp();

    getData(dailyJson)
      .then((data) => this.setState({ dailies: data, isLoading: false }))
      .then(() => {
        getData(monthsJson)
          .then((data) => {
            this.setState({ months: data });
          })
          .then(() => {
            this.addDailyToMonth();
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        this.setState({ isLoading: false });
        console.error(error);
      });
  }

  openLightBox() {
    this.setState({ isLightboxOpen: true });
  }

  closeLightBox() {
    this.setState({ isLightboxOpen: false });
  }

  addDailyToMonth() {
    const { dailies, months } = this.state;
    if (!dailies || !months) {
      return;
    }
    const dailiesCopy = dailies;
    const monthsCopy = months;

    monthsCopy.map((month) => {
      month.dailiesOfTheMonth = [];
      return dailiesCopy.map((daily) =>
        daily.day > month.start && daily.day <= month.start + month.days
          ? month.dailiesOfTheMonth.push(daily)
          : null
      );
    });

    this.setState({ months: monthsCopy });
  }

  createLightboxUrl(day) {
    const { dailies } = this.state;
    const basePath = '/images/daily/works/';
    const { format } = dailies[day > 0 ? day - 1 : day];

    let url = null;

    if (day > 0) {
      url = `${basePath}${day}.${format}`;
    }

    return url;
  }

  renderLightBox() {
    const { day, dailies, lightboxUrl } = this.state;
    const prevDay = day - 1;
    const nextDay = day + 1;

    const getPrevDay = () =>
      this.setState((prevState) => ({
        day: prevDay,
        lightboxUrl: this.createLightboxUrl(prevState.day - 1),
      }));

    const getNextDay = () =>
      this.setState((prevState) => ({
        day: nextDay,
        lightboxUrl: this.createLightboxUrl(prevState.day + 1),
      }));

    const closeLightBox = () => this.setState({ isLightboxOpen: false });
    return (
      <Lightbox
        mainSrc={lightboxUrl}
        nextSrc={this.createLightboxUrl(day)}
        prevSrc={this.createLightboxUrl(day)}
        onCloseRequest={() => closeLightBox()}
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
    this.setState({
      day,
      lightboxUrl: this.createLightboxUrl(day),
    });
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
        {header}
        <div className="container">
          <DailyHeader />
          {lightbox}
          {daily}
        </div>
      </div>
    );
  }
}
