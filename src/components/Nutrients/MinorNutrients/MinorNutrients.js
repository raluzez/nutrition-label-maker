import React from "react";
import Styles from './MinorNutrients.module.css'

const MinorNutrients = (props) => {
  return (
    <div className={Styles.Nutrients}>
      <div className={Styles.StatusBarInfo}>
        <span>Calories</span>
        <span>{`${props.nutrientsDailyPart.ENERC_KCAL} %`}</span>
      </div>
      <div className={Styles.StatusBarBase} />
      <div
        className={[Styles.StatusBar, Styles.Calories].join(" ")}
        style={{ width: `${props.nutrientsDailyPart.ENERC_KCAL}%` }}
      />

      <div className={Styles.StatusBarInfo}>
        <span>Cholesterol</span>
        <span>{`${props.nutrientsDailyPart.CHOLE} %`}</span>
      </div>
      <div className={Styles.StatusBarBase} />
      <div
        className={[Styles.StatusBar, Styles.Fat].join(" ")}
        style={{ width: `${props.nutrientsDailyPart.CHOLE}%` }}
      />

      <div className={Styles.StatusBarInfo}>
        <span>Sodium</span>
        <span>{`${props.nutrientsDailyPart.NA} %`}</span>
      </div>
      <div className={Styles.StatusBarBase} />
      <div
        className={[Styles.StatusBar, Styles.Vitamins].join(" ")}
        style={{ width: `${props.nutrientsDailyPart.NA}%` }}
      />

      <div className={Styles.StatusBarInfo}>
        <span>Iron</span>
        <span>{`${props.nutrientsDailyPart.FE} %`}</span>
      </div>
      <div className={Styles.StatusBarBase} />
      <div
        className={[Styles.StatusBar, Styles.Vitamins].join(" ")}
        style={{ width: `${props.nutrientsDailyPart.FE}%` }}
      />

      <div className={Styles.StatusBarInfo}>
        <span>Calcium</span>
        <span>{`${props.nutrientsDailyPart.CA} %`}</span>
      </div>
      <div className={Styles.StatusBarBase} />
      <div
        className={[Styles.StatusBar, Styles.Vitamins].join(" ")}
        style={{ width: `${props.nutrientsDailyPart.CA}%` }}
      />

      <div className={Styles.StatusBarInfo}>
        <span>Vitamin A</span>
        <span>{`${props.nutrientsDailyPart.VITA_RAE} %`}</span>
      </div>
      <div className={Styles.StatusBarBase} />
      <div
        className={[Styles.StatusBar, Styles.Vitamins].join(" ")}
        style={{ width: `${props.nutrientsDailyPart.VITA_RAE}%` }}
      />

      <div className={Styles.StatusBarInfo}>
        <span>Vitamin C</span>
        <span>{`${props.nutrientsDailyPart.VITC} %`}</span>
      </div>
      <div className={Styles.StatusBarBase} />
      <div
        className={[Styles.StatusBar, Styles.Vitamins].join(" ")}
        style={{ width: `${props.nutrientsDailyPart.VITC}%`}}
      />
    </div>
  );
};

export default MinorNutrients;
