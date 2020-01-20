import React from "react";
import AddProductItem from './AddProductItem/AddProductItem';
import Styles from "./AddProduct.module.css";

const AddProduct = (props) => (
    <div>
        <div className={Styles.ProductsTitleLine}>
            <div>Products</div>
        </div>
        {props.products.map( product => (
            <AddProductItem product={product}/>
        ))}
    </div>
)

export default AddProduct;