import React, { Component } from "react";
import Header from "./NutritionLabelComponents/Header/Header";
import Nutrients from "./NutritionLabelComponents/Nutrients/Nutrients";
import Vitamins from "./NutritionLabelComponents/Vitamins/Vitamins";
import Styles from "./NutritionLabel.module.css";

class NutritionLabel extends Component {
    state = {
        itemsList: [
            {
            nutrition:null,
            name: "Cheese",
            amount:{    
                amount:100,
                units:"grams"
                }
            },
            {
            nutrition:null,
            name: "Salt",
            amount:{   
                amount:2,
                units:["spoon","spoons"]
                }
            },
            {
            nutrition:{
                servingSize:"100g",
                servingsPerContainer:null,
                calories:144,
                totalFat:9.6,
                saturatedFat:3.2,
                transFat:0,
                cholesterol:372,
                sodium:142,
                totalCarbs:0.7,
                dietaryFiber:0,
                sugars:0.4,
                protein:12.6,
                vitaminA:10.8,
                vitaminC:0,
                calcium:4.4,
                iron: 9.8
            },
            name: "Egg",
            amount: {
                amount:1,
                units:null
                }
            }
        ]
    } 
    render(){
        return(
            <div className={Styles.Container}>
                <Header servingSize={this.state.itemsList[2].nutrition.servingSize}/>
                <Nutrients calories={this.state.itemsList[2].nutrition.calories}>
                    <ul>
                        <li>
                            <div className={Styles.Float}>10%</div>
                            <b className={Styles.Attribute}>Total Fat</b>
                            <ul>
                                <div className={Styles.Float}>10%</div>
                                <li>Saturated Fat {this.state.itemsList[2].nutrition.saturatedFat}g</li>
                                <div className={Styles.Float}>10%</div>
                                <li>Trans Fat {this.state.itemsList[2].nutrition.transFat}</li>
                            </ul>
                        </li>
                        <li>
                            <div className={Styles.Float}>10%</div>
                            <b className={Styles.Attribute}>Cholesterol</b> {this.state.itemsList[2].nutrition.cholesterol}mg
                        </li>
                        <li>
                            <div className={Styles.Float}>10%</div>
                            <b className={Styles.Attribute}>Sodium</b> {this.state.itemsList[2].nutrition.sodium}mg
                        </li>
                        <li>
                            <div className={Styles.Float}>10%</div>
                            <b className={Styles.Attribute}>Total Carbohydrates</b> {this.state.itemsList[2].nutrition.totalCarbs}g
                            <ul>
                                <div className={Styles.Float}>10%</div>
                                <li>Dietary Fiber {this.state.itemsList[2].nutrition.dietaryFiber}g</li>
                                <div className={Styles.Float}>10%</div>
                                <li>Sugars {this.state.itemsList[2].nutrition.sugars}g</li>
                            </ul>
                        </li>
                        <li>
                            <div className={Styles.Float}>10%</div>
                            <b className={Styles.Attribute}>Protein</b> {this.state.itemsList[2].nutrition.protein}g
                        </li>
                    </ul>
                </Nutrients>
                <Vitamins>
                    <ul>
                        <li>
                            <div className={Styles.Float}>10%</div>
                            <b className={Styles.Attribute}>Vitamin A</b> {this.state.itemsList[2].nutrition.vitaminA}mg
                        </li>
                        <li>
                            <div className={Styles.Float}>10%</div>
                            <b className={Styles.Attribute}>Vitamin C</b> {this.state.itemsList[2].nutrition.vitaminC}mg
                        </li>
                        <li>
                            <div className={Styles.Float}>10%</div>
                            <b className={Styles.Attribute}>Iron</b> {this.state.itemsList[2].nutrition.iron}mg
                        </li>
                        <li>
                            <div className={Styles.Float}>10%</div>
                            <b className={Styles.Attribute}>Calcium</b> {this.state.itemsList[2].nutrition.calcium}mg
                        </li>
                    </ul>
                </Vitamins>
            </div>
        )
    }
}

export default NutritionLabel;