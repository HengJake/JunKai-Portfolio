import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeader";
import { skillsData } from "./skillSet";
import SkillBar from "./skillBar";
import "./styles.scss";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="Skills Set"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills__container">
        {skillsData.map((item, i) => (
          <div key={i} className="skills__container__content">
            <h4 className="mb-3 border-b-2">{item.label}</h4>
            {item.data.map((dataSet, j) => (
              <SkillBar
                key={j}
                skillName={dataSet.skillName}
                percentage={dataSet.percentage}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
