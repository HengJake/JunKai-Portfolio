import React, { useEffect, useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeader";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { FaLaptopCode } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { GiVolleyballBall } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";

const aboutMeDetails = [
  {
    label: "Name",
    value: "Heng Jun Kai",
  },
  {
    label: "Age",
    value: "17",
  },
  {
    label: "Email",
    value: "hengjunkai@gmail.com",
  },
  {
    label: "Address",
    value: "Malaysia, Bukit Jalil",
  },
  {
    label: "Contact No.",
    value: "010-331-4886",
  },
];

const summary =
  "Passionate about building and problem-solving, with a hands-on approach rooted in curiosity and self-learning. Started programming at 14 and enjoy turning ideas into functional software. Background in sports like volleyball has shaped strong teamwork, adaptability, and resilience—qualities I bring to every engineering project.";

const About = () => {
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    // Trigger animation shortly after mount
    const timer = setTimeout(() => setPlayAnimation(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__container">
        <div className="about__container__personalWrapper">
          <Animate
            play={playAnimation}
            duration={0.3}
            delay={0.3}
            start={{
              transform: "translateX(-800px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>Diploma Student (Final Year)</h3>
            <p className="">{summary}</p>
          </Animate>
          
          <Animate
            play={playAnimation}
            duration={0.3}
            delay={0.3}
            start={{
              transform: "translateX(-800px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="divider"></div>
          </Animate>

          <Animate
            play={playAnimation}
            duration={0.3}
            delay={0.3}
            start={{
              transform: "translateX(-800px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="secondHeading">Personal Information</h3>
            <ul>
              {aboutMeDetails.map((item, i) => (
                <li key={i} className="pt-2">
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>

        <div className="about__container__serviceWrapper">
          <Animate
            play={playAnimation}
            duration={0.3}
            delay={0.3}
            start={{
              transform: "translateX(800px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="about__container__serviceWrapper__content">
              <div>
                <FaLaptopCode size={60} color="var(--color-dark-1)" />
              </div>
              <div>
                <FaTools size={60} color="var(--color-dark-1)" />
              </div>
              <div>
                <GiVolleyballBall size={60} color="var(--color-dark-1)" />
              </div>
              <div>
                <FaGraduationCap size={60} color="var(--color-dark-1)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
