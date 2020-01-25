import React from "react";
import { connect } from "react-redux";
import AddProductItem from "./AddProductItem/AddProductItem";
import Styles from "./AddProduct.module.css";

const AddProduct = props => (
  <div>
    <div className={Styles.ProductsTitleLine}>
      <div>Products</div>
    </div>
    {props.products.map(
      product =>
        !props.selectedProducts.find(
          selectedProduct => selectedProduct.key === product.key
        ) && <AddProductItem product={product} closeModal={props.closeModal} isEdit={props.isEditRecipe} />
    )}
  </div>
);

const mapStateToProps = state => {
  return {
    products: state.productList.products
  };
};

export default connect(mapStateToProps)(AddProduct);
