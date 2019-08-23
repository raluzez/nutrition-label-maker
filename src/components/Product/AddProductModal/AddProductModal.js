import React from "react";
import AddProductNutritionLabel from "../../NutritionLabel/AddProductNutritionLabel/AddProductNutritionLabel";
import Styles from "./AddProductModal.module.css";

const addProductModal = (props) => (
    <>
        <i className={`fas fa-times ${Styles.CloseIcon}`} onClick={props.closeIconClicked}></i>
        <div className={Styles.Name}>Add New Product</div>
        <AddProductNutritionLabel/>
        <div>
            <button onClick={props.buttonClickced}>Add Product</button>
        </div>
        
    </> 
)

export default addProductModal;