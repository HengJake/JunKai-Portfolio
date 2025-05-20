import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeader";
import "./styles.scss";
import { content } from "./portfolioContent";
import { useState } from "react";
import { useEffect, useRef } from "react";

const Portfolio = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(
    Array(content.length).fill(0)
  );

  const handleNext = (i, total) => {
    setCurrentImageIndex((prev) => {
      const newState = [...prev];
      newState[i] = (newState[i] + 1) % total;
      return newState;
    });
  };

  const handlePrev = (i, total) => {
    setCurrentImageIndex((prev) => {
      const newState = [...prev];
      newState[i] = (newState[i] - 1 + total) % total;
      return newState;
    });
  };

  const [viewAllIndexes, setViewAllIndexes] = useState([]);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      {content.map((item, i) => (
        <div
          // detect whether view all is active
          className={`portfolio__container ${
            viewAllIndexes.includes(i) ? "view-all-active" : ""
          }`}
          key={i}
        >
          <div className="portfolio__container__text">
            <div>
              <h3 className="mb-5 border-b-2 pb-3">{item.title}</h3>
              <p>
                <strong>Resource : </strong>
                {item.link != null ? (
                  <a target="_blank" rel="noreferrer" href={item.link}>
                    {item.link}
                  </a>
                ) : (
                  <span>No link available</span>
                )}
              </p>
              <p>{item.description}</p>
            </div>
            <button
              className="portfolio__container__text__viewImage"
              onClick={() =>
                // detect if the index is in the array (meaning already click); remove if exist in array
                setViewAllIndexes((prev) => {
                  console.log(prev);
                  return prev.includes(i)
                    ? prev.filter((index) => index !== i)
                    : [...prev, i];
                })
              }
            >
              {viewAllIndexes.includes(i) ? "Hide All" : "View All"}
            </button>
          </div>

          <div
            className="portfolio__container__toggleImage"
          >
            <button
              className="toggleLeft"
              onClick={() => handlePrev(i, item.images.length)}
            >
              <span className="material-symbols-outlined">
                arrow_back_ios_new
              </span>
            </button>

            <div
              className={`portfolio__container__toggleImage__inner`}
            >
              {viewAllIndexes.includes(i) ? (
                // if view all is toggle
                [...item.images, ...item.images].map((img, j) => (
                  <img
                    key={j}
                    src={img}
                    alt={`${item.title} screenshot ${j + 1}`}
                  />
                ))
              ) : (
                // view all NOT toggle
                <img
                  src={item.images[currentImageIndex[i]]}
                  alt={`${item.title} screenshot ${currentImageIndex[i] + 1}`}
                />
              )}
            </div>

            <button
              className="toggleRight"
              onClick={() => handleNext(i, item.images.length)}
            >
              <span className="material-symbols-outlined">
                arrow_forward_ios
              </span>
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
