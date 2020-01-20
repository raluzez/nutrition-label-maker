import React from 'react';
import NutritionLablel from '../../components/NutritionLabel/NutritionLabel';
import MainNutrients from './MainNutrients/MainNutrients';
import MinorNutrients from './MinorNutrients/MinorNutrients';

import Styles from "./Nutrients.module.css";

const Nutritions = (props) => {

    const dailyIntake = {
        ENERC_KCAL:2000,
        FAT:78,
        FASAT:20,
        FATRN:2, 
        CHOLE:300,
        NA:2300,
        CHOCDF:275,
        FIBTG:28,
        SUGAR:50,
        PROCNT:50,
        VITA_RAE:0.9,
        VITC:90,
        FE:18,
        CA:1300
    }
    const totalNutrients = props.product.totalNutrients
    const totalQuantity = props.product.quantity

    const arrayToObj = array => array.reduce((obj,item) => {
        obj[Object.keys(item)[0]] = Object.values(item)[0]
        return obj
    })

    const calculateLabelAmount = () => Object.keys(totalNutrients).map( key => {
        let amount = 0
        if (totalQuantity){
            amount = Math.round(totalNutrients[key].quantity*10000/totalQuantity)/100
        }
        return {[key] : amount}
    })

    const calculateDaylyPart = () => Object.keys(dailyIntake).map( key => {
        let amount = 0
        if ( nutrientsQuantityOnLabel[key] ){
            amount = ((nutrientsQuantityOnLabel[key]/dailyIntake[key])*100).toFixed(1)
        }
        return {[key] : amount}
    })

    const nutrientsQuantityOnLabel = arrayToObj(calculateLabelAmount())
    const nutrientsDailyPart = arrayToObj(calculateDaylyPart())

    return (
        <div className={Styles.NutrientsElementContainer}>
            <div className={Styles.NutrientsTitleLine}>
                <div>Nutrients per 100 g</div>
            </div>
            <div className={Styles.NutrientsContainer}>
                <MainNutrients nutrientsDailyPart={nutrientsDailyPart}/>
                <MinorNutrients nutrientsDailyPart={nutrientsDailyPart}/>
                <NutritionLablel product={props.product} nutrientsDailyPart={nutrientsDailyPart} nutrientsQuantityOnLabel={nutrientsQuantityOnLabel}/>
            </div>
        </div>
    );
}

export default Nutritions;
