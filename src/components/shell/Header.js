import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

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
        <div className="color-picker">
          { colors.map( color => {
              return <div
                id={ color }
                className={ 'color ' + color}
                onClick={ this.colorClick }
              >
              </div>;
            }) }
        </div>

        <div className="title-wrap">
          <h1>Brandon Walsh | Full Stack Developer</h1>
          <nav>
          </nav>
        </div>
      </header>
    );
  }
}
