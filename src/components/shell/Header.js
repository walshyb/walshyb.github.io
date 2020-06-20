import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import GithubLogo from '../../images/github.svg';
import LinkedInLogo from '../../images/linkedin.svg';
import Email from '../../images/email.svg';
import Resume from '../../images/resume.svg';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  static propTypes = {
    updateGlobalColor: PropTypes.func.isRequired
  };

  /**
   * On color click, pass up the selected
   * color.
   */
  colorClick = ( event ) => {
    this.props.updateGlobalColor( event.target.id );
  }

  render() {
    const colors = [
      'blue',
      'yellow',
      'green',
      'purple'
    ];

    return (
      <header>
        <div className='color-picker'>
          { colors.map( color => {
              return <div
                id={ color }
                className={ 'color ' + color}
                onClick={ this.colorClick }
              >
              </div>;
            }) }
        </div>

        <div className='title-wrap'>
          <h1>Brandon Walsh | Full Stack Developer</h1>
          <nav>
            <Link to={{ pathname: 'https://github.com/walshyb' }} target='_blank'>
              <img src={ GithubLogo } alt='Github' />
            </Link>
            <Link to={{ pathname: 'https://www.linkedin.com/in/bwalshy/' }} target='_blank'>
              <img src={ LinkedInLogo } alt='LinkedIn' />
            </Link>
            <Link to={{ pathname: 'mailto:bmwalshy@gmail.com' }}>
              <img src={ Email } alt='Email' />
            </Link>
            <Link to="/Brandon_Walsh_Resume.pdf" target="_blank">
              <img src={ Resume } alt='Resume' />
            </Link>
          </nav>
        </div>
      </header>
    );
  }
}
