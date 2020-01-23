import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Modal from "../../components/UI/AddProductModal/Modal";
import AddProduct from "../../components/Product/AddProduct/AddProduct";
import ItemsList from "../../components/ItemsLists/ItemsList";
import Nutrients from "../../components/Nutrients/Nutrients";
import Auth from "../Auth/Auth";
import { productListToNutrientsHelper } from '../../Utility/Helpers';
import { newNutrientsObject } from '../../Utility/Consts';
import { Portal } from '../../Utility/Portal';
import * as actions from "../../Store/actions";

const Home = props => {
  const [addProductModal, setAddProductModal] = useState(false);
  const [recipieName, setRecipieName] = useState('')

  const { onFetchProducts, token, userId } = props;

  useEffect(() => {
    onFetchProducts(token, userId);
  }, [onFetchProducts, token, userId]);

  const currentRecipe = productListToNutrientsHelper(props.selectedProducts, newNutrientsObject)

  currentRecipe.name = recipieName

  return (
    <>
      <Modal show={props.showAuthModal}>
        <Auth
          switchForm={() => {
            props.onCloseSignUp();
            setTimeout(() => {
              props.onOpenSignUp();
            }, 450);
          }}
        />
      </Modal>
      
      <ItemsList
        openAddProductModal={() => setAddProductModal(true)}
        items={props.selectedProducts}
        isCreateRecipe={true}
      />
      <Nutrients product={currentRecipe} />
      <Portal>
        <Modal
          show={addProductModal}
          closeModal={() => setAddProductModal(false)}
          backdropZIndex="110"
        >
          <AddProduct
            products={props.products}
            selectedProducts={props.selectedProducts}
            closeModal={() => setAddProductModal(false)}
          />
        </Modal>
      </Portal>
    </>
  );
};
const mapStateToProps = state => {
  return {
    selectedProducts: state.productList.selectedProducts,
    showAuthModal: state.auth.showAuthModal,
    token: state.auth.token,
    userId: state.auth.userId,
    products: state.productList.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSaveRecipeClicked: product => dispatch(actions.productClicked(product)),
    onCloseModal: () => dispatch(actions.closeModal()),
    onAddRecipeName: recipeName => dispatch(actions.addRecipeName(recipeName)),
    onSaveRecipe: (recipe, items, token, userId) =>
      dispatch(actions.saveRecipe(recipe, items, token, userId)),
    onCloseSignUp: () => dispatch(actions.closeSignUp()),
    onOpenSignUp: () => dispatch(actions.openSignUp()),
    onFetchProducts: (token, userId) =>
      dispatch(actions.fetchProducts(token, userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
