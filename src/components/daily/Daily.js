import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import { enableCrisp } from '../crisp/Crisp';
import DailyHeader from './DailyHeader';
import DailyItem from './DailyItem';
import Loading from '../status/Loading';

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
    this.addDailyToMonth = this.addDailyToMonth.bind(this);
  }

  componentDidMount() {
    enableCrisp();

    getData(dailyJson)
      .then(data => this.setState({ dailies: data, isLoading: false }))
      .then(() => {
        getData(monthsJson)
          .then((data) => {
            this.setState({ months: data });
          })
          .then(() => {
            this.addDailyToMonth();
          })
          .catch(error => console.log(error));
      })
      .catch((error) => { this.setState({ isLoading: false }); console.error(error); });
  }

  openLightBox() {
    this.setState({ isLightboxOpen: true });
  }

  closeLightBox() {
    this.setState({ isLightboxOpen: false });
  }

  addDailyToMonth() {
    if (!this.state.dailies || !this.state.months) {
      return;
    }
    const dailiesCopy = this.state.dailies;
    const monthsCopy = this.state.months;

    monthsCopy.map((month) => {
      const monthCopy = month;
      monthCopy.dailiesOfTheMonth = [];
      return dailiesCopy.map(daily => (daily.day > month.start && daily.day <= month.start + month.days
        ? month.dailiesOfTheMonth.push(daily)
        : null));
    });

    this.setState({ months: monthsCopy });
  }

  createLightboxUrl(day) {
    const basepath = '/images/daily/works/';
    const { format } = this.state.dailies[day > 0 ? day - 1 : day];

    let url = null;

    if (day > 0) {
      url = `${basepath}${day}.${format}`;
    }

    return url;
  }

  addImageToSlideShow(day) {
    this.setState({
      day,
      lightboxUrl: this.createLightboxUrl(day),
    });
    this.openLightBox();
  }

  render() {
    return (
      <div>
        <header className="big-header">
          <div className="big-header-content">
            <h1 className="">DAILY</h1>
            <div className="subtitle">One design a day</div>
          </div>
          <div className="big-header-background" />
        </header>
        <div className="container" >
          <DailyHeader />
          {this.state.isLightboxOpen && this.state.lightboxUrl && (
            <Lightbox
              mainSrc={this.state.lightboxUrl}
              nextSrc={this.createLightboxUrl(this.state.day)}
              prevSrc={this.createLightboxUrl(this.state.day)}
              onCloseRequest={() => this.setState({ isLightboxOpen: false })}
              onMovePrevRequest={() => {
                this.setState(prevState => ({
                  day: prevState.day - 1,
                  lightboxUrl: this.createLightboxUrl(prevState.day - 1),
                }));
              }
              }
              onMoveNextRequest={() => {
                this.setState(prevState => ({
                  day: prevState.day + 1,
                  lightboxUrl: this.createLightboxUrl(prevState.day + 1),
                }));
              }}
              shouldAnimate
              imageTitle={`Daily #${this.state.day}`}
              imageCaption={this.state.dailies[this.state.day - 1].description}
            />
          )}
          {!this.state.isLoading && this.state.dailies ? (
            <div className="daily-container">
              {this.state.months.map((month, i) => (
                <div
                  className={`month-container ${month.name}`}
                  key={`${month.name}-${i}`}
                >
                  <div className="daily-item daily-item-month">
                    <div className="daily-month-name">{month.name}</div>
                    <div className="month-initial">
                      {month.name.substring(0, 1)}
                    </div>
                    <img className="daily-image" src="/images/daily/works/blank.jpg" alt="more images coming soon" />
                  </div>
                  {month.dailiesOfTheMonth &&
                    month.dailiesOfTheMonth.length > 0 ? (
                      month.dailiesOfTheMonth.map((daily, j) => (
                        <DailyItem
                          description={daily.description}
                          day={daily.day}
                          format={daily.format}
                          imageSource={`/images/daily/works/${daily.day}.${daily.format}`}
                          key={`daily-${j}`}
                          callback={this.addImageToSlideShow}
                        />
                      ))
                    ) : (
                      <div className="daily-item">
                        <img className="daily-image" src="/images/daily/works/0.jpg" alt="" />
                      </div>
                    )}
                </div>
              ))}
            </div>
          ) : (
              <Loading isLoading={this.state.isLoading} />
            )}
        </div>
      </div>
    );
  }
}
