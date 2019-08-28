import * as actionTypes from "../actions/actionTypes";

const initialState = {
    savedRecipes: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_RECIPE:
            return {
                ...state,
                savedRecipes: state.savedRecipes.concat(action.recipe)
            }
        default: return state
    }
}

export default reducer;