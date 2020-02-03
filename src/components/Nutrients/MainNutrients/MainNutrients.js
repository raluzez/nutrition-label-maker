import React from "react";
import Styles from "./MainNutrients.module.css";

const MainNutrients = props => {
  const nutients = props.nutrientsDailyPart;
  const quantity = props.nutrientsQuantityOnLabel;

  return (
    <div className={Styles.Nutrients}>
      <div className={Styles.StatusBarInfo}>
        <span>Total Fat</span>
        <span>{`${nutients.FAT} %`}</span>
      </div>
      <div
        className={Styles.StatusBarBase}
        title={`${quantity.FAT} g in 100g of the product`}
      >
        <div
          className={[Styles.StatusBar, Styles.Fat].join(" ")}
          style={{ width: `${nutients.FAT}%` }}
        />
      </div>

      <div className={Styles.StatusBarInfo}>
        <span>Saturated Fat</span>
        <span>{`${nutients.FASAT} %`}</span>
      </div>
      <div
        className={Styles.StatusBarBase}
        title={`${quantity.FASAT} g in 100g of the product`}
      >
        <div
          className={[Styles.StatusBar, Styles.Fat].join(" ")}
          style={{ width: `${nutients.FASAT}%` }}
        />
      </div>
      <div className={Styles.StatusBarInfo}>
        <span>Trans Fat</span>
        <span>{`${nutients.FATRN} %`}</span>
      </div>
      <div
        className={Styles.StatusBarBase}
        title={`${quantity.FATRN} g in 100g of the product`}
      >
        <div
          className={[Styles.StatusBar, Styles.Fat].join(" ")}
          style={{ width: `${nutients.FATRN}%` }}
        />
      </div>

      <div className={Styles.StatusBarInfo}>
        <span>Total Carbs</span>
        <span>{`${nutients.CHOCDF} %`}</span>
      </div>
      <div
        className={Styles.StatusBarBase}
        title={`${quantity.CHOCDF} g in 100g of the product`}
      >
        <div
          className={[Styles.StatusBar, Styles.Carbs].join(" ")}
          style={{ width: `${nutients.CHOCDF}%` }}
        />
      </div>

      <div className={Styles.StatusBarInfo}>
        <span>Dietry Fiber</span>
        <span>{`${nutients.FIBTG} %`}</span>
      </div>
      <div
        className={Styles.StatusBarBase}
        title={`${quantity.FIBTG} g in 100g of the product`}
      >
        <div
          className={[Styles.StatusBar, Styles.Carbs].join(" ")}
          style={{ width: `${nutients.FIBTG}%` }}
        />
      </div>

      <div className={Styles.StatusBarInfo}>
        <span>Sugars</span>
        <span>{`${nutients.SUGAR} %`}</span>
      </div>
      <div
        className={Styles.StatusBarBase}
        title={`${quantity.SUGAR} g in 100g of the product`}
      >
        <div
          className={[Styles.StatusBar, Styles.Carbs].join(" ")}
          style={{ width: `${nutients.SUGAR}%` }}
        />
      </div>

      <div className={Styles.StatusBarInfo}>
        <span>Protein</span>
        <span>{`${nutients.PROCNT} %`}</span>
      </div>
      <div
        className={Styles.StatusBarBase}
        title={`${quantity.PROCNT} g in 100g of the product`}
      >
        <div
          className={[Styles.StatusBar, Styles.Protein].join(" ")}
          style={{ width: `${nutients.PROCNT}%` }}
        />
      </div>
    </div>
  );
};

export default MainNutrients;
