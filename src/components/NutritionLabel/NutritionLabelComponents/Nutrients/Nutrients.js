import React from "react";
import Styles from "./Nutrients.module.css";

const nutrients = (props) => (
    <div className={Styles.Container}>
        <div className={Styles.Headline}></div>
        <div className={Styles.CalorieSummary}>
            <span>
                <b className={Styles.Calories}>Calories {props.calories}</b>
            </span>
            <span>{props.dailyValue}</span>
        </div>
        <div className={Styles.PeriodIndication}></div>
        <div className={Styles.Nutrients}>{props.children}</div>
    </div>
);

export default nutrients;