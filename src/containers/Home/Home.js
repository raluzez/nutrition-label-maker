import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Modal from "../../components/UI/AddProductModal/Modal";
import SaveModal from '../../components/UI/EditNameModal/Modal';
import AddProduct from "../../components/Product/AddProduct/AddProduct";
import ItemsList from "../../components/ItemsLists/ItemsList";
import Nutrients from "../../components/Nutrients/Nutrients";
import SaveRecipe from '../../components/SaveRecipe/SaveRecipe';
import { fetchProducts } from '../../Store/requests/productList';
import { fetchRecipes } from '../../Store/requests/recipe';
import { Portal } from '../../Utility/Portal';


const Home = props => {
  const [addProductModal, setAddProductModal] = useState(false);
  const [saveRecipeModal, setSaveRecipeModal] = useState(false);
  const { onFetchProducts, onFetchRecipes } = props

  useEffect(() => {
    onFetchProducts();
    onFetchRecipes()
  }, [onFetchProducts, onFetchRecipes])

  return (
    <>
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
          <SaveModal closeModal={() => setSaveRecipeModal(false)}>
            <SaveRecipe selectedProducts={props.selectedProducts} closeModal={() => setSaveRecipeModal(false)}/>
          </SaveModal>}
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
    onFetchProducts: () => dispatch(fetchProducts()),
    onFetchRecipes: () => dispatch(fetchRecipes())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
