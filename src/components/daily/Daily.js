import React, { useEffect, useState } from 'react';
import Lightbox from 'react-image-lightbox';
import { enableCrisp } from '../crisp/Crisp';
import DailyHeader from './DailyHeader';
import Loading from '../status/Loading';
import { showResults } from './partials/month';
import { addImagesToMonths } from './partials/months';
import { createLightBoxUrl } from './partials/lightBox';
import Header from './partials/Header';
import { getData, getDataAsync } from '../../helpers';

import dailyJson from '../../../static/resources/daily.json';
import monthsJson from '../../../static/resources/months.json';

import 'react-image-lightBox/style.css';
import './daily.scss';
import './modal.scss';

const Daily = () => {
  const [images, setImages] = useState(null);
  const [months, setMonths] = useState([]);
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);
  const [lightBoxUrl, setLightBoxUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [day, setDay] = useState(0);

  const openLightBox = () => {
    setIsLightBoxOpen(true);
  };

  const closeLightBox = () => {
    setIsLightBoxOpen(false);
  };

  async function getData() {
    const imagesData = await getDataAsync(dailyJson);
    setImages(imagesData);

    const monthsData = await getDataAsync(monthsJson);
    setMonths(addImagesToMonths(monthsData, images));

    setIsLoading(false);
  }

  useEffect(() => {
    enableCrisp();
  });

  useEffect(() => {
    getData().catch((error) => console.log(error));
  }, [images, months]);

  const renderLightBox = () => {
    const prevDay = day - 1;
    const nextDay = day + 1;

    const getPrevDay = () => {
      setDay(prevDay);
      setLightBoxUrl(createLightBoxUrl(prevDay, images));
    };

    const getNextDay = () => {
      setDay(nextDay);
      setLightBoxUrl(createLightBoxUrl(nextDay, images));
    };

    return (
      <Lightbox
        mainSrc={lightBoxUrl}
        nextSrc={createLightBoxUrl(day, images)}
        prevSrc={createLightBoxUrl(day, images)}
        onCloseRequest={() => closeLightBox()}
        onMovePrevRequest={() => getPrevDay()}
        onMoveNextRequest={() => getNextDay()}
        shouldAnimate
        imageTitle={`Daily #${day}`}
        imageCaption={images[prevDay].description}
      />
    );
  };

  const addImageToSlideShow = (day) => {
    setDay(day);
    setLightBoxUrl(createLightBoxUrl(day, images));
    openLightBox();
  };

  const renderImages = () => {
    return (
      <div className="daily-container">
        {months &&
          months.map((month) => {
            return showResults(month, addImageToSlideShow);
          })}
      </div>
    );
  };

  const hasLightBox = isLightBoxOpen && lightBoxUrl;
  const showImages = !isLoading && images;
  const lightBox = hasLightBox && renderLightBox();
  const daily = showImages ? renderImages() : <Loading isLoading={isLoading} />;

  return (
    <div>
      <Header />
      <div className="container">
        <DailyHeader />
        {lightBox}
        {daily}
      </div>
    </div>
  );
};

export default Daily;
