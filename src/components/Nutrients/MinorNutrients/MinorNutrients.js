import React from "react";
import { secondNutrientsColumn } from "../../../Utility/Consts";
import Styles from "./MinorNutrients.module.css";

const MinorNutrients = props => {
  const nutients = props.nutrientsDailyPart;
  const quantity = props.nutrientsQuantityOnLabel;

  return (
    <div className={Styles.Nutrients}>
      {Object.keys(secondNutrientsColumn).map(key => (
        <>
          <div className={Styles.StatusBarInfo}>
            <span>{secondNutrientsColumn[key].name}</span>
            <span>{`${nutients[key]} %`}</span>
          </div>
          <div
            className={Styles.StatusBarBase}
            title={`${quantity[key]} ${secondNutrientsColumn[key].units} in 100g of the product`}
          >
            <div
              className={[Styles.StatusBar, Styles[key]].join(" ")}
              style={{ width: `${nutients[key]}%` }}
            />
          </div>
        </>
      ))}
    </div>
  );
};

export default MinorNutrients;
