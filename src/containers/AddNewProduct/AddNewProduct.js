import React, { useState } from 'react';
import AddNewProductNutrients from './AddNewProductNutrients/AddNewProductNutrients';
import { Portal } from '../../Utility/Portal';
import Modal from '../../components/UI/AddProductModal/Modal';
import EditName from '../../components/EditName/EditName'
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

    console.log(nutrients)

    const newProduct = {
        name: 'Name',
        icon: 'fas fa-concierge-bell',
        color: 'linear-gradient(315deg, rgb(214, 214, 213) 0%, rgba(179, 178, 178, 0) 50%), rgb(116, 115, 115)',
        quantity: 100,
        totalNutrients: nutrients
    }

    return (
        <>
            <Portal>
                {editNameModal &&
                    <Modal closeModal={() => setEditNameModal(false)}>
                        <EditName newProduct={true} product={newProduct} closeModal={() => {setEditNameModal(false); setNutrients(newNutrients)}}/>
                    </Modal>}
            </Portal>
            {isButtonDisabled
                ? <button className={Styles.AddProductButtonDisabled} disabled title='All fields must be filled'>Save</button>
                : <button className={Styles.AddProductButton} onClick={() => setEditNameModal(true)}>Save</button>}
            <div className={Styles.AddProductTitle}>
                <span>New Product</span>
            </div>
            <AddNewProductNutrients onchange={ nutrientsObj => {setNutrients(nutrientsObj); setIsButtonDisabled(disabledButtonHandler(nutrientsObj))}} nutrients={nutrients}/>
        </>
    );
}

export default AddProduct;
