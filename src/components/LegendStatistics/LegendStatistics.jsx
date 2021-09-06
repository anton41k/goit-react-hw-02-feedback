import React from "react";
import PropTypes from "prop-types";
import css from "./LegendStatistics.module.css";

const LegendStatistics = ({ title, children }) => (
  <fieldset>
    <legend className={css.title}>{title}</legend>
    {children}
  </fieldset>
);

LegendStatistics.protoType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.elementType.isRequired,
};

export default LegendStatistics;
