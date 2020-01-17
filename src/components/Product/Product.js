import React from "react";
import Styles from "./Product.module.css";

const Product = props => {
  const total = props.fat + props.carbs + props.protein;
  const carbs = (props.carbs / total) * 100;
  const protein = (props.protein / total) * 100;
  const fat = (props.fat / total) * 100;

  return (
    <div
      className={Styles.Container}
      // title="Click to edit"
      // onClick={props.clicked}
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
              <div>
                <i class="material-icons">edit</i>
                <span>Edit</span>
              </div>
              <div>
                <i class="material-icons">print</i>
                <span>Print</span>
              </div>
              <div>
                <i class="material-icons">clear</i>
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
          {/* a lot of edge cases:
                    1) no carbs
                    2) no fat
                    3) less than 4% carbs
                    4) less than 4% fat */}
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
