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
      "React.js / jQuery / Vanilla.js",
      "HTML5 / CSS3 / JavaScript (ES6+)",
      "TypeScript",
    ],
  },
  {
    label: "Back-end",
    list: ["Node.js (Express.js)", "SQL"],
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
  return TECH_LIST.map((item) => (
    <div className="flex-grid">
      <h3># {item.label}</h3>
      {item.list.map((item2) => (
        <div>{item2}</div>
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