import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';
import './ProjectItem.scss';

export default class ProjectItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    content: PropTypes.string.isRequired,
    caseStudyUrl: PropTypes.string,
    liveSiteUrl: PropTypes.string
  };

  render() {
    const { name, image, imageAlt, tags, content, caseStudyUrl, liveSiteUrl } = this.props;
    return (
      <article className="project-item">
        <div className="project-details">
          <img src={ image } alt={ imageAlt } />
          <h2>{ name }</h2>
          <div className="tags">
            {
              tags.map( tag => {
                return <Tag name={ tag } key={ tag } />
              })
            }
          </div>
          <p>{ content }</p>
        </div>
        <div className="project-links">
          { caseStudyUrl ? 
              <a className="project-button" href={ caseStudyUrl }>Case Study</a> : null 
          }

          { liveSiteUrl ? 
              <a className="project-button" href={ liveSiteUrl }>Live Site</a> : null 
          }
        </div>
      </article>
    );
  }
}
