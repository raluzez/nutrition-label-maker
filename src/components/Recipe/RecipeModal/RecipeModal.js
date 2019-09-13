import React from "react";
import NutritionLabel from "../../NutritionLabel/NutritionLabel";
import AddRecipeModalItems from "../AddRecipeModal/AddRecipeModalItems/AddRecipeModalItems";
import Button from "../../UI/Button/Button";
import Styles from "./RecipeModal.module.css";

const recipeModal = (props) => (
    <>
        <i className={`fas fa-times ${Styles.CloseIcon}`} onClick={props.closeIconClicked}></i>
        <div className={Styles.Name}>{props.product.name}</div>
        <AddRecipeModalItems recipeItems={props.recipeItems}/>
        <NutritionLabel product={props.product}/>
        <Button onclick={props.deleteRecipe} classname="Danger">Delete Recipe</Button>     
    </> 
)

export default recipeModal;