import React, { useState } from "react";
import classNames from "classnames";
import { Waypoint } from "react-waypoint";

import "./index.scss";

interface ContactSectionProps {}

const ContactSection = (props: ContactSectionProps) => {
  const [isEnterHeader, setIsEnterHeader] = useState<boolean>(false);
  const [isEnterContent, setIsEnterContent] = useState<boolean>(false);

  const HeaderWrapperStyle = classNames("wrapper", {
    visible: isEnterHeader,
  });
  const ContentWrapperStyle = classNames("wrapper", {
    visible: isEnterContent,
  });

  const onEnterWaypoint = () => {
    setTimeout(() => setIsEnterHeader(true), 100);
    setTimeout(() => setIsEnterContent(true), 600);
  };

  const onLeaveWaypoint = () => {
    setIsEnterHeader(false);
    setIsEnterContent(false);
  };

  return (
    <div id="contact-section" className="contact-section section">
      <Waypoint onEnter={onEnterWaypoint} onLeave={onLeaveWaypoint} />
      <h1 className={HeaderWrapperStyle}>If you wish to keep in touch...</h1>
      <div className={ContentWrapperStyle}>
        <a
          href="https://codepen.io/parkers116"
          target="_blank"
          rel="noreferrer"
          id="profile-link"
        >
          <i className="fab fa-codepen"></i>
        </a>
        <a
          href="https://github.com/parkers116"
          target="_blank"
          rel="noreferrer"
          id="profile-link"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/parkersuen"
          target="_blank"
          rel="noreferrer"
          id="profile-link"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="mailto:parkers116@gmail.com"
          target="_blank"
          rel="noreferrer"
          id="profile-link"
        >
          <i className="far fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
