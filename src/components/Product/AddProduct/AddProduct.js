import React from "react";
import Styles from "./AddProduct.module.css";

const addProduct = (props) => (
        <div className={Styles.AddProduct}>
            <div>{props.name}</div>
            <div><i className={`fas fa-plus ${Styles.Plus}`}  onClick={props.clicked}></i></div>
        </div>
)

export default addProduct;