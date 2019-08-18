import React from "react";
import Header from "./NutritionLabelComponents/Header/Header";
import Nutrients from "./NutritionLabelComponents/Nutrients/Nutrients";
import Vitamins from "./NutritionLabelComponents/Vitamins/Vitamins";
import Styles from "./NutritionLabel.module.css";

const nutritionLabel = (props) => {    
        return(
            <div className={Styles.Container}>
                <Header servingSize={props.product ? props.product.quantity.toFixed(1) : 100}/>
                <Nutrients calories={props.product ? props.product.totalNutrients.ENERC_KCAL.quantity.toFixed(1) : 0}>
                    <ul>
                        <li>
                            <div className={Styles.Float}>10%</div>
                            <b className={Styles.Attribute}>Total Fat</b> {props.product ? props.product.totalNutrients.FAT.quantity.toFixed(1) : 0} g
                            <ul>
                                <div className={Styles.Float}>10%</div>
                                <li>Saturated Fat {props.product ? props.product.totalNutrients.FASAT.quantity.toFixed(1) : 0} g</li>
                                <div className={Styles.Float}>10%</div>
                                <li>Trans Fat {props.product ? props.product.totalNutrients.FATRN.quantity.toFixed(1) : 0} g</li>
                            </ul>
                        </li>
                        <li>
                            <div className={Styles.Float}>10%</div>
                            <b className={Styles.Attribute}>Cholesterol</b> {props.product ? props.product.totalNutrients.CHOLE.quantity.toFixed(1) : 0} mg
                        </li>
                        <li>
                            <div className={Styles.Float}>10%</div>
                            <b className={Styles.Attribute}>Sodium</b> {props.product ? props.product.totalNutrients.NA.quantity.toFixed(1) : 0} mg
                        </li>
                        <li>
                            <div className={Styles.Float}>10%</div>
                            <b className={Styles.Attribute}>Total Carbohydrates</b> {props.product ? props.product.totalNutrients.CHOCDF.quantity.toFixed(1) : 0} g
                            <ul>
                                <div className={Styles.Float}>10%</div>
                                <li>Dietary Fiber {props.product ? props.product.totalNutrients.FIBTG.quantity.toFixed(1) : 0} g</li>
                                <div className={Styles.Float}>10%</div>
                                <li>Sugars {props.product ? props.product.totalNutrients.SUGAR.quantity.toFixed(1) : 0} g</li>
                            </ul>
                        </li>
                        <li>
                            <div className={Styles.Float}>10%</div>
                            <b className={Styles.Attribute}>Protein</b> {props.product ? props.product.totalNutrients.PROCNT.quantity.toFixed(1) : 0} g
                        </li>
                    </ul>
                </Nutrients>
                <Vitamins>
                    <ul>
                        <li>
                            <div className={Styles.Float}>10%</div>
                            <b className={Styles.Attribute}>Vitamin A</b> {props.product ? props.product.totalNutrients.VITA_RAE.quantity.toFixed(1) : 0} mg
                        </li>
                        <li>
                            <div className={Styles.Float}>10%</div>
                            <b className={Styles.Attribute}>Vitamin C</b> {props.product ? props.product.totalNutrients.VITC.quantity.toFixed(1) : 0} mg
                        </li>
                        <li>
                            <div className={Styles.Float}>10%</div>
                            <b className={Styles.Attribute}>Iron</b> {props.product ? props.product.totalNutrients.FE.quantity.toFixed(1) : 0} mg
                        </li>
                        <li>
                            <div className={Styles.Float}>10%</div>
                            <b className={Styles.Attribute}>Calcium</b> {props.product ? props.product.totalNutrients.CA.quantity.toFixed(1) : 0} mg
                        </li>
                    </ul>
                </Vitamins>
            </div>
      )
}

export default nutritionLabel;