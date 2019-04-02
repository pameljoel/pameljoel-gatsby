import React, { Component } from 'react';
import TextLoop from 'react-text-loop';
import { openCrisp } from './../crisp/Crisp';
import Link  from 'gatsby-link'
import Fade from 'react-reveal/Fade';

import Loading from '../status/Loading';
import Tags from './../tags/Tags';
import GraphSkills from './../skills/GraphSkills';
import ErrorBoundary from './../status/ErrorBoundary';

import './home.scss';
import './../card.scss';

const facebookSVG = (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#3b5999">
    <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
  </svg>
);

const linkedInSVG = (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#0077B5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const skypeSVG = (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#00AFF0" >
    <path d="M12.069 18.874c-4.023 0-5.82-1.979-5.82-3.464 0-.765.561-1.296 1.333-1.296 1.723 0 1.273 2.477 4.487 2.477 1.641 0 2.55-.895 2.55-1.811 0-.551-.269-1.16-1.354-1.429l-3.576-.895c-2.88-.724-3.403-2.286-3.403-3.751 0-3.047 2.861-4.191 5.549-4.191 2.471 0 5.393 1.373 5.393 3.199 0 .784-.688 1.24-1.453 1.24-1.469 0-1.198-2.037-4.164-2.037-1.469 0-2.292.664-2.292 1.617s1.153 1.258 2.157 1.487l2.637.587c2.891.649 3.624 2.346 3.624 3.944 0 2.476-1.902 4.324-5.722 4.324m11.084-4.882l-.029.135-.044-.24c.015.045.044.074.059.12.12-.675.181-1.363.181-2.052 0-1.529-.301-3.012-.898-4.42-.569-1.348-1.395-2.562-2.427-3.596-1.049-1.033-2.247-1.856-3.595-2.426-1.318-.631-2.801-.93-4.328-.93-.72 0-1.444.07-2.143.204l.119.06-.239-.033.119-.025C8.91.274 7.829 0 6.731 0c-1.789 0-3.47.698-4.736 1.967C.729 3.235.032 4.923.032 6.716c0 1.143.292 2.265.844 3.258l.02-.124.041.239-.06-.115c-.114.645-.172 1.299-.172 1.955 0 1.53.3 3.017.884 4.416.568 1.362 1.378 2.576 2.427 3.609 1.034 1.05 2.247 1.857 3.595 2.442 1.394.6 2.877.898 4.404.898.659 0 1.334-.06 1.977-.179l-.119-.062.24.046-.135.03c1.002.569 2.126.871 3.294.871 1.783 0 3.459-.69 4.733-1.963 1.259-1.259 1.962-2.951 1.962-4.749 0-1.138-.299-2.262-.853-3.266" />
  </svg>
);

const arrowDownSVG = (
  <svg viewBox="0 0 80 80" className="more-arrows" fill="rgba(0, 0, 0, 0.2)">
    <polygon className="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 " />
    <polygon className="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 " />
    <polygon className="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 " />
  </svg>
);

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch('./resources/skills.js')
      .then(data => data.json())
      .then(data => this.setState({ blocks: data, isLoading: false }))
      .catch((error) => { this.setState({ isLoading: false }); console.error(error); });
  }

  render() {
    const { blocks, isLoading } = this.state;
    return (
      <div>
        <ErrorBoundary>
          <header className="big-header home">
            <div className="big-header-content">

              <TextLoop speed={5500} >
                <h2>HELLO,</h2>
                <h2>Hola,</h2>
                <h2>Ciao,</h2>
              </TextLoop>

              <div className="subtitle">My name is
                <strong className="name">Joel
                  <div className="presentation-tooltip">
                    <div className="image" />
                    <div className="description">
                      <Link className="name" to="curriculum">
                        Pamel Joel Beltrè
                      </Link>
                      <Link className="text" to="curriculum">I am a young web developer, you can find me here:</Link>
                      <div className="social">
                        <a name="My Linkedin Profile" className="linkedin" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/pameljoel/">{linkedInSVG}</a>
                        <a name="My Facebook Profile" className="facebook" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/pamel.joel">{facebookSVG}</a>
                        <a name="My Skype Profile" className="skype" target="_blank" rel="noopener noreferrer" href="skype:pjjjjk?chat">{skypeSVG}</a>
                      </div>
                    </div>

                  </div>
                </strong>
              </div>

              <div className="job">
                <div className="job-suffix">
                  <span>I'am a</span>
                </div>
                <div className="job-title">
                  <TextLoop speed={1000} adjustingSpeed={2000}>
                    <h1>Full stack Designer</h1>
                    <h1>Graphic Designer</h1>
                    <h1>UX Designer</h1>
                    <h1>Front-end Developer</h1>
                  </TextLoop>
                </div>
              </div>

              <div className="company">
                <div className="company-suffix">Right now, I am working: </div>

                <div className="company-description">
                  <span className="company-field">
                    <span className="field-suffix">at </span>
                    <a href="https://www.quotidiano.net" target="_blank" rel="noopener noreferrer" className="field-name">Monrif.net <small>- Il Resto del Carlino</small></a>
                  </span>

                  <span className="company-field">
                    <span className="field-suffix">in</span>
                    <a href="https://goo.gl/maps/fNtZbVLUWvT2" target="_blank" rel="noopener noreferrer" className="field-name">Bologna <small>(Italy)</small></a>
                  </span>
                </div>

                <div className="company-description">
                  <div className="company-suffix">as</div>
                  <Link className="company-job-title" to="curriculum">
                    <span>UX / Graphic Designer <small>&</small> Front-end Developer</span>
                    <div><small style={{ fontSize: '12px', fontWeight: '300' }}>View my Curriculum Vitae</small></div>
                  </Link>
                </div>
              </div>

              <button className="big-button-secondary">
                <Link to="projects">See my projects</Link>
              </button>

              <button className="big-button-primary" onClick={openCrisp}>
                <div>Contact me</div>
              </button>

            </div>

            {arrowDownSVG}
            <div className="big-header-background" />
          </header>
        </ErrorBoundary>
        <ErrorBoundary isLoading={isLoading}>
          <div className="container">
            <div className="homepage-container">

              {!isLoading && blocks ?
                (blocks.map(block => (
                  <div className="card" key={block.name} >
                    <Fade bottom >
                      <h2 className="title">{block.name}</h2>
                    </Fade>

                    <Fade bottom >
                      <div className="description">{block.description}</div>
                    </Fade>

                    <Fade bottom >
                      <GraphSkills data={block.skills} color="#E38627" />
                    </Fade>

                    <Fade bottom >
                      <h3>Other {block.name} skills:</h3>
                    </Fade>

                    <Fade bottom >
                      <div className="tags">
                        <Tags data={block.tags} />
                      </div>
                    </Fade>
                  </div>
                ))
                ) : (
                  <Loading isLoading={this.state.isLoading} />
                )}
            </div>
          </div>
        </ErrorBoundary>
      </div>
    );
  }
}
