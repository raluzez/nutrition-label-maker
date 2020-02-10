import React, { useState } from "react";
import { dailyIntake } from "../../Utility/Consts";
import { firstNutrientsColumn, secondNutrientsColumn } from "../../Utility/Consts";
import Styles from "./AddNewProductNutrients.module.css";

const AddNewProductNutrients = props => {
  const [nutrients, setNutrients] = useState(props.nutrients);

  const nutrientsInputHandler = (key, event) => {
    const newNutrients = JSON.parse(JSON.stringify(props.nutrients));
    newNutrients[key].quantity = Number(event.target.value);
    return newNutrients;
  };

  const calculateDaylyPart = nutrientsObj => {
    const newNutrients = JSON.parse(JSON.stringify(nutrientsObj));
    Object.keys(dailyIntake).map(key => {
      return (newNutrients[key].quantity = (
        (nutrientsObj[key].quantity / dailyIntake[key]) *
        100
      ).toFixed(1));
    });
    return newNutrients;
  };

  const nutrientsDailyPart = calculateDaylyPart(nutrients);

  const columnHandler = nutrientsColumn =>
    Object.keys(nutrientsColumn).map(key => (
      <>
        <div className={Styles.StatusBarInfo}>
          <span>{nutrientsColumn[key].name}</span>
          <input
            type="text"
            placeholder="Amount"
            onChange={e => {
              props.onchange(nutrientsInputHandler(key, e));
              setNutrients(nutrientsInputHandler(key, e));
            }}
            value={nutrients[key].quantity}
          />
          <span>{nutrientsColumn[key].units}</span>
        </div>
        <div className={Styles.StatusBarBase}>
          <div
            className={[Styles.StatusBar, Styles[key]].join(" ")}
            style={{ width: `${nutrientsDailyPart[key].quantity}%` }}
          />
        </div>
      </>
    ));

  return (
    <div className={Styles.NutrientsContainer}>
      <div className={Styles.Nutrients}>
        {columnHandler(firstNutrientsColumn)}
      </div>
      <div className={Styles.Nutrients}>
        {columnHandler(secondNutrientsColumn)}
      </div>
    </div>
  );
};

export default AddNewProductNutrients;
