import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeader";
import { skillsData } from "./skillSet";
import SkillBar from "./skillBar";
import "./styles.scss";
import certImage from "../../assets/interncert.jpg";

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
      <div
        className="skills__container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h4 className="mb-3 border-b-2">Certifications</h4>
        <a
          href="https://github.com/HengJake/Internship_Simple-Booking-System"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
        <img src={certImage} alt="Certification" style={{ width: "400px" }} />
      </div>
    </section>
  );
};

export default Skills;
