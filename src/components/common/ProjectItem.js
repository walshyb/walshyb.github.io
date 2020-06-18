import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';

export default class ProjectItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    content: PropTypes.string.isRequired
  };

  render() {
    const { name, image, tags, content } = this.props;
    return (
      <article className="project-item">
        <img src={ image } alt="" />
        <h2>{ name }</h2>
        <div className="tags">
          {
            tags.map( tag => {
              return <Tag name={ tag }/>
            })
          }
        </div>
        <p>{ content }</p>
      </article>
    );
  }
}
