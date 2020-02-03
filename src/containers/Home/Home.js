import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "../../components/UI/AddProductModal/Modal";
import AddProduct from "../../components/Product/AddProduct/AddProduct";
import ItemsList from "../../components/ItemsLists/ItemsList";
import Nutrients from "../../components/Nutrients/Nutrients";
import SaveRecipe from '../../components/SaveRecipe/SaveRecipe';
import Auth from "../Auth/Auth";
import { Portal } from '../../Utility/Portal';
import * as actions from "../../Store/actions";

const Home = props => {
  const [addProductModal, setAddProductModal] = useState(false);
  const [saveRecipeModal, setSaveRecipeModal] = useState(false);

  return (
    <>
      <Portal>
        {props.showAuthModal &&
          <Modal>
          <Auth
            switchForm={() => {
              props.onCloseSignUp();
              setTimeout(() => {
                props.onOpenSignUp();
              }, 450);
            }}
          />
        </Modal>}
      </Portal> 
      <Portal>
        {addProductModal &&
        <Modal closeModal={() => setAddProductModal(false)}>
          <AddProduct
            selectedProducts={props.selectedProducts}
            closeModal={() => setAddProductModal(false)}
          />
        </Modal>}
      </Portal>
      <Portal>
        {saveRecipeModal &&
          <Modal closeModal={() => setSaveRecipeModal(false)}>
            <SaveRecipe selectedProducts={props.selectedProducts} closeModal={() => setSaveRecipeModal(false)}/>
          </Modal>}
      </Portal>
      <ItemsList
        openAddProductModal={() => setAddProductModal(true)}
        openSaveRecipeModal={() => setSaveRecipeModal(true)}
        items={props.selectedProducts}
      />
      <Nutrients productList={props.selectedProducts} />
    </>
  );
};
const mapStateToProps = state => {
  return {
    selectedProducts: state.productList.selectedProducts,
    showAuthModal: state.auth.showAuthModal,
    products: state.productList.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCloseSignUp: () => dispatch(actions.closeSignUp()),
    onOpenSignUp: () => dispatch(actions.openSignUp())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
