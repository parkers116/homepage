import React from "react";

import "./index.scss";

interface NavBarProps {}

const NavBar = (props: NavBarProps) => {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
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
