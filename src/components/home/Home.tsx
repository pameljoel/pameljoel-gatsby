import React, { Component } from 'react';
import Loading from '../status/Loading';
import './../card.scss';
import ErrorBoundary from './../status/ErrorBoundary';
import './home.scss';
import HomeStaticContent from './HomeStaticContent';
import Section from './Section';
import { getData } from '../../helpers';
import categoriesJson from '../../../static/resources/categories.json';
import { Sections } from '../../types';

type props = {
  sections: Sections;
  isLoading: boolean;
};

type state = {
  sections: Sections | undefined;
  isLoading: boolean;
};

const createSections = (sections: Sections) =>
  sections.map((section) => {
    const { name, description, skills, tags } = section;
    return (
      <Section
        key={name}
        name={name}
        description={description}
        skills={skills}
        tags={tags}
      />
    );
  });

export default class Home extends Component<props> {
  state: state;
  constructor(props: props) {
    super(props);
    this.state = {
      sections: undefined,
      isLoading: true,
    };
  }

  componentDidMount() {
    getData(categoriesJson)
      .then((data) => this.setState({ sections: data, isLoading: false }))
      .catch((error) => {
        this.setState({ isLoading: false });
        console.error(error);
      });
  }

  render() {
    const { sections, isLoading }: state = this.state;
    return (
      <div data-test="home">
        <HomeStaticContent />
        <ErrorBoundary isLoading={isLoading}>
          <div className="container">
            <div className="homepage-container">
              <small>These are some of the things I work with</small>
              {isLoading ? (
                <Loading isLoading={this.state.isLoading} />
              ) : (
                sections && createSections(sections)
              )}
            </div>
          </div>
        </ErrorBoundary>
      </div>
    );
  }
}
