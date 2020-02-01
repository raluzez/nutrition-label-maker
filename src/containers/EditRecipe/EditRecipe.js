import React, { useState } from 'react';
import { connect } from "react-redux";
import ItemsList from '../../components/ItemsLists/ItemsList';
import { Portal } from '../../Utility/Portal';
import Modal from "../../components/UI/AddProductModal/Modal";
import EditName from '../../components/EditName/EditName';
import AddProduct from "../../components/Product/AddProduct/AddProduct";
import Nutrients from '../../components/Nutrients/Nutrients';

const EditRecipe = (props) => {
    const [addProductModal, setAddProductModal] = useState(false);
    const [editNameModal, setEditNameModal] = useState(false)
    return (
        <>
            <Portal>
                {editNameModal &&
                    <Modal closeModal={() => setEditNameModal(false)}>
                        <EditName product={props.clickedRecipe} closeModal={() => setEditNameModal(false)} isRecipe={true}/>
                    </Modal>}
            </Portal>
            <ItemsList
                items={props.clickedRecipe.items || []}
                recipe={props.clickedRecipe}
                openAddProductModal={() => setAddProductModal(true)}
                openEditNameModal={()=> setEditNameModal(true)}
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

export default connect(mapStateToProps)(EditRecipe);
