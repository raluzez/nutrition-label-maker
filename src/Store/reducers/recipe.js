import * as actionTypes from "../actions/actionTypes";

const initialState = {
    savedRecipes: [],
    clickedRecipe: {}
}

const updateSaverRecipes = (newRecipe, state) => (
    state.savedRecipes.map( recipe => 
        recipe.key === newRecipe.key 
            ? newRecipe
            : recipe)
)

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_RECIPE_SUCCESS:
            return {
                ...state,
                savedRecipes: state.savedRecipes.concat(action.recipe)
            }
        case actionTypes.SAVE_RECIPE_FAIL:
            return {
                ...state
            }
        case actionTypes.FETCH_RECIPES_SUCCESS:
            return {
                ...state,
                savedRecipes: action.recipes
            }
        case actionTypes.FETCH_RECIPES_FAIL:
            return {
                ...state
            }
        case actionTypes.RECIPE_CLICKED:
            return {
                ...state,
                clickedRecipe: action.recipe
            }
        case actionTypes.ADD_ITEM_TO_RECIPE_SUCCESS:
            return {
                ...state,
                clickedRecipe: action.newRecipe,
                savedRecipes: updateSaverRecipes(action.newRecipe, state)
            }
        case actionTypes.ADD_ITEM_TO_RECIPE_FAIL:
            return {
                ...state,
                error: action.err
            }
        case actionTypes.EDIT_RECIPE_ITEM_AMOUNT_SUCCESS:
            return {
                ...state,
                clickedRecipe: action.newRecipe,
                savedRecipes: updateSaverRecipes(action.newRecipe, state)
            }
        case actionTypes.EDIT_RECIPE_ITEM_AMOUNT_FAIL:
            return {
                ...state,
                error: action.err
            }
        case actionTypes.REMOVE_RECIPE_ITEM_SUCCESS:
            return {
                ...state,
                clickedRecipe: action.newRecipe,
                savedRecipes: updateSaverRecipes(action.newRecipe, state)
            }
        case actionTypes.REMOVE_RECIPE_ITEM_FAIL:
            return {
                ...state,
                error: action.err
            }
        case actionTypes.DELETE_RECIPE_SUCCESS:
            const updatedRecipes = state.savedRecipes.filter( recipe => recipe.key !== action.recipeKey)
            return {
                ...state,
                savedRecipes: updatedRecipes
            }
        case actionTypes.DELETE_RECIPE_FAIL:
            return {
                ...state,
                error: action.err
            }
        case actionTypes.EDIT_RECIPE_NAME_SUCCESS:
            return {
                ...state,
                clickedRecipe: action.recipe,
                savedRecipes: updateSaverRecipes(action.recipe, state)
            }
        case actionTypes.EDIT_RECIPE_NAME_FAIL:
            return {
                ...state,
                error: action.err
            }
        default: return state
    }
}

export default reducer;