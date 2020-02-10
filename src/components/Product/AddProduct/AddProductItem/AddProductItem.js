import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { productSelected } from "../../../../Store/actions/productsList";
import { addItemToRecipe } from "../../../../Store/requests/recipe";
import Styles from "./AddProductItem.module.css";

const AddProductItem = props => {
  const dispatch = useDispatch();
  const [productAmount, setProductAmount] = useState(null);
  const product = JSON.parse(JSON.stringify(props.product));

  const inputChangeHandler = e => {
    setProductAmount(e.target.value);
  };

  product.quantity = productAmount;

  let addProduct = () => dispatch(productSelected(product));

  if (props.isEdit) {
    addProduct = () => dispatch(addItemToRecipe(product));
  }

  return (
    <div className={Styles.Container}>
      <div
        className={Styles.ProductAvatar}
        style={{ background: props.product.color }}
      >
        <i className={props.product.icon}></i>
      </div>
      <div className={Styles.ProductBody}>
        <div className={Styles.ProductName}>{props.product.name}</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <input
            type="text"
            placeholder="Amount"
            onChange={inputChangeHandler}
          />
          <span className={Styles.InputUnits}>g</span>
          {productAmount && (
            <button
              className={Styles.AddProductButton}
              onClick={() => {
                props.closeModal();
                addProduct();
              }}
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddProductItem;
