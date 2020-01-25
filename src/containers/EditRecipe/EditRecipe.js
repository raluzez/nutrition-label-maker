import React, { useState } from 'react';
import { connect } from "react-redux";
import ItemsList from '../../components/ItemsLists/ItemsList';
import { Portal } from '../../Utility/Portal';
import Modal from "../../components/UI/AddProductModal/Modal";
import AddProduct from "../../components/Product/AddProduct/AddProduct";
import Nutrients from '../../components/Nutrients/Nutrients';

const EditRecipe = (props) => {
    const [addProductModal, setAddProductModal] = useState(false);
    return (
        <>
            <ItemsList
                items={props.clickedRecipe.items || []}
                name={props.clickedRecipe.name}
                openAddProductModal={() => setAddProductModal(true)}
            />
            <Nutrients productList={props.clickedRecipe.items}/>
            <Portal>
                {addProductModal &&
                <Modal closeModal={() => setAddProductModal(false)}>
                <AddProduct
                    selectedProducts={props.clickedRecipe.items}
                    closeModal={() => setAddProductModal(false)}
                    isEditRecipe={true}
                />
                </Modal>}
            </Portal>
        </>
    );
}

const mapStateToProps = state => {
    return {
      clickedRecipe: state.recipe.clickedRecipe,
      products: state.productList.products
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
    //   onClickedRecipe: recipe => dispatch(actions.recipeClicked(recipe))
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(EditRecipe);
