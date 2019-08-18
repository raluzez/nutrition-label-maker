import React from "react";
import Header from "./NutritionLabelComponents/Header/Header";
import Nutrients from "./NutritionLabelComponents/Nutrients/Nutrients";
import Vitamins from "./NutritionLabelComponents/Vitamins/Vitamins";
import Styles from "./NutritionLabel.module.css";
// import get from "lodash.get";

var get = require('lodash.get');

const nutritionLabel = (props) => {  
        
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

        const product = get(props,'product')

        const dailyIntakePercent = (amount, recomendation) => {
            return `${((amount/recomendation)*100).toFixed(1)} %`
        }

        const fixToTwo = (obj, path, def) => {
            return Math.round(get(obj, path, def)*100)/100
            
        }

        return(
            <div className={Styles.Container}>
                <Header servingSize={fixToTwo(product,"quantity.toFixed(1)",100)}/>
                <Nutrients calories={fixToTwo(product,"totalNutrients.ENERC_KCAL.quantity",0)}>
                    <ul>
                        <li>
                            <div className={Styles.Float}>{dailyIntakePercent(fixToTwo(product, 'totalNutrients.FAT.quantity', 0),get(dailyIntake, 'FAT'))}</div>
                            <b className={Styles.Attribute}>Total Fat</b>  {fixToTwo(product, 'totalNutrients.FAT.quantity', 0)} g
                            <ul>
                                <div className={Styles.Float}>{dailyIntakePercent(fixToTwo(product, 'totalNutrients.FASAT.quantity', 0),get(dailyIntake, 'FASAT'))}</div>
                                <li>Saturated Fat  {fixToTwo(product, 'totalNutrients.FASAT.quantity', 0)} g</li>
                                <div className={Styles.Float}>{dailyIntakePercent(fixToTwo(product, 'totalNutrients.FATRN.quantity', 0),get(dailyIntake, 'FATRN'))}</div>
                                <li>Trans Fat  {fixToTwo(product, 'totalNutrients.FATRN.quantity', 0)} g</li>
                            </ul>
                        </li>
                        <li>
                            <div className={Styles.Float}>{dailyIntakePercent(fixToTwo(product, 'totalNutrients.CHOLE.quantity', 0),get(dailyIntake, 'CHOLE'))}</div>
                            <b className={Styles.Attribute}>Cholesterol</b>  {fixToTwo(product, 'totalNutrients.CHOLE.quantity', 0)}mg
                        </li>
                        <li>
                            <div className={Styles.Float}>{dailyIntakePercent(fixToTwo(product, 'totalNutrients.NA.quantity', 0),get(dailyIntake, 'NA'))}</div>
                            <b className={Styles.Attribute}>Sodium</b>  {fixToTwo(product, 'totalNutrients.NA.quantity', 0)} mg
                        </li>
                        <li>
                            <div className={Styles.Float}>{dailyIntakePercent(fixToTwo(product, 'totalNutrients.CHOCDF.quantity', 0),get(dailyIntake, 'CHOCDF'))}</div>
                            <b className={Styles.Attribute}>Total Carbohydrates</b>  {fixToTwo(product, 'totalNutrients.CHOCDF.quantity', 0)} g
                            <ul>
                                <div className={Styles.Float}>{dailyIntakePercent(fixToTwo(product, 'totalNutrients.FIBTG.quantity', 0),get(dailyIntake, 'FIBTG'))}</div>
                                <li>Dietary Fiber  {fixToTwo(product, 'totalNutrients.FIBTG.quantity', 0)} g</li>
                                <div className={Styles.Float}>{dailyIntakePercent(fixToTwo(product, 'totalNutrients.SUGAR.quantity', 0),get(dailyIntake, 'SUGAR'))}</div>
                                <li>Sugars  {fixToTwo(product, 'totalNutrients.SUGAR.quantity', 0)} g</li>
                            </ul>
                        </li>
                        <li>
                            <div className={Styles.Float}>{dailyIntakePercent(fixToTwo(product, 'totalNutrients.PROCNT.quantity', 0),get(dailyIntake, 'PROCNT'))}</div>
                            <b className={Styles.Attribute}>Protein</b>  {fixToTwo(product, 'totalNutrients.PROCNT.quantity', 0)} g
                        </li>
                    </ul>
                </Nutrients>
                <Vitamins>
                    <ul>
                        <li>
                            <div className={Styles.Float}>{dailyIntakePercent(fixToTwo(product, 'totalNutrients.VITA_RAE.quantity', 0),get(dailyIntake, 'VITA_RAE'))}</div>
                            <b className={Styles.Attribute}>Vitamin A</b>  {fixToTwo(product, 'totalNutrients.VITA_RAE.quantity', 0)} mg
                        </li>
                        <li>
                            <div className={Styles.Float}>{dailyIntakePercent(fixToTwo(product, 'totalNutrients.VITC.quantity', 0),get(dailyIntake, 'VITC'))}</div>
                            <b className={Styles.Attribute}>Vitamin C</b>  {fixToTwo(product, 'totalNutrients.VITC.quantity', 0)} mg
                        </li>
                        <li>
                            <div className={Styles.Float}>{dailyIntakePercent(fixToTwo(product, 'totalNutrients.FE.quantity', 0),get(dailyIntake, 'FE'))}</div>
                            <b className={Styles.Attribute}>Iron</b>  {fixToTwo(product, 'totalNutrients.FE.quantity', 0)} mg
                        </li>
                        <li>
                            <div className={Styles.Float}>{dailyIntakePercent(fixToTwo(product, 'totalNutrients.CA.quantity', 0),get(dailyIntake, 'CA'))}</div>
                            <b className={Styles.Attribute}>Calcium</b>  {fixToTwo(product, 'totalNutrients.CA.quantity', 0)} mg
                        </li>
                    </ul>
                </Vitamins>
            </div>
      )
}

export default nutritionLabel;