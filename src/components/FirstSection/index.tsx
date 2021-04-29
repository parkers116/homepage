import React from 'react';

import './index.scss';

interface FirstSectionProps {}

const FirstSection = (props: FirstSectionProps) => {
  return (
    <div id="first-section" className="first-section section">
      <h1>Hello! This is Parker Suen!</h1>
      <p>Web Developer</p>
    </div>
  );
};

export default FirstSection;
