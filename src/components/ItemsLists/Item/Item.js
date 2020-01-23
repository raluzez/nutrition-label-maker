import React, { useState, useRef } from 'react';
import { connect } from "react-redux";
import * as actions from "../../../Store/actions";
import Styles from './Item.module.css';

const Item = (props) => {
    const [isChangeAmount, setIsChangeAmount] = useState(false);

    const inputRef = useRef(null);

    const item = props.item

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
                  props.onChangeAmount(
                    inputRef.current.value,
                    item
                  );
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
                    setTimeout(()=>{inputRef.current.focus()},0); // ???
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
                onClick={() => props.onDeleteItem(item.key, item)}
              >
                clear
              </i>
            </div>
          </div>
    );
}
  
const mapDispatchToProps = dispatch => {
    return {
      onChangeAmount: (amount, product) =>
        dispatch(actions.changeItemAmount(amount, product)),
      onDeleteItem: (productId, product) =>
        dispatch(actions.productDeleted(productId, product))
    };
  };

export default connect(null, mapDispatchToProps)(Item);
