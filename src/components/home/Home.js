import React, { Component } from 'react'
import Loading from '../status/Loading'
import './../card.scss'
import ErrorBoundary from './../status/ErrorBoundary'
import './home.scss'
import HomeStaticContent from './HomeStaticContent';
import Section from './Section';

const createSections = (sections) => sections.map(section => {
  const { name, description, skills, tags } = section;
  return <Section key={name} name={name} description={description} skills={skills} tags={tags}/>
})

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sections: null,
      isLoading: true,
    }
  }

  componentDidMount() {
    fetch('./resources/skills.js')
      .then(data => data.json())
      .then(data => this.setState({ sections: data, isLoading: false }))
      .catch(error => {
        this.setState({ isLoading: false })
        console.error(error)
      })
  }

  render() {
    const { sections, isLoading } = this.state
    return (
      <div>
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
    )
  }
}
