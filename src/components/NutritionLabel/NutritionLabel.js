import React from "react";
import Header from "./NutritionLabelComponents/Header/Header";
import Nutrients from "./NutritionLabelComponents/Nutrients/Nutrients";
import Vitamins from "./NutritionLabelComponents/Vitamins/Vitamins";
import Styles from "./NutritionLabel.module.css";

const nutritionLabel = props => {
  const { nutrientsDailyPart, nutrientsQuantityOnLabel } = props;

  return (
    <div className={Styles.Container}>
      <Header servingSize={100} />
      <Nutrients
        calories={nutrientsQuantityOnLabel.ENERC_KCAL}
        dailyValue={"Daily Values %"}
      >
        <ul>
          <li>
            <div className={Styles.Float}>{`${nutrientsDailyPart.FAT} %`}</div>
            <b className={Styles.Attribute}>Total Fat</b>{" "}
            {nutrientsQuantityOnLabel.FAT} g
            <ul>
              <div
                className={Styles.Float}
              >{`${nutrientsDailyPart.FASAT} %`}</div>
              <li>Saturated Fat {nutrientsQuantityOnLabel.FASAT} g</li>
              <div
                className={Styles.Float}
              >{`${nutrientsDailyPart.FATRN} %`}</div>
              <li>Trans Fat {nutrientsQuantityOnLabel.FATRN} g</li>
            </ul>
          </li>
          <li>
            <div
              className={Styles.Float}
            >{`${nutrientsDailyPart.CHOLE} %`}</div>
            <b className={Styles.Attribute}>Cholesterol</b>{" "}
            {nutrientsQuantityOnLabel.CHOLE} mg
          </li>
          <li>
            <div className={Styles.Float}>{`${nutrientsDailyPart.NA} %`}</div>
            <b className={Styles.Attribute}>Sodium</b>{" "}
            {nutrientsQuantityOnLabel.NA} mg
          </li>
          <li>
            <div
              className={Styles.Float}
            >{`${nutrientsDailyPart.CHOCDF} %`}</div>
            <b className={Styles.Attribute}>Total Carbohydrates</b>{" "}
            {nutrientsQuantityOnLabel.CHOCDF} g
            <ul>
              <div
                className={Styles.Float}
              >{`${nutrientsDailyPart.FIBTG} %`}</div>
              <li>Dietary Fiber {nutrientsQuantityOnLabel.FIBTG} g</li>
              <div
                className={Styles.Float}
              >{`${nutrientsDailyPart.SUGAR} %`}</div>
              <li>Sugars {nutrientsQuantityOnLabel.SUGAR} g</li>
            </ul>
          </li>
          <li>
            <div
              className={Styles.Float}
            >{`${nutrientsDailyPart.PROCNT} %`}</div>
            <b className={Styles.Attribute}>Protein</b>{" "}
            {nutrientsQuantityOnLabel.PROCNT} g
          </li>
        </ul>
      </Nutrients>
      <Vitamins>
        <ul>
          <li>
            <div
              className={Styles.Float}
            >{`${nutrientsDailyPart.VITA_RAE} %`}</div>
            <b className={Styles.Attribute}>Vitamin A</b>{" "}
            {nutrientsQuantityOnLabel.VITA_RAE} µg
          </li>
          <li>
            <div className={Styles.Float}>{`${nutrientsDailyPart.VITC} %`}</div>
            <b className={Styles.Attribute}>Vitamin C</b>{" "}
            {nutrientsQuantityOnLabel.VITC} mg
          </li>
          <li>
            <div className={Styles.Float}>{`${nutrientsDailyPart.FE} %`}</div>
            <b className={Styles.Attribute}>Iron</b>{" "}
            {nutrientsQuantityOnLabel.FE} mg
          </li>
          <li>
            <div className={Styles.Float}>{`${nutrientsDailyPart.CA} %`}</div>
            <b className={Styles.Attribute}>Calcium</b>{" "}
            {nutrientsQuantityOnLabel.CA} mg
          </li>
        </ul>
      </Vitamins>
    </div>
  );
};

export default nutritionLabel;
