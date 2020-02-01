import * as actionTypes from "./actionTypes";

export const saveRecipeFail = error => ({
  type: actionTypes.SAVE_RECIPE_FAIL,
  error
});

export const saveRecipeSuccess = recipe => ({
  type: actionTypes.SAVE_RECIPE_SUCCESS,
  recipe
});

export const fetchRecipesFail = error => ({
  type: actionTypes.FETCH_RECIPES_FAIL,
  error
});

export const fecthRecipesSuccess = recipes => ({
  type: actionTypes.FETCH_RECIPES_SUCCESS,
  recipes
});

export const recipeClicked = recipe => ({
  type: actionTypes.RECIPE_CLICKED,
  recipe
});

export const addItemToRecipeSuccess = newRecipe => ({
  type: actionTypes.ADD_ITEM_TO_RECIPE_SUCCESS,
  newRecipe
});

export const addItemToRecipeFail = err => ({
  type: actionTypes.ADD_ITEM_TO_RECIPE_FAIL,
  err
});

export const editRecipeItemAmountSuccess = newRecipe => ({
  type: actionTypes.EDIT_RECIPE_ITEM_AMOUNT_SUCCESS,
  newRecipe
});

export const editRecipeItemAmountFail = err => ({
  type: actionTypes.EDIT_RECIPE_ITEM_AMOUNT_FAIL,
  err
});

export const removeRecipeItemSuccess = newRecipe => ({
  type: actionTypes.REMOVE_RECIPE_ITEM_SUCCESS,
  newRecipe
});

export const removeRecipeItemFail = err => ({
  type: actionTypes.REMOVE_RECIPE_ITEM_FAIL,
  err
});

export const deleteRecipeSuccess = recipeKey => ({
  type: actionTypes.DELETE_RECIPE_SUCCESS,
  recipeKey
});

export const deleteRecipeFail = err => ({
  type: actionTypes.DELETE_RECIPE_FAIL,
  err
});

export const editRecipeNameSuccess = recipe => ({
  type: actionTypes.EDIT_RECIPE_NAME_SUCCESS,
  recipe
});

export const editRecipeNameFail = err => ({
  type: actionTypes.EDIT_RECIPE_NAME_FAIL,
  err
});
