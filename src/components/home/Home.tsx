import React, { useState, useEffect } from 'react';
import Loading from '../status/Loading';
import './../card.scss';
import ErrorBoundary from './../status/ErrorBoundary';
import './home.scss';
import StaticContent from './StaticContent';
import Section from './Section';
import { getData } from '../../helpers';
import categoriesJson from '../../../static/resources/categories.json';
import { Sections } from '../../types';

const createSections = (sections: Sections) => {
  if (!sections) return null;

  return sections.map((section) => {
    const { name, description, skills } = section;
    return (
      <Section
        key={name}
        name={name}
        description={description}
        skills={skills}
      />
    );
  });
};

const Home: React.FC = () => {
  const [sections, setSections] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData(categoriesJson)
      .then((data) => {
        setSections(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
      });
  }, []);

  return (
    <div data-test="home">
      <StaticContent />
      <ErrorBoundary isLoading={isLoading}>
        <div className="container">
          <div className="homepage-container">
            <small>These are some of the things I work with</small>
            {isLoading ? (
              <Loading isLoading={isLoading} />
            ) : (
              sections && createSections(sections)
            )}
          </div>
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default Home;
