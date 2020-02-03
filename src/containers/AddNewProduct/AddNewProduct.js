import React, { useState } from 'react';
import AddNewProductNutrients from './AddNewProductNutrients/AddNewProductNutrients';
import { Portal } from '../../Utility/Portal';
import Modal from '../../components/UI/AddProductModal/Modal';
import SaveProduct from '../../components/SaveRecipe/SaveRecipe';
import { newNutrientsObject } from '../../Utility/Consts';
import Styles from './AddNewProduct.module.css';

const AddProduct = () => {
    const newNutrients = JSON.parse(JSON.stringify(newNutrientsObject))
    const [ nutrients, setNutrients ] = useState(newNutrients)
    const [ isButtonDisabled, setIsButtonDisabled ] = useState(true)
    const [ editNameModal, setEditNameModal ] = useState(false)

    const disabledButtonHandler = nutrients => {
        return !!Object.keys(nutrients).find( item => nutrients[item].quantity === '')
    }

    return (
        <>
            <Portal>
                {editNameModal &&
                    <Modal closeModal={() => setEditNameModal(false)}>
                        <SaveProduct isNewProduct={true} nutrients={nutrients} closeModal={() => {setEditNameModal(false); setNutrients(newNutrients)}}/>
                    </Modal>}
            </Portal>
            {isButtonDisabled
                ? <button className={Styles.AddProductButtonDisabled} disabled title='All fields must be filled'>Save</button>
                : <button className={Styles.AddProductButton} onClick={() => setEditNameModal(true)}>Save</button>}
            <div className={Styles.AddProductTitle}>
                <span>Nutrients per 100g</span>
            </div>
            <AddNewProductNutrients onchange={ nutrientsObj => {setNutrients(nutrientsObj); setIsButtonDisabled(disabledButtonHandler(nutrientsObj))}} nutrients={nutrients}/>
        </>
    );
}

export default AddProduct;
