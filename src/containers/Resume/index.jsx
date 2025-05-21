import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeader";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { resumeExperience } from "./experience";
import "./styles.scss";
import { MdWork, MdGroups } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__title">Club Experience</h3>
          <VerticalTimeline layout={"1-column"} lineColor="var(--color-dark-1)">
            {resumeExperience.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__element"
                icon={<MdGroups />}
                iconStyle={{
                  background: "var(--color-light-1)",
                  color: "var(--color-dark-1)",
                }}
              >
                <div className="vertical_timeline">
                  <h3 className="vertical_timeline__title">{item.title}</h3>
                  <h5 className="vertical_timeline__subtitle">{item.role}</h5>
                  <small className="vertical_timeline__duration">
                    {item.duration}
                  </small>
                  <ul className="vertical_timeline__description">
                    {item.responsibilities.map((res, k) => (
                      <li>{res}</li>
                    ))}
                  </ul>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline__experience">
          <h3 className="timeline__experience__title">Work Experience</h3>
          <VerticalTimeline layout={"1-column"} lineColor="var(--color-dark-1)">
            {resumeExperience.workExperience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__element"
                icon={<MdWork />}
                iconStyle={{
                  background: "var(--color-light-1)",
                  color: "var(--color-dark-1)",
                }}
              >
                <div className="vertical_timeline">
                  <h3 className="vertical_timeline__title">{item.title}</h3>
                  <h5 className="vertical_timeline__subtitle">{item.role}</h5>
                  <small className="vertical_timeline__duration">
                    {item.duration}
                  </small>
                  <ul>
                    {item.responsibilities.map((res, j) => (
                      <li key={j}>{res}</li>
                    ))}
                  </ul>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__education__title">Education</h3>
          <VerticalTimeline layout={"1-column"} lineColor="var(--color-dark-1)">
            {resumeExperience.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__element"
                icon={<FaGraduationCap />}
                iconStyle={{
                  background: "var(--color-light-1)",
                  color: "var(--color-dark-1)",
                }}
              >
                <div className="vertical_timeline">
                  <h3 className="vertical_timeline__title">{item.title}</h3>
                  <h5 className="vertical_timeline__subtitle">
                    {item.subtitle}
                  </h5>
                  <small className="vertical_timeline__duration">
                    {item.duration}
                  </small>{" "}
                  <br />
                  <small className="vertical_timeline__description">
                    {item.grade}
                  </small>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};
export default Resume;
