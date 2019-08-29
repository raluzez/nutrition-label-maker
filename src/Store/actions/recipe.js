import * as actionTypes from "./actionTypes";

export const saveRecipe = (recipe,items) => {
    return {
        type: actionTypes.SAVE_RECIPE,
        recipe,
        items
    }
}

export const recipeClicked = (recipe) => {
    return {
        type: actionTypes.RECIPE_CLICKED,
        recipe
    }
}