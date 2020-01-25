import React from "react";
import Styles from './MinorNutrients.module.css'

const MinorNutrients = (props) => {

  const checkIfOverH = amount => {
    if (amount < 100) {
        return amount
    } else {
        return amount = 100
    }
  } 

  const nutients = props.nutrientsDailyPart


  return (
    <div className={Styles.Nutrients}>
      <div className={Styles.StatusBarInfo}>
        <span>Calories</span>
        <span>{`${nutients.ENERC_KCAL} %`}</span>
      </div>
      <div className={Styles.StatusBarBase} >
        <div
          className={[Styles.StatusBar, Styles.Calories].join(" ")}
          style={{ width: `${checkIfOverH(nutients.ENERC_KCAL)}%` }}
        />
      </div>

      <div className={Styles.StatusBarInfo}>
        <span>Cholesterol</span>
        <span>{`${nutients.CHOLE} %`}</span>
      </div>
      <div className={Styles.StatusBarBase} >
        <div
          className={[Styles.StatusBar, Styles.Fat].join(" ")}
          style={{ width: `${checkIfOverH(nutients.CHOLE)}%` }}
        />
      </div>

      <div className={Styles.StatusBarInfo}>
        <span>Sodium</span>
        <span>{`${nutients.NA} %`}</span>
      </div>
      <div className={Styles.StatusBarBase} >
        <div
          className={[Styles.StatusBar, Styles.Vitamins].join(" ")}
          style={{ width: `${checkIfOverH(nutients.NA)}%` }}
        />
      </div>

      <div className={Styles.StatusBarInfo}>
        <span>Iron</span>
        <span>{`${nutients.FE} %`}</span>
      </div>
      <div className={Styles.StatusBarBase} >
        <div
          className={[Styles.StatusBar, Styles.Vitamins].join(" ")}
          style={{ width: `${checkIfOverH(nutients.FE)}%` }}
        />
      </div>

      <div className={Styles.StatusBarInfo}>
        <span>Calcium</span>
        <span>{`${nutients.CA} %`}</span>
      </div>
      <div className={Styles.StatusBarBase} >
        <div
          className={[Styles.StatusBar, Styles.Vitamins].join(" ")}
          style={{ width: `${checkIfOverH(nutients.CA)}%` }}
        />
      </div>

      <div className={Styles.StatusBarInfo}>
        <span>Vitamin A</span>
        <span>{`${nutients.VITA_RAE} %`}</span>
      </div>
      <div className={Styles.StatusBarBase} >
        <div
          className={[Styles.StatusBar, Styles.Vitamins].join(" ")}
          style={{ width: `${checkIfOverH(nutients.VITA_RAE)}%` }}
        />
      </div>

      <div className={Styles.StatusBarInfo}>
        <span>Vitamin C</span>
        <span>{`${nutients.VITC} %`}</span>
      </div>
      <div className={Styles.StatusBarBase} >
        <div
          className={[Styles.StatusBar, Styles.Vitamins].join(" ")}
          style={{ width: `${checkIfOverH(nutients.VITC)}%`}}
        />
      </div>
    </div>
  );
};

export default MinorNutrients;
