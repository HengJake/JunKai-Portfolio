import React, { useEffect, useState } from "react";
import { Line } from "rc-progress";

const SkillBar = ({ skillName, percentage }) => {
  const [currentPercent, setCurrentPercent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPercent(parseInt(percentage, 10)); // "90%" → 90
    }, 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="skills__container__content__innerList mb-3">
      <h5>{skillName}</h5>
      <Line
        percent={currentPercent}
        strokeWidth="4"
        strokeColor="var(--color-dark-4)"
        trailWidth="4"
        strokeLinecap="square"
      />
    </div>
  );
};

export default SkillBar;
