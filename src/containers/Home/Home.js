import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Modal from "../../components/UI/AddProductModal/Modal";
import AddRecipeModal from "../../components/Recipe/AddRecipeModal/AddRecipeModal";
import AddProduct from "../../components/Product/AddProduct/AddProduct";
import ItemsList from "../../components/ItemsLists/ItemsList";
import Nutrients from "../../components/Nutrients/Nutrients";
import NutritionLabel from "../../components/NutritionLabel/NutritionLabel";
import Auth from "../Auth/Auth";
import * as actions from "../../Store/actions";
import Styles from "./Home.module.css";

const Home = props => {
  const [addProductModal, setAddProductModal] = useState(false);

  const { onFetchProducts, token, userId } = props;

  useEffect(() => {
    onFetchProducts(token, userId);
  }, [onFetchProducts, token, userId]);

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
      <Modal
        show={addProductModal}
        closeModal={() => setAddProductModal(false)}
        backdropZIndex='110'
      >
        <AddProduct
          products={props.products}
          selectedProducts={props.selectedProducts}
          closeModal={() => setAddProductModal(false)}
        />
      </Modal>
      <ItemsList
        saveRecipeClicked={() =>
          props.onSaveRecipeClicked(props.recipeAsProduct)
        }
        openAddProductModal={() => setAddProductModal(true)}
        items={props.selectedProducts}
        onChangeAmount={(amount, product) => props.onChangeAmount(amount, product)}
        onDeleteItem={(productId, product) => props.onDeleteItem(productId, product)}
      />
      <Nutrients product={props.recipeAsProduct} />
      {/* <Modal show={props.showModal}>
                    <AddRecipeModal
                        recipe={props.recipeAsProduct}
                        closeModal={props.onCloseModal}
                        addName={event => props.onAddRecipeName(event.target.value)}
                        recipeItems={props.selectedProducts}
                        saveRecipe={() => {
                            props.onSaveRecipe(props.recipeAsProduct, props.selectedProducts, props.token, props.userId); 
                            props.onCloseModal();
                            props.history.push("/recipes")}}/>
                </Modal>
                <ItemsList 
                    addProductClicked={() =>props.history.push("/productlist")} 
                    selectedProducts={props.selectedProducts}
                    saveRecipeClicked={() => props.onSaveRecipeClicked(props.recipeAsProduct)}/>
                <NutritionLabel product={props.recipeAsProduct}/> */}
    </>
  );
};
const mapStateToProps = state => {
  return {
    recipeAsProduct: state.productList.recipeNutrients,
    selectedProducts: state.productList.selectedProducts,
    showModal: state.productList.showModal,
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
      dispatch(actions.fetchProducts(token, userId)),
    onChangeAmount: (amount, product) =>
      dispatch(actions.changeItemAmount(amount, product)),
    onDeleteItem: (productId, product) =>
      dispatch(actions.productDeleted(productId, product))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
