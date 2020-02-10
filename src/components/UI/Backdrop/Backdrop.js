import React from "react";
import Styles from "./Backdrop.module.css";

const backdrop = props => (
  <div className={Styles.Backdrop} onClick={props.closeModal}></div>
);

export default backdrop;
