import React, { useState } from "react";
import { useSelector } from "react-redux";
import ItemsList from "../../components/ItemsLists/ItemsList";
import { Portal } from "../../Utility/Portal";
import Modal from "../../components/UI/AddProductModal/Modal";
import SaveModal from "../../components/UI/EditNameModal/Modal";
import EditName from "../../components/EditName/EditName";
import AddProduct from "../../components/Product/AddProduct/AddProduct";
import Nutrients from "../../components/Nutrients/Nutrients";

const EditRecipe = () => {
  const [addProductModal, setAddProductModal] = useState(false);
  const [editNameModal, setEditNameModal] = useState(false);
  const clickedRecipe = useSelector(state => state.recipe.clickedRecipe);
  
  return (
    <>
      <Portal>
        {editNameModal && (
          <SaveModal closeModal={() => setEditNameModal(false)}>
            <EditName
              product={clickedRecipe}
              closeModal={() => setEditNameModal(false)}
              isRecipe={true}
            />
          </SaveModal>
        )}
      </Portal>
      <ItemsList
        items={clickedRecipe.items || []}
        recipe={clickedRecipe}
        openAddProductModal={() => setAddProductModal(true)}
        openEditNameModal={() => setEditNameModal(true)}
      />
      <Nutrients productList={clickedRecipe.items} />
      <Portal>
        {addProductModal && (
          <Modal closeModal={() => setAddProductModal(false)}>
            <AddProduct
              selectedProducts={clickedRecipe.items}
              closeModal={() => setAddProductModal(false)}
              isEditRecipe={true}
            />
          </Modal>
        )}
      </Portal>
    </>
  );
};

export default EditRecipe;
