import * as actionTypes from "../actions/actionTypes";

const initialState = {
    savedRecipes: [],
    clickedRecipe: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_RECIPE:
            action.recipe.items=action.items
            return {
                ...state,
                savedRecipes: state.savedRecipes.concat(action.recipe)
            }
        case actionTypes.RECIPE_CLICKED:
            return {
                ...state,
                clickedRecipe: action.recipe
            }
        default: return state
    }
}

export default reducer;