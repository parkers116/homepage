import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { closeModalProjectDetails, openModalProjectDetails } from "../../features/app/appSlice";

import Modal from "../Modal";

import "./index.scss";

interface ObjArrType {
  name: string;
  href: string;
  sourcecode: string;
  isAvailable: boolean;
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
        sourcecode: "https://glitch.com/edit/#!/fcc-anonymous-message-board-parkers116",
        isAvailable: true,
      },
      {
        name: "Stock Price Checker",
        href: "https://fcc-stock-price-checker-parkers116.glitch.me",
        sourcecode: "https://glitch.com/edit/#!/fcc-stock-price-checker-parkers116",
        isAvailable: false,
      },
      {
        name: "Personal Library",
        href: "https://fcc-personal-library-parkers116.glitch.me",
        sourcecode: "https://glitch.com/edit/#!/fcc-personal-library-parkers116",
        isAvailable: true,
      },
      {
        name: "Issue Tracker",
        href: "https://fcc-issue-tracker-parkers116.glitch.me/",
        sourcecode: "https://glitch.com/edit/#!/fcc-issue-tracker-parkers116",
        isAvailable: true,
      },
      {
        name: "Metric-Imperial Converter",
        href: "https://fcc-metric-imperial-converter-parkers116.glitch.me",
        sourcecode: "https://glitch.com/edit/#!/fcc-metric-imperial-converter-parkers116",
        isAvailable: true,
      },
    ],
  },
  {
    label: "APIs and Microservices",
    arr: [
      {
        name: "File Metadata Microservice",
        href: "https://fcc-file-metadata-microservice-parkers116.glitch.me/",
        sourcecode: "https://glitch.com/edit/#!/fcc-file-metadata-microservice-parkers116",
        isAvailable: true,
      },
      {
        name: "Exercise Tracker",
        href: "https://fcc-exercise-tracker-parkers116.glitch.me/",
        sourcecode: "https://glitch.com/edit/#!/fcc-exercise-tracker-parkers116",
        isAvailable: true,
      },
      {
        name: "URL Shortener Microservice",
        href: "https://fcc-url-shortener-microservice-parkers116.glitch.me/",
        sourcecode: "https://glitch.com/edit/#!/fcc-url-shortener-microservice-parkers116",
        isAvailable: true,
      },
      {
        name: "Request Header Parser Microservice",
        href: "https://fcc-request-header-parser-microservice-parkers116.glitch.me/",
        sourcecode: "https://glitch.com/edit/#!/fcc-request-header-parser-microservice-parkers116",
        isAvailable: true,
      },
      {
        name: "Timestamp Microservice",
        href: "https://fcc-timestamp-microservice-parkers116.glitch.me/",
        sourcecode: "https://glitch.com/edit/#!/fcc-timestamp-microservice-parkers116",
        isAvailable: true,
      },
    ],
  },
  {
    label: "Data Visualization",
    arr: [
      {
        name: "Treemap Diagram",
        href: "https://codepen.io/parkers116/full/YzXJRNE",
        sourcecode: "https://codepen.io/parkers116/pen/YzXJRNE",
        isAvailable: true,
      },
      {
        name: "Choropleth Map",
        href: "https://codepen.io/parkers116/full/rNVZvdr",
        sourcecode: "https://codepen.io/parkers116/pen/rNVZvdr",
        isAvailable: true,
      },
      {
        name: "Heat Map",
        href: "https://codepen.io/parkers116/full/VwLdbpr",
        sourcecode: "https://codepen.io/parkers116/pen/VwLdbpr",
        isAvailable: true,
      },
      {
        name: "Scatterplot Graph",
        href: "https://codepen.io/parkers116/full/eYNrGMg",
        sourcecode: "https://codepen.io/parkers116/pen/eYNrGMg",
        isAvailable: true,
      },
      {
        name: "Bar Chart",
        href: "https://codepen.io/parkers116/full/bGdvqYQ",
        sourcecode: "https://codepen.io/parkers116/pen/bGdvqYQ",
        isAvailable: true,
      },
    ],
  },
  {
    label: "Front End Libraries",
    arr: [
      {
        name: "25 + 5 Clock",
        href: "https://codepen.io/parkers116/full/MWwomGW",
        sourcecode: "https://codepen.io/parkers116/pen/MWwomGW",
        isAvailable: true,
      },
      {
        name: "JavaScript Calculator",
        href: "https://codepen.io/parkers116/full/ZEGeyRR",
        sourcecode: "https://codepen.io/parkers116/pen/ZEGeyRR",
        isAvailable: true,
      },
      {
        name: "Drum Machine",
        href: "https://codepen.io/parkers116/full/zYGNzqm",
        sourcecode: "https://codepen.io/parkers116/pen/zYGNzqm",
        isAvailable: true,
      },
      {
        name: "Markdown Previewer",
        href: "https://codepen.io/parkers116/full/NWqPJRN",
        sourcecode: "https://codepen.io/parkers116/pen/NWqPJRN",
        isAvailable: true,
      },
      {
        name: "Random Quote Machine",
        href: "https://codepen.io/parkers116/full/YzPmRVG",
        sourcecode: "https://codepen.io/parkers116/pen/YzPmRVG",
        isAvailable: true,
      },
    ],
  },
  {
    label: "Responsive Web Design",
    arr: [
      {
        name: "Personal Portfolio",
        href: "https://codepen.io/parkers116/full/XWJaVmd",
        sourcecode: "https://codepen.io/parkers116/pen/XWJaVmd",
        isAvailable: true,
      },
      {
        name: "Technical Documentation Page",
        href: "https://codepen.io/parkers116/full/GRgvRbd",
        sourcecode: "https://codepen.io/parkers116/pen/GRgvRbd",
        isAvailable: true,
      },
      {
        name: "Product Landing Page",
        href: "https://codepen.io/parkers116/full/xxbroQE",
        sourcecode: "https://codepen.io/parkers116/pen/xxbroQE",
        isAvailable: true,
      },
      {
        name: "Survey Form",
        href: "https://codepen.io/parkers116/full/dyPWQRR",
        sourcecode: "https://codepen.io/parkers116/pen/dyPWQRR",
        isAvailable: true,
      },
      {
        name: "Tribute Page",
        href: "https://codepen.io/parkers116/full/bGNWvMZ",
        sourcecode: "https://codepen.io/parkers116/pen/bGNWvMZ",
        isAvailable: true,
      },
    ],
  },
];

const ProjectList = (dispatch: Dispatch<AnyAction>) => {
  return (
    <>
      {ARR_LIST.map((item, id) => (
        <div key={id} className="list-container">
          <h3># {item.label}</h3>
          {item.arr.map((item2, id2) => (
            <div key={id2} className="list-item">
              <span>{"<!--"}</span>
              <button
                onClick={() => {
                  dispatch(openModalProjectDetails({ label: item.label, ...item2 }));
                }}
              >
                {item2.name}
              </button>
              <span>{"-->"}</span>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

const ProjectSection = (props: ProjectSectionProps) => {
  const dispatch = useDispatch();
  const { isOpenModalProjectDetails, objSelectedProject } = useSelector((state: RootState) => state.app);

  const onClickCloseModal = () => {
    dispatch(closeModalProjectDetails());
  };

  return (
    <div id="project-section" className="project-section section">
      <h1>Project & Demo</h1>
      <div className="list-wrapper">{ProjectList(dispatch)}</div>
      {isOpenModalProjectDetails && (
        <Modal>
          <div className="modal-project-details">
            <button className="close-button" onClick={onClickCloseModal}>
              <i className="fas fa-times"></i>
            </button>
            <div className="header"># {objSelectedProject.label}</div>
            <div className="sub-header">{objSelectedProject.name}</div>
            <div className="content">
              <button>
                <a href={objSelectedProject.href} target="blank">
                  <code>{"/* "}</code>
                  Demo Link
                  <code>{" */"}</code>
                </a>
              </button>
              <button>
                <a href={objSelectedProject.sourcecode} target="blank">
                  <code>{"/* "}</code>
                  Source Code
                  <code>{" */"}</code>
                </a>
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ProjectSection;
