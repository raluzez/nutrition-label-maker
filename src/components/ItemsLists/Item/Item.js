import React, { useState, useRef } from 'react';
import { connect } from "react-redux";
import { editRecipeItemAmount, removeRecipeItem } from '../../../Store/requests/recipe';
import { removeSelectedItem } from '../../../Store/actions/productsList';
import * as actions from "../../../Store/actions";
import Styles from './Item.module.css';

const Item = (props) => {
    const [isChangeAmount, setIsChangeAmount] = useState(false);

    const inputRef = useRef(null);

    const item = props.item

    let onSaveAmount = () => props.onEditRecipeItemAmount(props.item, inputRef.current.value)
    let onRemoveProduct = () => props.onRemoveRecipeItem(item.key)

    if(props.isCreateRecipe){
      onSaveAmount = () => props.onChangeAmount(inputRef.current.value, item)
      onRemoveProduct = () => props.onRemoveSelectedItem(item.key, item)
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
                  onSaveAmount();
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
                onClick={() => onRemoveProduct()}
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
      onEditRecipeItemAmount: (item, amount) => dispatch(editRecipeItemAmount(item, amount)),
      onRemoveRecipeItem: (itemKey) => dispatch(removeRecipeItem(itemKey)),
      onRemoveSelectedItem: (itemKey) => dispatch(removeSelectedItem(itemKey))
    };
  };

export default connect(null, mapDispatchToProps)(Item);
