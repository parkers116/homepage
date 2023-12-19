import React from "react";

import "./index.scss";

interface InfoSectionProps {}

const InfoSection = (props: InfoSectionProps) => {
  return (
    <div id="info-section" className="info-section section">
      <h1>Professional Experience</h1>
      <div>Technical Consultancy Service - Yunduo Technology Limited</div>
      <div>04/2023 - 07/2023</div>
      <br />
      <div>Analyst Programmer - LabCI Limited</div>
      <div>07/2021 - 03/2023</div>
      <br />
      <div>Programmer - LabCI Limited</div>
      <div>10/2019 - 06/2021</div>
      <br />
      <div>Full-time Intern - ASM Pacific Hong Kong Limited</div>
      <div>6/2017 - 8/2018</div>
      <br />
      <br />
      <h1>Education</h1>
      <div>BEng in Computer Engineering - The Hong Kong University of Science and Technology</div>
      <div>09/2016 - 08/2019</div>
    </div>
  );
};

export default InfoSection;
