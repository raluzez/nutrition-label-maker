import React from "react";
import Styles from "./Vitamins.module.css";

const vitamins = (props) => (
    <div>
        <div className={Styles.Vitamins}>{props.children}</div>
        <div className={Styles.FootNotes}>
        * Percentage Daily Values are based on a 2,000 calorie diet. Your Daily Values may be
          higher or lower depending on your calorie needs.
        </div>
    </div>
);

export default vitamins;