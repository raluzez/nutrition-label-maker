import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Styles from "./ItemsList.module.css";
import get from "lodash.get";
import * as actions from "../../Store/actions";

const Items = props => {
  const [isChangeAmount, setIsChangeAmount] = useState(false);

  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, props.items.length);
  }, [props.items]);

  const items = (
    <div className={Styles.ProductsListContainer}>
      {!props.items.length ? (
        <div className={Styles.NoProductsMessage}>No products yet! Add some</div>
      ) : (
        props.items.map((item, itemIndex) => (
          <div className={Styles.ProductContainer} key={item.key}>
            <div className={Styles.ProductInformation}>
              <div>{item.name}</div>
              <div
                style={{
                  display: isChangeAmount === item.key ? "none" : "block"
                }}
              >
                {item.quantity} {item.units}
              </div>
              <div
                style={{
                  display: isChangeAmount === item.key ? "block" : "none"
                }}
                className={Styles.ChangeAmountInput}
              >
                <input
                  type="text"
                  placeholder={item.quantity}
                  size="2"
                  ref={input => (inputRefs.current[itemIndex] = input)}
                />
                {` ${item.units}`}
              </div>
            </div>
            <div className={Styles.ProductIcons}>
              <i
                className="material-icons"
                title="Save"
                onClick={() => {
                  setIsChangeAmount(false);
                  props.onChangeAmount(
                    inputRefs.current[itemIndex].value,
                    item,
                    item.key
                  );
                }}
                style={{
                  display: isChangeAmount === item.key ? "block" : "none"
                }}
              >
                save
              </i>
              <i
                className="material-icons"
                title="Edit"
                onClick={() => {
                  setIsChangeAmount(item.key);
                  setTimeout(() => {
                    inputRefs.current[itemIndex].focus();
                  }, 0);
                }}
                style={{
                  display: isChangeAmount === item.key ? "none" : "block"
                }}
              >
                edit
              </i>
              <i
                className="material-icons"
                title="Delete"
                onClick={() => props.onDeleteItem(item.key, item)}
              >
                clear
              </i>
            </div>
          </div>
        ))
      )}
    </div>
  );

  return (
    <div className={Styles.ProductsContainer}>
      <div className={Styles.ProductsTitleLine}>
        <div>Random Recipe</div>
      </div>
      {items}
      <div className={Styles.AddButton} onClick={props.openAddProductModal}>
        Add
      </div>
    </div>
  );
};

export default Items;
