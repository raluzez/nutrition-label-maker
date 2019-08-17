import React from "react";
import Header from "./NutritionLabelComponents/Header/Header";
import Nutrients from "./NutritionLabelComponents/Nutrients/Nutrients";
import Vitamins from "./NutritionLabelComponents/Vitamins/Vitamins";
import Styles from "./NutritionLabel.module.css";

const nutritionLabel = (props) => {
    
        const productDataHandler = (obj, data) => {
            let ret
            if (obj) {
                if(obj.data) {
                    ret = data
                } else ret = 0
            } else return ret=0
            return ret
        }
            
        

        return(
            <div className={Styles.Container}>
                <Header servingSize={props.product ? props.product.quantity : 100}/>
                <Nutrients calories={props.product ? props.product.totalNutrients.ENERC_KCAL.quantity : 0}>
                    <ul>
                        <li>
                            <div className={Styles.Float}>10%</div>
                            <b className={Styles.Attribute}>Total Fat</b> {props.product ? props.product.totalNutrients.FAT.quantity : 0} g
                            <ul>
                                <div className={Styles.Float}>10%</div>
                                <li>Saturated Fat {props.product ? props.product.totalNutrients.FASAT.quantity : 0}g</li>
                                <div className={Styles.Float}>10%</div>
                                <li>Trans Fat {props.product ? props.product.totalNutrients.FATRN.quantity : 0}</li>
                            </ul>
                        </li>
                        <li>
                            <div className={Styles.Float}>10%</div>
                            <b className={Styles.Attribute}>Cholesterol</b> {props.product ? props.product.totalNutrients.CHOLE.quantity : 0}mg
                        </li>
                        <li>
                            <div className={Styles.Float}>10%</div>
                            <b className={Styles.Attribute}>Sodium</b> {props.product ? props.product.totalNutrients.NA.quantity : 0}mg
                        </li>
                        <li>
                            <div className={Styles.Float}>10%</div>
                            <b className={Styles.Attribute}>Total Carbohydrates</b> {props.product ? props.product.totalNutrients.CHOCDF.quantity : 0}g
                            <ul>
                                <div className={Styles.Float}>10%</div>
                                <li>Dietary Fiber {props.product ? props.product.totalNutrients.FIBTG.quantity : 0}g</li>
                                <div className={Styles.Float}>10%</div>
                                <li>Sugars {props.product ? props.product.totalNutrients.SUGAR.quantity : 0}g</li>
                            </ul>
                        </li>
                        <li>
                            <div className={Styles.Float}>10%</div>
                            <b className={Styles.Attribute}>Protein</b> {props.product ? props.product.totalNutrients.PROCNT.quantity : 0}g
                        </li>
                    </ul>
                </Nutrients>
                <Vitamins>
                    <ul>
                        <li>
                            <div className={Styles.Float}>10%</div>
                            <b className={Styles.Attribute}>Vitamin A</b> {props.product ? props.product.totalNutrients.VITA_RAE.quantity : 0}mg
                        </li>
                        <li>
                            <div className={Styles.Float}>10%</div>
                            <b className={Styles.Attribute}>Vitamin C</b> {props.product ? props.product.totalNutrients.VITC.quantity : 0}mg
                        </li>
                        <li>
                            <div className={Styles.Float}>10%</div>
                            <b className={Styles.Attribute}>Iron</b> {props.product ? props.product.totalNutrients.FE.quantity : 0}mg
                        </li>
                        <li>
                            <div className={Styles.Float}>10%</div>
                            <b className={Styles.Attribute}>Calcium</b> {props.product ? props.product.totalNutrients.CA.quantity : 0}mg
                        </li>
                    </ul>
                </Vitamins>
            </div>
      )
}

export default nutritionLabel;