import React, { Component } from 'react';
import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="color-picker">
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
