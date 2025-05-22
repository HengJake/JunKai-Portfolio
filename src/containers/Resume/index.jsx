import React, { useState } from "react";
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
  const [visibleCertIndex, setVisibleCertIndex] = useState(null);
  const [viewWork, setViewWork] = useState(null);
  const [viewClub, setViewClub] = useState(null);

  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__title">
            Co - curricular activity
          </h3>
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

                  {item.link != null ? (
                    <div className="mt-3">
                      <strong>Club Link : </strong>
                      <a className="clubLink" href={item.link} target="blank">
                        {item.link}
                      </a>
                    </div>
                  ) : (
                    ""
                  )}
                  <ul className="vertical_timeline__description">
                    {item.responsibilities.map((res, k) => (
                      <li key={k}>{res}</li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setViewClub(viewClub === i ? null : i)}
                  >
                    {viewClub === i ? "Hide Image" : "Show Image"}
                  </button>

                  {viewClub === i ? (
                    <div className="workImgContainer">
                      {item.photo.map((photos, z) => (
                        <div key={z}>
                          <small>{photos.desc}</small>
                          <img
                            src={photos.photo}
                            key={z}
                            className="clubImage"
                            alt={`Club Image ${z + 1}`}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
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

                  <button
                    onClick={() => setViewWork(viewWork === i ? null : i)}
                  >
                    {viewWork === i ? "Hide Image" : "Show Image"}
                  </button>

                  {viewWork === i ? (
                    <div className="workImgContainer">
                      {item.photo.map((img, z) => (
                        <img
                          src={img}
                          key={z}
                          className="workImage"
                          alt={`Work Image ${z + 1}`}
                        />
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
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
                  </small>
                  <span className="vertical_timeline__description grade">
                    <strong>Grade : </strong>
                    {item.grade}
                  </span>
                  <div className="divider"></div>
                  <img src={item.img} alt="Picture of campus" />
                  <a href={item.link} target="blank">
                    Link to Website
                  </a>

                  <button
                    onClick={() =>
                      // retrieve the index of showing cert
                      setVisibleCertIndex(visibleCertIndex === i ? null : i)
                    }
                  >
                    {visibleCertIndex === i
                      ? "Hide Certification"
                      : "Show Certification"}
                  </button>

                  {visibleCertIndex === i ? (
                    <div className="certContainer">
                      {item.cert.map((pic, z) => (
                        <img
                          src={pic}
                          alt={`Certifications ${z + 1}`}
                          key={z}
                        />
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
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
