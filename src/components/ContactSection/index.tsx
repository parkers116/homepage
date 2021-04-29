import React from 'react';

import './index.scss';

interface ContactSectionProps {}

const ContactSection = (props: ContactSectionProps) => {
  return (
    <div id="contact-section" className="contact-section section">
      <h1>If you wish to keep in touch...</h1>
      <div>
        <a href="https://codepen.io/parkers116" target="_blank" id="profile-link">
          <i className="fab fa-codepen"></i>
        </a>
        <a href="https://github.com/parkers116" target="_blank" id="profile-link">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/parkersuen" target="_blank" id="profile-link">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="mailto:parkers116@gmail.com" target="_blank" id="profile-link">
          <i className="far fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
