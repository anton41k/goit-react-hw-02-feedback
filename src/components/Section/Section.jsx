import React from "react";
import PropTypes from "prop-types";
import css from "./Section.module.css";

const Section = ({ title, children }) => (
  <section className={css.section}>
    <h1 className={css.title}>{title}</h1>
    {children}
  </section>
);

Section.protoType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.elementType.isRequired,
};

export default Section;
