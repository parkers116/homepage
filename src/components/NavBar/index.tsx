import React, { useState } from "react";
import classNames from "classnames";

import "./index.scss";

interface NavBarProps {}

const NavBar = (props: NavBarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const mobileHeaderBGStyle = classNames("mobile-header-bg", {
    "mobile-header-bg-open": isOpen,
  });
  const navListStyle = classNames("nav-list", {
    "nav-list-mobile-open": isOpen,
  });

  const onClickNavBar = () => {
    setIsOpen((val) => !val);
  };

  return (
    <nav className="nav-bar">
      <div className={mobileHeaderBGStyle} onClick={onClickNavBar}>
        {/* This is the background of navbar */}
      </div>
      <div className="mobile-header nav-link" onClick={onClickNavBar}>
        <i className="fas fa-bars"></i>
      </div>
      <ul className={navListStyle} onClick={onClickNavBar}>
        <li>
          <a className="nav-link" href="#first-section">
            <code>/* </code>Top<code> */</code>
          </a>
        </li>
        <li>
          <a className="nav-link" href="#info-section">
            <code>/* </code>About<code> */</code>
          </a>
        </li>
        <li>
          <a className="nav-link" href="#tech-section">
            <code>/* </code>Tech<code> */</code>
          </a>
        </li>
        <li>
          <a className="nav-link" href="#project-section">
            <code>/* </code>Project<code> */</code>
          </a>
        </li>
        <li>
          <a className="nav-link" href="#contact-section">
            <code>/* </code>Contact<code> */</code>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
