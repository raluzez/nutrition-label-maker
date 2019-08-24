import React from "react";
import NutritionLabel from "../../NutritionLabel/NutritionLabel";
import Styles from "./ProductModal.module.css";
import Button from "../../UI/Button/Button";

const productModal = (props) => (
    <>
        <i className={`fas fa-times ${Styles.CloseIcon}`} onClick={props.closeIconClicked}></i>
        <div className={Styles.Name}>{props.product.name}</div>
        <NutritionLabel product={props.product}/>
        <div>
            <Button onclick={props.buttonClickced} classname="Success">Select Product</Button>
            <input type="text" placeholder="0" className={Styles.Input} value={props.inputValue} onChange={props.inputChanged}/> g
        </div>
        
    </> 
)

export default productModal;