import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Modal from "../../components/UI/AddProductModal/Modal";
import AddProduct from "../../components/Product/AddProduct/AddProduct";
import ItemsList from "../../components/ItemsLists/ItemsList";
import Nutrients from "../../components/Nutrients/Nutrients";
import SaveRecipe from '../../components/SaveRecipe/SaveRecipe';
import Auth from "../Auth/Auth";
import { productListToNutrientsHelper } from '../../Utility/Helpers';
import { Portal } from '../../Utility/Portal';
import * as actions from "../../Store/actions";

const Home = props => {
  const [addProductModal, setAddProductModal] = useState(false);
  const [saveRecipeModal, setSaveRecipeModal] = useState(false);

  const { onFetchProducts, token, userId } = props;

  useEffect(() => {
    onFetchProducts(token, userId);
  }, [onFetchProducts, token, userId]);

  const currentRecipe = productListToNutrientsHelper(props.selectedProducts)

  // currentRecipe.name = recipeName

  return (
    <>
      <Portal>
        {props.showAuthModal &&
          <Modal >
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
            <SaveRecipe selectedProducts={props.selectedProducts}/>
          </Modal>}
      </Portal>
      <ItemsList
        openAddProductModal={() => setAddProductModal(true)}
        openSaveRecipeModal={() => setSaveRecipeModal(true)}
        items={props.selectedProducts}
        isCreateRecipe={true}
      />
      <Nutrients productList={props.selectedProducts} />
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
