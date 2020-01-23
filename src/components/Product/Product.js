import React from "react";
import { productListToNutrientsHelper } from '../../Utility/Helpers';
import Styles from "./Product.module.css";

const Product = props => {
  const currentProduct = productListToNutrientsHelper(props.productList)
  const totalProductNutrients = currentProduct.totalNutrients
  const total = totalProductNutrients.FAT.quantity + totalProductNutrients.CHOCDF.quantity + totalProductNutrients.PROCNT.quantity;
  const carbs = (totalProductNutrients.CHOCDF.quantity / total) * 100;
  const protein = (totalProductNutrients.PROCNT.quantity / total) * 100;
  const fat = (totalProductNutrients.FAT.quantity / total) * 100;

  return (
    <div
      className={Styles.Container}
    >
      <div className={Styles.ProductAvatar}>
        <i className="fas fa-birthday-cake"></i>
      </div>
      <div className={Styles.ProductBody}>
        <div className={Styles.ProductName}>
          {props.name}
          <div className={Styles.MoreIcon}>
            <i className="material-icons" style={{ fontSize: "32px" }}>
              more_vert
            </i>
            <div className={Styles.MoreDropdown}>
              <div onClick={props.clicked}>
                <i className="material-icons">edit</i>
                <span>Edit</span>
              </div>
              <div>
                <i className="material-icons">print</i>
                <span>Print</span>
              </div>
              <div>
                <i className="material-icons">clear</i>
                <span>Delete</span>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.StatusBar}>
          <div
            className={Styles.StatusCarbsBar}
            style={{ width: `${carbs}%` }}
          ></div>
          <div
            className={Styles.StatusProteinBar}
            style={{ width: `${protein}%`, left: `${carbs}%` }}
          ></div>
          <div
            className={Styles.StatusFatBar}
            style={{ width: `${fat}%`, left: `${carbs + protein}%` }}
          ></div>
        </div>
        <div className={Styles.StatusBarLegend}>
          <div style={{ color: "#FDB170" }}>{`${Math.round(
            carbs
          )}% CARBS`}</div>
          <div style={{ color: "#85C5E4", marginLeft: "1em" }}>{`${Math.round(
            protein
          )}% PROTEIN`}</div>
          <div style={{ color: "#F57899", marginLeft: "1em" }}>{`${Math.round(
            fat
          )}% FAT`}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
