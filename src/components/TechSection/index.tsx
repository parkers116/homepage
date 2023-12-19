import React from "react";

import "./index.scss";

interface TechSectionProps {}

interface ObjListType {
  label: string;
  list: Array<string>;
}

const TECH_LIST: Array<ObjListType> = [
  {
    label: "Front-end",
    list: [
      "React.js / TypeScript",
      "jQuery / JSP",
      "HTML5 / CSS3 / JavaScript (ES6+)",
    ],
  },
  {
    label: "Back-end",
    list: ["Node.js (Express.js)", "Servlet", "SQL"],
  },
  {
    label: "Database",
    list: ["MySQL", "MongoDB"],
  },
  {
    label: "Mobile",
    list: ["React Native"],
  },
  {
    label: "Cloud",
    list: ["AWS"],
  },
  {
    label: "Others",
    list: ["C++ / JAVA / Python"],
  },
];

const List = () => {
  return TECH_LIST.map((item, id) => (
    <div key={id} className="flex-grid">
      <h3># {item.label}</h3>
      {item.list.map((item2, id2) => (
        <div key={id2}>{item2}</div>
      ))}
    </div>
  ));
};

const TechSection = (props: TechSectionProps) => {
  return (
    <div id="tech-section" className="tech-section section">
      <h1>Tech Stack</h1>
      <div className="flex-container">{List()}</div>
    </div>
  );
};

export default TechSection;
