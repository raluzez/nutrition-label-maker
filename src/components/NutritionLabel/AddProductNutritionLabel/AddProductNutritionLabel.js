import React from "react";
import Styles from "./AddProductNutritionLabel.module.css";
import Header from "../NutritionLabelComponents/Header/Header";
import Nutrients from "../NutritionLabelComponents/Nutrients/Nutrients";
import Vitamins from "../NutritionLabelComponents/Vitamins/Vitamins";

const addProductNutritionLabel = (props) => (
    <div className={Styles.Container}>        
        <Header servingSize={100}/>
        <input type="text" placeholder="Product Name" style={{fontSize:"2em", width:"100%", textAlign:"center"}} name="name" onChange={props.addName}/>
        <Nutrients dailyValue="Nutrients per 100g" calories={
                <input 
                    placeholder="0" 
                    style={{width:"10%", margin:"auto"}} 
                    onChange={props.addNutrients} 
                    name="ENERC_KCAL"/>}  >
            <ul>
                <li>
                    <div className={Styles.Float}><input type="text" placeholder="0" name="FAT" onChange={props.addNutrients} /> g</div>
                    <b className={Styles.Attribute}>Total Fat</b>
                    <ul>
                        <li> 
                            <div className={Styles.Float}><input type="text" placeholder="0" name="FASAT" onChange={props.addNutrients} /> g</div>
                            Saturated Fat
                        </li>
                        <li> 
                            <div className={Styles.Float}><input type="text" placeholder="0" name="FATRN" onChange={props.addNutrients} /> g</div>
                            Trans Fat
                        </li>
                    </ul>
                </li>
                <li>
                    <div className={Styles.Float}><input type="text" placeholder="0" name="CHOLE" onChange={props.addNutrients} /> g</div>
                    <b className={Styles.Attribute}>Cholesterol</b>
                </li>
                <li>
                    <div className={Styles.Float}><input type="text" placeholder="0" name="NA" onChange={props.addNutrients} /> g</div>
                    <b className={Styles.Attribute}>Sodium</b>
                </li>
                <li>
                    <div className={Styles.Float}><input type="text" placeholder="0" name="CHOCDF" onChange={props.addNutrients} /> g</div>
                    <b className={Styles.Attribute}>Total Carbohydrates</b>
                    <ul>                        
                        <li> 
                            <div className={Styles.Float}><input type="text" placeholder="0" name="FIBTG" onChange={props.addNutrients} /> g</div>
                            Dietary Fiber
                        </li>                       
                        <li> 
                            <div className={Styles.Float}><input type="text" placeholder="0" name="SUGAR" onChange={props.addNutrients} /> g</div>
                            Sugars
                        </li>
                    </ul>
                </li>
                <li>
                    <div className={Styles.Float}><input type="text" placeholder="0" name="PROCNT" onChange={props.addNutrients} /> g</div>
                    <b className={Styles.Attribute}>Protein</b>
                </li>
            </ul>
        </Nutrients>
        <Vitamins>
            <ul>
                <li>
                    <div className={Styles.Float}><input type="text" placeholder="0" name="VITA_RAE" onChange={props.addNutrients} /> mg</div>
                    <b className={Styles.Attribute}>Vitamin A</b>
                </li>
                <li>
                    <div className={Styles.Float}><input type="text" placeholder="0" name="VITC" onChange={props.addNutrients} /> mg</div>
                    <b className={Styles.Attribute}>Vitamin C</b>
                </li>
                <li>
                    <div className={Styles.Float}><input type="text" placeholder="0" name="FE" onChange={props.addNutrients} /> mg</div>
                    <b className={Styles.Attribute}>Iron</b>
                </li>
                <li>
                    <div className={Styles.Float}><input type="text" placeholder="0" name="CA" onChange={props.addNutrients} /> mg</div>
                    <b className={Styles.Attribute}>Calcium</b>
                </li>
            </ul>
        </Vitamins>
    </div>
)

export default addProductNutritionLabel;