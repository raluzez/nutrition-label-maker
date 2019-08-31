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

export const saveRecipe = (recipe,items) => {
    recipe.items = items
    console.log(recipe)
    return dispatch => {
        dispatch(saveRecipeStart())
        axios.post("/recipes.json", recipe)
            .then((res) => {
                dispatch(saveRecipeSuccess(recipe));
                console.log(res)
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

export const fetchRecipes = () => {
    return dispatch => {
        dispatch(fetchRecipesStart())
        axios.get("/recipes.json")
            .then(response => {
                const fetchedRecipes = []
                for (const key in response.data) {
                    fetchedRecipes.push({
                        ...response.data[key]
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