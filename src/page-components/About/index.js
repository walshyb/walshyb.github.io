import React from 'react';
import './index.scss';
import Tag from '../../components/common/Tag';

export default function About() {
  return (
    <section className="about">
      <p>Hi, my name is Brandon. I'm a web developer currently based in the Hudson Valley, NY with plans to move back to my home in NYC. I have 5+ years of experience across the stack and I'm particularly interested in backend technologies.</p>
      <p>The technologies I've used most in the last few years are <Tag name="rails"/>, <Tag name="react"/>, and <Tag name="wordpress"/>. My experience includes: documenting &amp; creating APIs, building custom Content Management Systems, writing tests, building react components &amp; sites, and planning &amp; managing database systems. </p>
    </section>
  );
}
