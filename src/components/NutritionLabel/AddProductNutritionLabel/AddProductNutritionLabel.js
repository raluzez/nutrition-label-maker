import React from "react";
import Styles from "./AddProductNutritionLabel.module.css";
import Header from "../NutritionLabelComponents/Header/Header";
import Nutrients from "../NutritionLabelComponents/Nutrients/Nutrients";
import Vitamins from "../NutritionLabelComponents/Vitamins/Vitamins";

const addProductNutritionLabel = (props) => (
    <div className={Styles.Container}>
        <Header servingSize={100}/>
        <Nutrients calories={<input placeholder="0" style={{width:"10%", margin:"auto"}}/>} dailyValue="Nutrients per 100g">
            <ul>
                <li>
                    <div className={Styles.Float}><input type="text" placeholder="0"/> g</div>
                    <b className={Styles.Attribute}>Total Fat</b>
                    <ul>
                        <li> 
                            <div className={Styles.Float}><input type="text" placeholder="0"/> g</div>
                            Saturated Fat
                        </li>
                        <li> 
                            <div className={Styles.Float}><input type="text" placeholder="0"/> g</div>
                            Trans Fat
                        </li>
                    </ul>
                </li>
                <li>
                    <div className={Styles.Float}><input type="text" placeholder="0"/> g</div>
                    <b className={Styles.Attribute}>Cholesterol</b>
                </li>
                <li>
                    <div className={Styles.Float}><input type="text" placeholder="0"/> g</div>
                    <b className={Styles.Attribute}>Sodium</b>
                </li>
                <li>
                    <div className={Styles.Float}><input type="text" placeholder="0"/> g</div>
                    <b className={Styles.Attribute}>Total Carbohydrates</b>
                    <ul>                        
                        <li> 
                            <div className={Styles.Float}><input type="text" placeholder="0"/> g</div>
                            Dietary Fiber
                        </li>                       
                        <li> 
                            <div className={Styles.Float}><input type="text" placeholder="0"/> g</div>
                            Sugars
                        </li>
                    </ul>
                </li>
                <li>
                    <div className={Styles.Float}><input type="text" placeholder="0"/> g</div>
                    <b className={Styles.Attribute}>Protein</b>
                </li>
            </ul>
        </Nutrients>
        <Vitamins>
            <ul>
                <li>
                    <div className={Styles.Float}><input type="text" placeholder="0"/> mg</div>
                    <b className={Styles.Attribute}>Vitamin A</b>
                </li>
                <li>
                    <div className={Styles.Float}><input type="text" placeholder="0"/> mg</div>
                    <b className={Styles.Attribute}>Vitamin C</b>
                </li>
                <li>
                    <div className={Styles.Float}><input type="text" placeholder="0"/> mg</div>
                    <b className={Styles.Attribute}>Iron</b>
                </li>
                <li>
                    <div className={Styles.Float}><input type="text" placeholder="0"/> mg</div>
                    <b className={Styles.Attribute}>Calcium</b>
                </li>
            </ul>
        </Vitamins>
    </div>
)

export default addProductNutritionLabel;