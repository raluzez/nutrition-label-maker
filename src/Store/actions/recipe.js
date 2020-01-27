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

export const saveRecipe = recipe => dispatch => {
        recipe.userId = localStorage.getItem('userId')
        dispatch(saveRecipeStart())
        axios.post(`/recipes.json?auth=${localStorage.getItem('token')}`, recipe)
            .then((res) => {
                recipe.key = res.data.name
                dispatch(saveRecipeSuccess(recipe));
            })
            .catch(error => dispatch(saveRecipeFail(error)))
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

export const addItemToRecipeSuccess = newRecipe => (
    {
        type: actionTypes.ADD_ITEM_TO_RECIPE_SUCCESS,
        newRecipe
    }
) 

export const addItemToRecipeFail = err => (
    {
        type: actionTypes.ADD_ITEM_TO_RECIPE_FAIL,
        err
    }
) 

export const editRecipeItemAmountSuccess = newRecipe => (
    {
        type: actionTypes.EDIT_RECIPE_ITEM_AMOUNT_SUCCESS,
        newRecipe
    }
)

export const editRecipeItemAmountFail = err => (
    {
        type: actionTypes.EDIT_RECIPE_ITEM_AMOUNT_FAIL,
        err
    }
) 

export const removeRecipeItemSuccess = newRecipe => (
    {
        type: actionTypes.REMOVE_RECIPE_ITEM_SUCCESS,
        newRecipe
    }
)

export const removeRecipeItemFail = err => (
    {
        type: actionTypes.REMOVE_RECIPE_ITEM_FAIL,
        err
    }
)

export const deleteRecipeSuccess = recipeKey => (
    {
        type: actionTypes.DELETE_RECIPE_SUCCESS,
        recipeKey
    }
)

export const deleteRecipeFail = err => (
    {
        type: actionTypes.DELETE_RECIPE_FAIL,
        err
    }
)

export const editRecipeNameSuccess = recipe => (
    {
        type: actionTypes.EDIT_RECIPE_NAME_SUCCESS,
        recipe
    }
)

export const editRecipeNameFail = err => (
    {
        type: actionTypes.EDIT_RECIPE_NAME_FAIL,
        err
    }
)