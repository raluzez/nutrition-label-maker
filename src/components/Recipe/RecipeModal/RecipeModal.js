import React from "react";
import NutritionLabel from "../../NutritionLabel/NutritionLabel";
import RecipeModalItems from "./RecipeModalItems/RecipeModalItems";
import Styles from "./RecipeModal.module.css";
import Button from "../../UI/Button/Button";

const recipeModal = (props) => (
    <>
        <i className={`fas fa-times ${Styles.CloseIcon}`} onClick={props.closeModal}></i>
        <div className={Styles.Name}>Save Recipe</div>
        <input type="text" style={{fontSize:"2em", width:"100%", textAlign:"center", marginBottom:"1rem"}} placeholder="Recipe Name" onChange={props.addName} required/>
        <RecipeModalItems recipeItems={props.recipeItems}/>
        <NutritionLabel product={props.recipe}/>
        <div>
            <Button classname="Success" onclick={props.saveRecipe}>Save Recipe</Button>
            <Button classname="Danger" onclick={props.closeModal}>Cancel</Button>
        </div>
        
    </> 
)

export default recipeModal;