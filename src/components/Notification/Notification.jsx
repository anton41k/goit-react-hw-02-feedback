import React from "react";
import PropTypes from "prop-types";
import css from "./Notification.module.css";

const Notification = ({ message }) => (
  <p className={css.empty_statistics}>{message}</p>
);

Notification.propTypes = {
  title: PropTypes.string,
};

export default Notification;
