import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Product from "../../components/Product/Product";
import Modal from "../../components/UI/Modal/Modal";
import ProductModal from "../../components/Product/ProductModal/ProductModal";
import AddProductModal from "../../components/Product/AddProductModal/AddProductModal";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actions from "../../Store/actions";
import Styles from "./ProductsList.module.css";

const ProductsList = props => {

  const [amountInput, setAmountInput] = useState("");

  const { onFetchProducts, token, userId } = props;

  useEffect(() => {
    onFetchProducts(token, userId);
  }, [onFetchProducts, token, userId]);

  const productSelectedHandler = () => {
    props.onSelectProduct(props.clickedProduct, amountInput);
    props.history.push("/");
  };

  let productsList = <Spinner />;
  if (!props.loading) {
    productsList = (
      <>
        {(props.products || []).map(product => (
          <Product
            key={product.name}
            name={product.name}
            fat={product.totalNutrients.FAT.quantity}
            carbs={product.totalNutrients.CHOCDF.quantity}
            protein={product.totalNutrients.PROCNT.quantity}
            clicked={() => props.onClickedProduct(product)}
          />
        ))}
      </>
    );
  }
  return (
    <>
      <Modal show={props.showModal}>
        {props.clickedProduct ? (
          <ProductModal
            product={props.clickedProduct}
            buttonClickced={productSelectedHandler}
            deleteProduct={() => {
              props.onDeleteProduct(props.clickedProduct.key, props.token);
              props.onCloseModal();
            }}
            inputValue={amountInput}
            inputChanged={event => setAmountInput(event.target.value)}
            closeIconClicked={() => props.onCloseModal()}
          />
        ) : (
          <AddProductModal closeIconClicked={() => props.onCloseModal()} />
        )}
      </Modal>
      <div className={Styles.AddProductButtonContainer}>
        <button onClick={() => props.onClickedProduct()}>Add Product</button>
      </div>
      <div className={Styles.ProductList}>{productsList}</div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    showModal: state.productList.showModal,
    clickedProduct: state.productList.clickedProduct,
    selectedProducts: state.productList.selectedProducts,
    products: state.productList.products,
    loading: state.productList.loading,
    token: state.auth.token,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectProduct: (product, amount) => dispatch(actions.productSelected(product, amount)),
    onClickedProduct: product => dispatch(actions.productClicked(product)),
    onCloseModal: () => dispatch(actions.closeModal()),
    onFetchProducts: (token, userId) => dispatch(actions.fetchProducts(token, userId)),
    onDeleteProduct: (productKey, token) => dispatch(actions.deleteProduct(productKey, token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
