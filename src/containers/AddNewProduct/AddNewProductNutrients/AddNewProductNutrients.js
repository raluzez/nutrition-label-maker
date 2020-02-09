import React, { useState } from "react";
import { dailyIntake } from "../../../Utility/Consts";
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

  return (
    <div className={Styles.NutrientsContainer}>
      <div className={Styles.Nutrients}>
        <div className={Styles.StatusBarInfo}>
          <span>Total Fat</span>
          <input
            type="text"
            placeholder="Amount"
            onChange={e => {
              props.onchange(nutrientsInputHandler("FAT", e));
              setNutrients(nutrientsInputHandler("FAT", e));
            }}
            value={nutrients.FAT.quantity}
          />
          <span>g</span>
        </div>
        <div className={Styles.StatusBarBase}>
          <div
            className={[Styles.StatusBar, Styles.Fat].join(" ")}
            style={{ width: `${nutrientsDailyPart.FAT.quantity}%` }}
          />
        </div>
        <div className={Styles.StatusBarInfo}>
          <span>Saturated Fat</span>
          <input
            type="text"
            placeholder="Amount"
            onChange={e => {
              props.onchange(nutrientsInputHandler("FASAT", e));
              setNutrients(nutrientsInputHandler("FASAT", e));
            }}
          />
          <span>g</span>
        </div>
        <div className={Styles.StatusBarBase}>
          <div
            className={[Styles.StatusBar, Styles.Fat].join(" ")}
            style={{ width: `${nutrientsDailyPart.FASAT.quantity}%` }}
          />
        </div>
        <div className={Styles.StatusBarInfo}>
          <span>Trans Fat</span>
          <input
            type="text"
            placeholder="Amount"
            onChange={e => {
              props.onchange(nutrientsInputHandler("FATRN", e));
              setNutrients(nutrientsInputHandler("FATRN", e));
            }}
          />
          <span>g</span>
        </div>
        <div className={Styles.StatusBarBase}>
          <div
            className={[Styles.StatusBar, Styles.Fat].join(" ")}
            style={{ width: `${nutrientsDailyPart.FATRN.quantity}%` }}
          />
        </div>

        <div className={Styles.StatusBarInfo}>
          <span>Total Carbs</span>
          <input
            type="text"
            placeholder="Amount"
            onChange={e => {
              props.onchange(nutrientsInputHandler("CHOCDF", e));
              setNutrients(nutrientsInputHandler("CHOCDF", e));
            }}
          />
          <span>g</span>
        </div>
        <div className={Styles.StatusBarBase}>
          <div
            className={[Styles.StatusBar, Styles.Carbs].join(" ")}
            style={{ width: `${nutrientsDailyPart.CHOCDF.quantity}%` }}
          />
        </div>

        <div className={Styles.StatusBarInfo}>
          <span>Dietry Fiber</span>
          <input
            type="text"
            placeholder="Amount"
            onChange={e => {
              props.onchange(nutrientsInputHandler("FIBTG", e));
              setNutrients(nutrientsInputHandler("FIBTG", e));
            }}
          />
          <span>g</span>
        </div>
        <div className={Styles.StatusBarBase}>
          <div
            className={[Styles.StatusBar, Styles.Carbs].join(" ")}
            style={{ width: `${nutrientsDailyPart.FIBTG.quantity}%` }}
          />
        </div>

        <div className={Styles.StatusBarInfo}>
          <span>Sugars</span>
          <input
            type="text"
            placeholder="Amount"
            onChange={e => {
              props.onchange(nutrientsInputHandler("SUGAR", e));
              setNutrients(nutrientsInputHandler("SUGAR", e));
            }}
          />
          <span>g</span>
        </div>
        <div className={Styles.StatusBarBase}>
          <div
            className={[Styles.StatusBar, Styles.Carbs].join(" ")}
            style={{ width: `${nutrientsDailyPart.SUGAR.quantity}%` }}
          />
        </div>

        <div className={Styles.StatusBarInfo}>
          <span>Protein</span>
          <input
            type="text"
            placeholder="Amount"
            onChange={e => {
              props.onchange(nutrientsInputHandler("PROCNT", e));
              setNutrients(nutrientsInputHandler("PROCNT", e));
            }}
          />
          <span>g</span>
        </div>
        <div className={Styles.StatusBarBase}>
          <div
            className={[Styles.StatusBar, Styles.Protein].join(" ")}
            style={{ width: `${nutrientsDailyPart.PROCNT.quantity}%` }}
          />
        </div>
      </div>
      <div className={Styles.Nutrients}>
        <div className={Styles.StatusBarInfo}>
          <span>Calories</span>
          <input
            type="text"
            placeholder="Amount"
            onChange={e => {
              props.onchange(nutrientsInputHandler("ENERC_KCAL", e));
              setNutrients(nutrientsInputHandler("ENERC_KCAL", e));
            }}
          />
          <span>kcal</span>
        </div>
        <div className={Styles.StatusBarBase}>
          <div
            className={[Styles.StatusBar, Styles.Calories].join(" ")}
            style={{ width: `${nutrientsDailyPart.ENERC_KCAL.quantity}%` }}
          />
        </div>

        <div className={Styles.StatusBarInfo}>
          <span>Cholesterol</span>
          <input
            type="text"
            placeholder="Amount"
            onChange={e => {
              props.onchange(nutrientsInputHandler("CHOLE", e));
              setNutrients(nutrientsInputHandler("CHOLE", e));
            }}
          />
          <span>mg</span>
        </div>
        <div className={Styles.StatusBarBase}>
          <div
            className={[Styles.StatusBar, Styles.Fat].join(" ")}
            style={{ width: `${nutrientsDailyPart.CHOLE.quantity}%` }}
          />
        </div>

        <div className={Styles.StatusBarInfo}>
          <span>Sodium</span>
          <input
            type="text"
            placeholder="Amount"
            onChange={e => {
              props.onchange(nutrientsInputHandler("NA", e));
              setNutrients(nutrientsInputHandler("NA", e));
            }}
          />
          <span>mg</span>
        </div>
        <div className={Styles.StatusBarBase}>
          <div
            className={[Styles.StatusBar, Styles.Vitamins].join(" ")}
            style={{ width: `${nutrientsDailyPart.NA.quantity}%` }}
          />
        </div>

        <div className={Styles.StatusBarInfo}>
          <span>Iron</span>
          <input
            type="text"
            placeholder="Amount"
            onChange={e => {
              props.onchange(nutrientsInputHandler("FE", e));
              setNutrients(nutrientsInputHandler("FE", e));
            }}
          />
          <span>mg</span>
        </div>
        <div className={Styles.StatusBarBase}>
          <div
            className={[Styles.StatusBar, Styles.Vitamins].join(" ")}
            style={{ width: `${nutrientsDailyPart.FE.quantity}%` }}
          />
        </div>

        <div className={Styles.StatusBarInfo}>
          <span>Calcium</span>
          <input
            type="text"
            placeholder="Amount"
            onChange={e => {
              props.onchange(nutrientsInputHandler("CA", e));
              setNutrients(nutrientsInputHandler("CA", e));
            }}
          />
          <span>mg</span>
        </div>
        <div className={Styles.StatusBarBase}>
          <div
            className={[Styles.StatusBar, Styles.Vitamins].join(" ")}
            style={{ width: `${nutrientsDailyPart.CA.quantity}%` }}
          />
        </div>

        <div className={Styles.StatusBarInfo}>
          <span>Vitamin A</span>
          <input
            type="text"
            placeholder="Amount"
            onChange={e => {
              props.onchange(nutrientsInputHandler("VITA_RAE", e));
              setNutrients(nutrientsInputHandler("VITA_RAE", e));
            }}
          />
          <span>µg</span>
        </div>
        <div className={Styles.StatusBarBase}>
          <div
            className={[Styles.StatusBar, Styles.Vitamins].join(" ")}
            style={{ width: `${nutrientsDailyPart.VITA_RAE.quantity}%` }}
          />
        </div>

        <div className={Styles.StatusBarInfo}>
          <span>Vitamin C</span>
          <input
            type="text"
            placeholder="Amount"
            onChange={e => {
              props.onchange(nutrientsInputHandler("VITC", e));
              setNutrients(nutrientsInputHandler("VITC", e));
            }}
          />
          <span>mg</span>
        </div>
        <div className={Styles.StatusBarBase}>
          <div
            className={[Styles.StatusBar, Styles.Vitamins].join(" ")}
            style={{ width: `${nutrientsDailyPart.VITC.quantity}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default AddNewProductNutrients;
