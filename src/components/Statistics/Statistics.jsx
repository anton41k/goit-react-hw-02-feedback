import React from "react";
import PropTypes from "prop-types";
import css from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={css.container_statistics}>
    <li className={css.statistics_item}>
      Good:
      <span className={css.statiscic_votes}> {good}</span>
    </li>
    <li className={css.statistics_item}>
      Neutral:
      <span className={css.statiscic_votes}> {neutral}</span>
    </li>
    <li className={css.statistics_item}>
      Bad:
      <span className={css.statiscic_votes}> {bad}</span>
    </li>
    <li className={css.statistics_item}>
      Total:
      <span className={css.statiscic_votes}> {total}</span>
    </li>
    <li className={css.statistics_item}>
      Positive feedback:
      <span className={css.statiscic_votes}> {positivePercentage}%</span>
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};

export default Statistics;
