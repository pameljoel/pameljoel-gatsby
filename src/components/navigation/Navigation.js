import React, { Component } from 'react'
import Link  from 'gatsby-link'

import { enableCrisp, openCrisp } from '../crisp/Crisp'

import Hamburger from './Hamburger'

import './navigation.css'

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sidebarOpen: false,
    }
    this.toggleSidebar = this.toggleSidebar.bind(this)
  }

  componentDidMount() {
    enableCrisp()
  }

  toggleSidebar() {
    this.setState(prevState => ({ sidebarOpen: !prevState.sidebarOpen }))
  }

  render() {
    return (
      <nav className="main-navigation" key="main-navigation">
        <div className="desktop-navigation">
          <ul className="main-navigation-branding">
            <li>
              <Link to="/index">
                <div className="nav-logo">
                  <strong>P</strong>
                  amel <strong>J</strong>
                  oel <strong>B</strong>
                  eltrè <small> | Personal Portfolio site</small>
                </div>
              </Link>
            </li>
          </ul>
          <ul className="main-navigation-links">
            <li>
              <Link to="/index">
                <div className="nav-link">Home</div>
                <div className="active-bar" />
              </Link>
            </li>
            <li>
              <Link to="/daily">
                <div className="nav-link">Daily</div>
                <div className="active-bar" />
              </Link>
            </li>
            <li>
              <Link to="/curriculum">
                <div className="nav-link">CV</div>
                <div className="active-bar" />
              </Link>
            </li>
            <li>
              <Link to="/projects">
                <div className="nav-link">Projects</div>
                <div className="active-bar" />
              </Link>
            </li>
            <li>
              <button className="nav-button" onClick={openCrisp}>
                Contact me
              </button>
            </li>
          </ul>
        </div>
        <div className="mobile-navigation">
          <Hamburger
            open={this.state.sidebarOpen}
            callback={this.toggleSidebar}
          />

          <ul
            className={`mobile-navigation-links ${
              this.state.sidebarOpen ? 'open' : ''
            }`}
          >
            <li onClick={this.toggleSidebar}>
              <Link to="/index">
                <div className="nav-link">Home</div>
                <div className="active-bar" />
              </Link>
            </li>
            <li onClick={this.toggleSidebar}>
              <Link to="/daily">
                <div className="nav-link">Daily</div>
                <div className="active-bar" />
              </Link>
            </li>
            <li onClick={this.toggleSidebar}>
              <Link to="/curriculum">
                <div className="nav-link">CV</div>
                <div className="active-bar" />
              </Link>
            </li>
            <li onClick={this.toggleSidebar}>
              <Link to="/projects">
                <div className="nav-link">Projects</div>
                <div className="active-bar" />
              </Link>
            </li>
            <li
              onClick={() => {
                this.toggleSidebar()
                openCrisp()
              }}
            >
              <button className="nav-button">Contact me</button>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navigation
