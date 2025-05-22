import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { useState, useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    // Trigger animation shortly after mount
    const timer = setTimeout(() => setPlayAnimation(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          <span>Jun Kai</span>
          <br />
          Software Developer
        </h1>
      </div>
      <Animate
        play={playAnimation}
        duration={1}
        delay={0.3}
        start={{
          transform: "translateY(500px)",
        }}
        end={{
          transform: "translateY(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>View More</button>
        </div>
      </Animate>
    </section>
  );
};
export default Home;
