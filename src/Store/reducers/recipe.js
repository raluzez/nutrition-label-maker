import * as actionTypes from "../actions/actionTypes";

const initialState = {
    savedRecipes: [],
    clickedRecipe: "",
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_RECIPE_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.SAVE_RECIPE_FAIL:
            return {
                ...state,
                loading: false
            }
        case actionTypes.SAVE_RECIPE_SUCCESS:
            return {
                ...state,
                savedRecipes: state.savedRecipes.concat(action.recipe),
                loading:false
            }
        case actionTypes.FETCH_RECIPES_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_RECIPES_FAIL:
            return {
                ...state,
                loading: false
            }
        case actionTypes.FETCH_RECIPES_SUCCESS:
            return {
                ...state,
                savedRecipes: action.recipes,
                loading:false
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