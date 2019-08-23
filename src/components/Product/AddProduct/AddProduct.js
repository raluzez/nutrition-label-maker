import React from "react";
import Styles from "./AddProduct.module.css";

const addProduct = (props) => (
    <div className={Styles.ProductList}>
        <div className={Styles.AddProduct}>
            <div>Add New Product</div>
            <div><i className={`fas fa-plus ${Styles.Plus}`}  onClick={props.clicked}></i></div>
        </div>
    </div>
)

export default addProduct;