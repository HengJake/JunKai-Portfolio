import React, { useRef } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeader";
import "./styles.scss";
import emailjs from "emailjs-com";
import { useState, useEffect } from "react";

const Contact = () => {
  const [isCooldown, setIsCooldown] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const formRef = useRef();

  const COOLDOWN_DURATION = 24 * 60 * 60 * 1000;
  const LAST_SUBMIT_KEY = "last_submit_time";

  useEffect(() => {
    const lastSubmit = localStorage.getItem(LAST_SUBMIT_KEY);
    if (lastSubmit) {
      const timePassed = Date.now() - parseInt(lastSubmit, 10);
      if (timePassed < COOLDOWN_DURATION) {
        const timeLeft = COOLDOWN_DURATION - timePassed;
        setIsCooldown(true);
        startCountdown(timeLeft);
      }
    }
  }, []);

  const startCountdown = (msLeft) => {
    const interval = setInterval(() => {
      const timePassed =
        Date.now() - parseInt(localStorage.getItem(LAST_SUBMIT_KEY), 10);
      const timeRemaining = COOLDOWN_DURATION - timePassed;

      if (timeRemaining <= 0) {
        clearInterval(interval);
        setIsCooldown(false);
        setCountdown("");
      } else {
        const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
        const minutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        setCountdown(`${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isCooldown) {
      alert("Please wait until cooldown ends.");
      return;
    }

    emailjs
      .sendForm(
        "service_0umjewn",
        "template_zpb8otg",
        formRef.current,
        "iPB1sQt8Mo3hbqvZY"
      )
      .then(
        () => {
          alert("Thank you for reaching out!");
          formRef.current.reset();

          const now = Date.now();
          localStorage.setItem(LAST_SUBMIT_KEY, now.toString());
          setIsCooldown(true);
          startCountdown(COOLDOWN_DURATION);
        },
        (error) => {
          alert("Failed to contact");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      ></PageHeaderContent>
      <form
        className="contact__container"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <div className="contact__container__inner name">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            placeholder="Enter your name..."
            autoComplete="off"
            required
          ></input>
        </div>
        <div className="contact__container__inner email">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            placeholder="Enter your email..."
            autoComplete="off"
            required
          ></input>
        </div>
        <div className="contact__container__inner desc">
          <label htmlFor="description">Description</label>
          <input
            name="message"
            id="description"
            placeholder="Type your message here..."
            autoComplete="off"
            required
          ></input>
        </div>
        <button type="submit" disabled={isCooldown}>
          {isCooldown ? `Please wait (${countdown}s) to send another mail` : "Submit"}
        </button>
      </form>
    </section>
  );
};
export default Contact;
