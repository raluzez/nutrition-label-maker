import React from "react";
import Aux from "../../../hoc/Aux/Aux";
import NutritionLabel from "../../NutritionLabel/NutritionLabel";
import Styles from "./ProductModal.module.css";

const productModal = (props) => (
    <Aux>
        <i className={`fas fa-times ${Styles.CloseIcon}`} onClick={props.closeIconClicked}></i>
        <div className={Styles.Name}>{props.name}</div>
        <NutritionLabel style={{margin:"32px"}}/>
        <div>
            <button onClick={props.buttonClickced}>Select Product</button>
            <input type="text" placeholder="0" className={Styles.Input} value={props.inputValue} onChange={props.inputChanged}/> g
        </div>
        
    </Aux> 
)

export default productModal;