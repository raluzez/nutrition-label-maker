import * as actionTypes from "../actions/actionTypes";

const initialState = {
    savedRecipes: [],
    clickedRecipe: {   
        name : "",
        quantity : 0,
        units : "g",
        totalNutrients : {
            ENERC_KCAL : {quantity : 0},
            FAT : {quantity : 0},
            FASAT : {quantity : 0},
            FATRN : {quantity : 0},
            CHOCDF : {quantity : 0},
            FIBTG : {quantity : 0},
            SUGAR : {quantity : 0},
            PROCNT : {quantity : 0},
            CHOLE : {quantity : 0},
            NA : {quantity : 0},
            CA : {quantity: 0},
            FE : {quantity: 0},
            VITA_RAE : {quantity : 0},
            VITC : {quantity : 0}
        }
    },
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
        case actionTypes.DELETE_RECIPE_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.DELETE_RECIPE_FAIL:
            return {
                ...state,
                loading: false
            }
        case actionTypes.DELETE_RECIPE_SUCCESS:
            return {
                ...state,
                savedRecipes: state.savedRecipes.filter(recipe => action.recipeKey !== recipe.key),
                loading: false
            }
        case actionTypes.RECIPE_CLICKED:
            return {
                ...state,
                clickedRecipe: action.recipe
            }
        case actionTypes.EDIT_RECIPE_ITEM:
            const newRecipes = state.savedRecipes.map(recipe => {
                if(recipe.key === action.recipeId) {
                    recipe.items.find( product => 
                        product.key === action.id).quantity = action.amount   
                }
                return recipe
            })
            return {
                ...state,
                savedRecipes: newRecipes
            }
        case actionTypes.ADD_PRODUCT_TO_RECIPE_SUCCESS:
            return {
                ...state,
                clickedRecipe: action.newRecipe
            }
        case actionTypes.ADD_PRODUCT_TO_RECIPE_FAIL:
            return {
                ...state,
                error: action.err
            }
        case actionTypes.EDIT_RECIPE_ITEM_AMOUNT_SUCCESS:
            return {
                ...state,
                clickedRecipe: action.newRecipe
            }
        case actionTypes.EDIT_RECIPE_ITEM_AMOUNT_FAIL:
            return {
                ...state,
                error: action.err
            }
        case actionTypes.REMOVE_RECIPE_ITEM_SUCCESS:
            return {
                ...state,
                clickedRecipe: action.newRecipe
            }
        case actionTypes.REMOVE_RECIPE_ITEM_FAIL:
            return {
                ...state,
                error: action.err
            }
        default: return state
    }
}

export default reducer;