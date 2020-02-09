import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../../components/UI/AddProductModal/Modal";
import SaveModal from "../../components/UI/EditNameModal/Modal";
import AddProduct from "../../components/Product/AddProduct/AddProduct";
import ItemsList from "../../components/ItemsLists/ItemsList";
import Nutrients from "../../components/Nutrients/Nutrients";
import SaveRecipe from "../../components/SaveRecipe/SaveRecipe";
import { fetchProducts } from "../../Store/requests/productList";
import { fetchRecipes } from "../../Store/requests/recipe";
import { Portal } from "../../Utility/Portal";

const Home = () => {
  const [addProductModal, setAddProductModal] = useState(false);
  const [saveRecipeModal, setSaveRecipeModal] = useState(false);
  const dispatch = useDispatch();
  const selectedProducts = useSelector(
    state => state.productList.selectedProducts
  );

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <>
      <Portal>
        {addProductModal && (
          <Modal closeModal={() => setAddProductModal(false)}>
            <AddProduct
              selectedProducts={selectedProducts}
              closeModal={() => setAddProductModal(false)}
            />
          </Modal>
        )}
      </Portal>
      <Portal>
        {saveRecipeModal && (
          <SaveModal closeModal={() => setSaveRecipeModal(false)}>
            <SaveRecipe
              selectedProducts={selectedProducts}
              closeModal={() => setSaveRecipeModal(false)}
            />
          </SaveModal>
        )}
      </Portal>
      <ItemsList
        openAddProductModal={() => setAddProductModal(true)}
        openSaveRecipeModal={() => setSaveRecipeModal(true)}
        items={selectedProducts}
      />
      <Nutrients productList={selectedProducts} />
    </>
  );
};

export default Home;
