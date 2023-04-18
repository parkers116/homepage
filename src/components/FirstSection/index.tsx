import React, { useState, useEffect } from "react";

import "./index.scss";

interface FirstSectionProps {}

const ARR_STR = [
  "Hello! This is Parker Suen!",
  "Now located in Greater Toronto Area, Ontario, Canada!",
];

const FirstSection = (props: FirstSectionProps) => {
  const [displayString, setDisplayString] = useState<string>();

  useEffect(() => {
    startTypeWriter(ARR_STR, 0);
  }, []);

  const typeWriter = (
    text: string,
    i: number,
    isReverse: boolean,
    cb?: () => void
  ) => {
    if (!isReverse) {
      if (i < text.length) {
        setDisplayString(text.substring(0, i + 1));
        setTimeout(() => {
          typeWriter(text, i + 1, false, cb);
        }, 80);
      } else {
        setTimeout(() => {
          typeWriter(text, i - 1, true, cb);
        }, 3000);
      }
    } else {
      if (i > 0) {
        setDisplayString(text.substring(0, i - 1));
        setTimeout(() => {
          typeWriter(text, i - 1, true, cb);
        }, 80);
      } else if (cb) {
        cb();
      } else {
        typeWriter(ARR_STR[0], 0, false);
      }
    }
  };

  const startTypeWriter = (arr: Array<string>, i: number) => {
    if (i < arr.length) {
      typeWriter(ARR_STR[i], 0, false, () => {
        // console.log("callback");
        startTypeWriter(arr, i + 1);
      });
    } else {
      startTypeWriter(arr, 0);
    }
  };

  return (
    <div id="first-section" className="first-section section">
      <h1>
        {displayString}
        <span className="caret"></span>
      </h1>
      <p>Web Developer</p>
    </div>
  );
};

export default FirstSection;
