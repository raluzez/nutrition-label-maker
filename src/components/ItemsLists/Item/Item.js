import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { editRecipeItemAmount, removeRecipeItem } from "../../../Store/requests/recipe";
import { removeSelectedItem } from "../../../Store/actions/productsList";
import { changeItemAmount } from "../../../Store/actions";
import Styles from "./Item.module.css";

const Item = props => {
  const [isChangeAmount, setIsChangeAmount] = useState(false);
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const { item } = props;

  let saveAmount = () => dispatch(editRecipeItemAmount(item.key, inputRef.current.value));
  let removeProduct = () => dispatch(removeRecipeItem(item.key));

  if (props.isCreateRecipe) {
    saveAmount = () => dispatch(changeItemAmount(inputRef.current.value, item));
    removeProduct = () => dispatch(removeSelectedItem(item.key, item));
  }

  return (
    <div className={Styles.ProductContainer} key={item.key}>
      <div className={Styles.ProductInformation}>
        <div>{item.name}</div>
        <div
          style={{
            display: isChangeAmount ? "none" : "block"
          }}
        >
          {item.quantity} {item.units}
        </div>
        <div
          style={{
            display: isChangeAmount ? "block" : "none"
          }}
          className={Styles.ChangeAmountInput}
        >
          <input
            type="text"
            placeholder={item.quantity}
            size="2"
            ref={inputRef}
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
            saveAmount();
          }}
          style={{
            display: isChangeAmount ? "block" : "none"
          }}
        >
          save
        </i>
        <i
          className="material-icons"
          title="Edit"
          onClick={() => {
            setIsChangeAmount(true);
            setTimeout(() => {
              inputRef.current.focus();
            }, 0); // ???
          }}
          style={{
            display: isChangeAmount ? "none" : "block"
          }}
        >
          edit
        </i>
        <i
          className="material-icons"
          title="Delete"
          onClick={() => removeProduct()}
        >
          clear
        </i>
      </div>
    </div>
  );
};

export default Item;
