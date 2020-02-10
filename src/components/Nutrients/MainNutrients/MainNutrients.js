import React from "react";
import { firstNutrientsColumn } from "../../../Utility/Consts";
import Styles from "./MainNutrients.module.css";

const MainNutrients = props => {
  const nutients = props.nutrientsDailyPart;
  const quantity = props.nutrientsQuantityOnLabel;

  return (
    <div className={Styles.Nutrients}>
      {Object.keys(firstNutrientsColumn).map(key => (
        <>
          <div className={Styles.StatusBarInfo}>
            <span>{firstNutrientsColumn[key].name}</span>
            <span>{`${nutients[key]} %`}</span>
          </div>
          <div
            className={Styles.StatusBarBase}
            title={`${quantity[key]} ${firstNutrientsColumn[key].units} in 100g of the product`}
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

export default MainNutrients;
