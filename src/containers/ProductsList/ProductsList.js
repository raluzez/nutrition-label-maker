import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Product from "../../components/Product/Product";
import EditName from '../../components/EditName/EditName';
import Modal from "../../components/UI/EditNameModal/Modal";
import Nutrients from '../../components/Nutrients/Nutrients';
import { Portal } from '../../Utility/Portal';
import { changeBackground } from '../../Utility/Helpers';
import Styles from "./ProductsList.module.css";

const ProductsList = props => {
  const [ editNameModal, setEditNameModal] = useState(false)
  const [ printNutritionFacts, setPrintNutritionFacts ] = useState(null)
  const history = useHistory();

  useEffect(() => {
    printNutritionFacts && window.print()
    return () => setPrintNutritionFacts(null)
  }, [ printNutritionFacts, setPrintNutritionFacts ]);

  let productsList = 
      <>
        {(props.products || []).map(product => (
          <Product
            productList={[product]}
            key={product.key}
            product={product}
            clicked={() => setEditNameModal(product)}
            print={(currentProduct) => setPrintNutritionFacts(currentProduct)}
          />
        ))}
      </>

  return (
    <>
      <Portal>
        {printNutritionFacts && 
        <Nutrients productList={printNutritionFacts}/>}
      </Portal>
      <Portal>
        {editNameModal &&
          <Modal closeModal={() => setEditNameModal(false)}>
            <EditName product={editNameModal} closeModal={() => setEditNameModal(false)}/>
          </Modal>}
      </Portal>
      <div className={Styles.AddProductButtonContainer}>
        <button onClick={() => {history.push('/addProduct'); changeBackground('white')}}>Add Product</button>
      </div>
      <div className={Styles.ProductList}>{productsList}</div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    products: state.productList.products
  };
};

export default connect(mapStateToProps)(ProductsList);
