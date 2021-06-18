import React from 'react';
import './index.scss';
import Tag from '../../common/Tag';

export default function About() {
  return (
    <section className="about">
      <p>Hi, my name is Brandon. I'm a software developer based in NYC. I have 6+ years of experience across the stack and I'm particularly interested in backend technologies.</p>
      <p>The technologies I've used most in the last few years are <Tag name="python"/>, <Tag name="react"/>, <Tag name="typescript"/>, <Tag name="javascript"/>,   and <Tag name="rails"/>.</p>
      <p class="strong">My experience includes: </p>
      <ul>
        <li>Designing &amp; creating APIs in Python and Ruby on Rails</li>
        <li>Maintaining thorough and clear documentation</li>
        <li>Building sites in NextJS and React</li>
        <li>Working in an agile methodology</li>
        <li>Designing &amp; managing database systems</li>
        <li>Writing tests with BDD methodology</li>
        <li>Building custom content management systems</li>

      </ul>
    </section>
  );
}
