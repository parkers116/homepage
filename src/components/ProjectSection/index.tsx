import React from "react";

import "./index.scss";

interface ObjArrType {
  name?: string;
  href?: string;
}

interface ObjListType {
  label: string;
  arr: Array<ObjArrType>;
}

interface ProjectSectionProps {}

const ARR_LIST: Array<ObjListType> = [
  {
    label: "APIs and Quality Assurance",
    arr: [
      {
        name: "Anonymous Message Board",
        href: "https://fcc-anonymous-message-board-parkers116.glitch.me",
      },
      {
        name: "Stock Price Checker",
        href: "https://fcc-stock-price-checker-parkers116.glitch.me",
      },
      {
        name: "Personal Library",
        href: "https://fcc-personal-library-parkers116.glitch.me",
      },
      {
        name: "Issue Tracker",
        href: "https://fcc-issue-tracker-parkers116.glitch.me/",
      },
      {
        name: "Metric-Imperial Converter",
        href: "https://fcc-metric-imperial-converter-parkers116.glitch.me",
      },
    ],
  },
  {
    label: "APIs and Microservices",
    arr: [
      {
        name: "File Metadata Microservice",
        href: "https://fcc-file-metadata-microservice-parkers116.glitch.me/",
      },
      {
        name: "Exercise Tracker",
        href: "https://fcc-exercise-tracker-parkers116.glitch.me/",
      },
      {
        name: "URL Shortener Microservice",
        href: "https://fcc-url-shortener-microservice-parkers116.glitch.me/",
      },
      {
        name: "Request Header Parser Microservice",
        href:
          "https://fcc-request-header-parser-microservice-parkers116.glitch.me/",
      },
      {
        name: "Timestamp Microservice",
        href: "https://fcc-timestamp-microservice-parkers116.glitch.me/",
      },
    ],
  },
  {
    label: "Data Visualization",
    arr: [
      {
        name: "Treemap Diagram",
        href: "https://codepen.io/parkers116/full/YzXJRNE",
      },
      {
        name: "Choropleth Map",
        href: "https://codepen.io/parkers116/full/rNVZvdr",
      },
      { name: "Heat Map", href: "https://codepen.io/parkers116/full/VwLdbpr" },
      {
        name: "Scatterplot Graph",
        href: "https://codepen.io/parkers116/full/eYNrGMg",
      },
      { name: "Bar Chart", href: "https://codepen.io/parkers116/full/bGdvqYQ" },
    ],
  },
  {
    label: "Front End Libraries",
    arr: [
      {
        name: "25 + 5 Clock",
        href: "https://codepen.io/parkers116/full/MWwomGW",
      },
      {
        name: "JavaScript Calculator",
        href: "https://codepen.io/parkers116/full/ZEGeyRR",
      },
      {
        name: "Drum Machine",
        href: "https://codepen.io/parkers116/full/zYGNzqm",
      },
      {
        name: "Markdown Previewer",
        href: "https://codepen.io/parkers116/full/NWqPJRN",
      },
      {
        name: "Random Quote Machine",
        href: "https://codepen.io/parkers116/full/YzPmRVG",
      },
    ],
  },
  {
    label: "Responsive Web Design",
    arr: [
      {
        name: "Personal Portfolio",
        href: "https://codepen.io/parkers116/full/XWJaVmd",
      },
      {
        name: "Technical Documentation Page",
        href: "https://codepen.io/parkers116/full/GRgvRbd",
      },
      {
        name: "Product Landing Page",
        href: "https://codepen.io/parkers116/full/xxbroQE",
      },
      {
        name: "Survey Form",
        href: "https://codepen.io/parkers116/full/dyPWQRR",
      },
      {
        name: "Tribute Page",
        href: "https://codepen.io/parkers116/full/bGNWvMZ",
      },
    ],
  },
];

const ProjectList = () => {
  return (
    <>
      {ARR_LIST.map((item, id) => (
        <div key={id} className="list-container">
          <h3># {item.label}</h3>
          {item.arr.map((item2, id2) => (
            <div key={id2} className="list-item">
              <span>{"<!--"}</span>
              <a href={item2.href} target="blank">
                {item2.name}
              </a>
              <span>{"-->"}</span>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

const ProjectSection = (props: ProjectSectionProps) => {
  return (
    <div id="project-section" className="project-section section">
      <h1>Project & Demo</h1>
      <div className="list-wrapper">{ProjectList()}</div>
    </div>
  );
};

export default ProjectSection;
