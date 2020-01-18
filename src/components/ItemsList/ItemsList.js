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

  console.log(props);
  const items = (
    <div className={Styles.ProductsListContainer}>
      {get(props, "items").map((item, itemIndex) => (
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
                props.onChangeAmount(inputRefs.current[itemIndex].value, item)
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
                setTimeout(() => {inputRefs.current[itemIndex].focus()},0)
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
              onClick={() => props.onDeleteItem(item.name, item)}
            >
              clear
            </i>
          </div>
        </div>

        // <div key={item.name} className={Styles.ItemContainer}>
        //     <i className={`fas fa-minus ${Styles.Minus}`} onClick={()=>props.onDeleteItem(item.name, item)}></i>
        //     <p>{item.name}</p>
        //     <input className={Styles.Input} type="text" placeholder={item.quantity}
        //          onChange={event => props.onChangeAmount(event.target.value, item)}/>
        //     <p className={Styles.Units}> g </p>
        // </div>
      ))}
    </div>
  );

  return (
    <div className={Styles.ProductsContainer}>
      <div className={Styles.ProductsTitleLine}>
        <div>Random Recipe</div>
      </div>
      {items}
      <Link to={"/productlist"} className={Styles.AddButton}>
        Add
      </Link>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteItem: (productName, product) =>
      dispatch(actions.productDeleted(productName, product)),
    onChangeAmount: (amount, product) =>
      dispatch(actions.changeItemAmount(amount, product))
  };
};

const mapStateToProps = state => {
  return {
    items: state.productList.selectedProducts
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);

// import React from "react";
// import Styles from "./ItemsList.module.css";
// import Button from "../UI/Button/Button";
// import Items from "./Items/Items";

// const ItemsList = (props) => (
//     <Items items={props.selectedItems}/>
//             // <div className={Styles.ItemsList}>
//             //     <div style={{display:"flex", alignItems:"center", flexDirection: "row"}}>
//             //         <i className={`fas fa-plus ${Styles.Plus}`} onClick={props.addProductClicked}></i>
//             //         {props.selectedProducts.length > 0 ?
//             //             <Button
//             //                 style={{marginBottom: "3px", marginLeft:"1rem"}}
//             //                 classname="Success"
//             //                 onclick={props.saveRecipeClicked}>
//             //                     Save Recipe
//             //             </Button> :
//             //             null}
//             //     </div>
//             //     <span className={Styles.Line}/>
//             //     <Items items={props.selectedItems}/>
//             // </div>
//         )

// export default ItemsList;
