import React from "react";
import nutritionLabelLogo from "../../Assets/images/NutritionLabelLogo.png";
import Styles from "./Logo.module.css";

const logo = () => (
    <div className={Styles.Logo}>
        <img src={nutritionLabelLogo} alt="Nutrition Label Logo"/>
    </div>
)

export default logo;