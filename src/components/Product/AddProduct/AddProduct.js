import React from "react";
import { useSelector } from "react-redux";
import AddProductItem from "./AddProductItem/AddProductItem";
import Styles from "./AddProduct.module.css";

const AddProduct = props => {
  const products = useSelector(state => state.productList.products);
  return (
    <div>
      <div className={Styles.ProductsTitleLine}>
        <div>Products</div>
      </div>
      {products.length !== props.selectedProducts.length ? (
        products.map(
          product =>
            !props.selectedProducts.find(
              selectedProduct => selectedProduct.key === product.key
            ) && (
              <AddProductItem
                product={product}
                closeModal={props.closeModal}
                isEdit={props.isEditRecipe}
              />
            )
        )
      ) : (
        <div className={Styles.NoProducts}>No products</div>
      )}
    </div>
  );
};

export default AddProduct;
