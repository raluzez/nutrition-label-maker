import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Product from "../../components/Product/Product";
import EditName from '../../components/EditName/EditName';
import Spinner from "../../components/UI/Spinner/Spinner";
import Modal from "../../components/UI/AddProductModal/Modal";
import { Portal } from '../../Utility/Portal';
import Styles from "./ProductsList.module.css";

const ProductsList = props => {
  const [ editNameModal, setEditNameModal] = useState(false)

  const history = useHistory();

  let productsList = <Spinner />;
  if (!props.loading) {
    productsList = (
      <>
        {(props.products || []).map(product => (
          <Product
            productList={[product]}
            key={product.key}
            product={product}
            clicked={() => setEditNameModal(product)}
          />
        ))}
      </>
    );
  }
  return (
    <>
      <Portal>
        {editNameModal &&
          <Modal closeModal={() => setEditNameModal(false)}>
            <EditName product={editNameModal} closeModal={() => setEditNameModal(false)}/>
          </Modal>}
      </Portal>
      <div className={Styles.AddProductButtonContainer}>
        <button onClick={() => history.push('/addProduct')}>Add Product</button>
      </div>
      <div className={Styles.ProductList}>{productsList}</div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    products: state.productList.products,
    loading: state.productList.loading,
    token: state.auth.token,
    userId: state.auth.userId
  };
};

export default connect(mapStateToProps)(ProductsList);
