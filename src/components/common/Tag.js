import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Tag.scss';

export default class Tag extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  };

  render() {
    const { name } = this.props;

    return <div className="tag">
      <span className="hashtag">#</span>
      <span className="tag-name">{ name }</span>
    </div>
  }
}
