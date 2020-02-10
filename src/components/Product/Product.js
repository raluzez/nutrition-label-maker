import React from "react";
import { useDispatch } from "react-redux";
import { deleteRecipe } from "../../Store/requests/recipe";
import { deleteProduct } from "../../Store/requests/productList";
import { productListToNutrientsHelper } from "../../Utility/Helpers";
import Styles from "./Product.module.css";

const Product = props => {
  const dispatch = useDispatch();
  const currentProduct = productListToNutrientsHelper(props.productList);
  const totalProductNutrients = currentProduct.totalNutrients;
  const total = totalProductNutrients.FAT.quantity + totalProductNutrients.CHOCDF.quantity + totalProductNutrients.PROCNT.quantity;
  const carbs = (totalProductNutrients.CHOCDF.quantity / total) * 100;
  const protein = (totalProductNutrients.PROCNT.quantity / total) * 100;
  const fat = (totalProductNutrients.FAT.quantity / total) * 100;
  const { name, icon, color } = props.product ? props.product : props.recipe;

  let onDelete = () => dispatch(deleteRecipe(props.recipe.key));

  if (props.product) {
    onDelete = () => dispatch(deleteProduct(props.product.key));
  }

  return (
    <div className={Styles.Container}>
      <div className={Styles.ProductAvatar} style={{ background: color }}>
        <i className={icon}></i>
      </div>
      <div className={Styles.ProductBody}>
        <div className={Styles.ProductName}>
          {name}
          <div className={Styles.MoreIcon}>
            <i className="material-icons" style={{ fontSize: "32px" }}>
              more_vert
            </i>
            <div className={Styles.MoreDropdown}>
              <div onClick={props.clicked}>
                <i className="material-icons">edit</i>
                <span>Edit</span>
              </div>
              <div onClick={() => props.print(props.productList)}>
                <i className="material-icons">print</i>
                <span>Print</span>
              </div>
              <div onClick={() => onDelete()}>
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
          <div className={Styles.StatusBarLegendCarbs}>{`${Math.round(
            carbs
          )}% CARBS`}</div>
          <div className={Styles.StatusBarLegendProtein}>{`${Math.round(
            protein
          )}% PROTEIN`}</div>
          <div className={Styles.StatusBarLegendFat}>{`${Math.round(
            fat
          )}% FAT`}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
