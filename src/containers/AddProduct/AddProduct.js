import React, { useState } from 'react';
import AddProductNutrients from './AddProductNutrients/AddProductNutrients';
import { newNutrientsObject } from '../../Utility/Consts';
import Styles from './AddProduct.module.css';

const AddProduct = () => {
    const newNutrients = JSON.parse(JSON.stringify(newNutrientsObject))
    const [ nutrients, setNutrients ] = useState(newNutrients)
    const [ isButtonDisabled, setIsButtonDisabled ] = useState(true)

    const disabledButtonHandler = nutrients => {
        return !!Object.keys(nutrients).find( item => nutrients[item].quantity === '')
    }

    return (
        <>
            {isButtonDisabled
                ? <button className={Styles.AddProductButtonDisabled} disabled title='All fields must be filled'>Save</button>
                : <button className={Styles.AddProductButton}>Save</button>}
            <AddProductNutrients onchange={ nutrientsObj => {setNutrients(nutrientsObj); setIsButtonDisabled(disabledButtonHandler(nutrientsObj))}} nutrients={nutrients}/>
        </>
    );
}

export default AddProduct;
