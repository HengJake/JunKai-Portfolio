import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeader";
import "./styles.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      ></PageHeaderContent>
    </section>
  );
};
export default Contact;
