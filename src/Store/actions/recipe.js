import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const saveRecipeStart = () => {
    return {
        type: actionTypes.SAVE_RECIPE_START
    }
}

export const saveRecipeFail = (error) => {
    return {
        type: actionTypes.SAVE_RECIPE_FAIL,
        error
    }
}

export const saveRecipeSuccess = (recipe) => {
    return {
        type: actionTypes.SAVE_RECIPE_SUCCESS,
        recipe
    }
}

export const saveRecipe = (recipe, items, token, userId) => {
    recipe.items = items
    recipe.userId = userId
    return dispatch => {
        dispatch(saveRecipeStart())
        axios.post(`/recipes.json?auth=${token}`, recipe)
            .then((res) => {
                recipe.key = res.data.name
                dispatch(saveRecipeSuccess(recipe));
            })
            .catch(error => dispatch(saveRecipeFail(error)))
    }
}

export const fetchRecipesStart = () => {
    return {
        type: actionTypes.FETCH_RECIPES_START
    }
}

export const fetchRecipesFail = (error) => {
    return {
        type: actionTypes.FETCH_RECIPES_FAIL,
        error
    }
}

export const fecthRecipesSuccess = (recipes) => {
    return {
        type: actionTypes.FETCH_RECIPES_SUCCESS,
        recipes
    }
}

export const fetchRecipes = (token, userId) => {
    return dispatch => {
        dispatch(fetchRecipesStart())
        axios.get(`/recipes.json?auth=${token}&orderBy="userId"&equalTo="${userId}"`)
            .then(response => {
                const fetchedRecipes = []
                for (const key in response.data) {
                    fetchedRecipes.push({
                        ...response.data[key],
                        key: key
                    })
                }
                dispatch(fecthRecipesSuccess(fetchedRecipes))
            })
            .catch(error => {
                dispatch(fetchRecipesFail(error))
            })
    }
}

export const deleteReciptStart = () => {
    return {
        type: actionTypes.DELETE_RECIPE_START
    }
}

export const deleteRecipeFail = (error) => {
    return {
        type: actionTypes.DELETE_RECIPE_FAIL,
        error
    }
}

export const deleteRecipeSuccess = (recipeKey) => {
    return {
        type: actionTypes.DELETE_RECIPE_SUCCESS,
        recipeKey
    }
}

export const deleteRecipe = (recipeKey, token) => {
    return dispatch => {
        dispatch(deleteReciptStart())
        axios.delete(`/recipes/${recipeKey}.json?auth=${token}`)
            .then( () => dispatch (deleteRecipeSuccess(recipeKey)))
            .catch( error => dispatch (deleteRecipeFail(error)))
    }
}

export const recipeClicked = (recipe) => {
    return {
        type: actionTypes.RECIPE_CLICKED,
        recipe
    }
}

export const editRecipeItem = (amount, product, id, recipeId) => {
    return {
        type: actionTypes.EDIT_RECIPE_ITEM,
        amount,
        product,
        id,
        recipeId
    }
}