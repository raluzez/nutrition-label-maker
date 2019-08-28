import * as actionTypes from "./actionTypes";

export const saveRecipe = (recipe) => {
    return {
        type: actionTypes.SAVE_RECIPE,
        recipe
    }
}