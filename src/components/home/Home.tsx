import React, { Component } from 'react';
import Loading from '../status/Loading';
import './../card.scss';
import ErrorBoundary from './../status/ErrorBoundary';
import './home.scss';
import HomeStaticContent from './HomeStaticContent';
import Section from './Section';
import { getData } from '../../helpers';
import skillsJson from '../../../static/resources/skills.json';
import { sections } from '../../types';

type props = {};

type state = {
  sections: sections | undefined;
  isLoading: boolean;
};

const createSections = (sections: sections) =>
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

export default class Home extends Component {
  state: state;
  constructor(props: props) {
    super(props);
    this.state = {
      sections: undefined,
      isLoading: true,
    };
  }

  componentDidMount() {
    getData(skillsJson)
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
