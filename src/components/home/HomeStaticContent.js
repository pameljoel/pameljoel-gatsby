import ErrorBoundary from '../status/ErrorBoundary'
import TextLoop from 'react-text-loop'
import Fade from 'react-reveal/Fade'
import Link from 'gatsby-link'
import { arrowDownSVG, facebookSVG, linkedInSVG, skypeSVG } from '../utils/svg'
import { openCrisp } from '../crisp/Crisp'
import React from 'react'

const StaticContent = () => {
  return (
    <ErrorBoundary>
      <header className="big-header home" data-test="static">
        <div className="big-header-content">
          <TextLoop interval={10000}>
            <h2>HELLO,</h2>
            <h2>Hola,</h2>
            <h2>Ciao,</h2>
          </TextLoop>

          <Fade big cascade>
            <div className="subtitle">
              My name is
              <strong className="name">
                Joel
                <div className="presentation-tooltip">
                  <div className="image" />
                  <div className="description">
                    <Link className="name" to="/curriculum">
                      Pamel Joel Beltrè
                    </Link>
                    <Link className="text" to="/curriculum">
                      I am a young web developer, you can find me here:
                    </Link>
                    <div className="social">
                      <a
                        name="My Linkedin Profile"
                        className="linkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/pameljoel/"
                      >
                        {linkedInSVG}
                      </a>
                      <a
                        name="My Facebook Profile"
                        className="facebook"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.facebook.com/pamel.joel"
                      >
                        {facebookSVG}
                      </a>
                      <a
                        name="My Skype Profile"
                        className="skype"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="skype:pjjjjk?chat"
                      >
                        {skypeSVG}
                      </a>
                    </div>
                  </div>
                </div>
              </strong>
            </div>
          </Fade>

          <Fade big cascade>
            <div className="job">
              <div className="job-suffix">
                <span>I'am a</span>
              </div>
              <div className="job-title">
                <TextLoop interval={1000} adjustingSpeed={2000}>
                  <h1>Full stack Designer</h1>
                  <h1>Graphic Designer</h1>
                  <h1>UX Designer</h1>
                  <h1>Front-end Developer</h1>
                </TextLoop>
              </div>
            </div>
          </Fade>

          <Fade big cascade>
            <div className="company">
              <div className="company-suffix">
                Right now, I am working here:
              </div>

              <div className="company-description">
                <span className="company-field">
                  <span className="field-suffix">at </span>
                  <a
                    href="https://www.lastminute.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="field-name"
                  >
                    lastminute.com
                  </a>
                </span>

                <span className="company-field">
                  <span className="field-suffix">in</span>
                  <a
                    href="https://goo.gl/maps/YmmGRnJzik7yERsp7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="field-name"
                  >
                    Chiasso <small>(Switzerland)</small>
                  </a>
                </span>
              </div>

              <div className="company-description">
                <div className="company-suffix">as</div>
                <Link className="company-job-title" to="/curriculum">
                  <span>Front-end Engineer</span>
                  <div>
                    <small style={{ fontSize: '12px', fontWeight: '300' }}>
                      View my Curriculum Vitae
                    </small>
                  </div>
                </Link>
              </div>
            </div>
          </Fade>

          <Fade big cascade>
            <button className="big-button-secondary">
              <Link to="/projects">See my projects</Link>
            </button>
          </Fade>

          <Fade big cascade>
            <button className="big-button-primary" onClick={openCrisp}>
              <div>Contact me</div>
            </button>
          </Fade>
        </div>

        {arrowDownSVG}
        <div className="big-header-background" />
      </header>
    </ErrorBoundary>
  )
}

export default StaticContent
