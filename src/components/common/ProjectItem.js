import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProjectItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  };

  render() {
    return (
      <article className="project-item">
      </article>
    );
  }
}
