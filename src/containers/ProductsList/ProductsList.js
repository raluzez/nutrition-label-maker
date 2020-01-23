import React, { useEffect } from "react";
import { connect } from "react-redux";
import Product from "../../components/Product/Product";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actions from "../../Store/actions";
import Styles from "./ProductsList.module.css";

const ProductsList = props => {

  const { onFetchProducts, token, userId } = props;

  useEffect(() => {
    onFetchProducts(token, userId);
  }, [onFetchProducts, token, userId]);

  let productsList = <Spinner />;
  if (!props.loading) {
    productsList = (
      <>
        {(props.products || []).map(product => (
          <Product
            productList={[product]}
            key={product.key}
            name={product.name}
            clicked={() => props.onClickedProduct(product)}
          />
        ))}
      </>
    );
  }
  return (
    <>
      <div className={Styles.AddProductButtonContainer}>
        <button onClick={() => props.onClickedProduct()}>Add Product</button>
      </div>
      <div className={Styles.ProductList}>{productsList}</div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    clickedProduct: state.productList.clickedProduct,
    products: state.productList.products,
    loading: state.productList.loading,
    token: state.auth.token,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickedProduct: product => dispatch(actions.productClicked(product)),
    onFetchProducts: (token, userId) => dispatch(actions.fetchProducts(token, userId)),
    onDeleteProduct: (productKey, token) => dispatch(actions.deleteProduct(productKey, token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
