import * as actions from "../actions/recipe";
import axios from "../../axios";

export const addItemToRecipe =  product => (dispatch, getState) =>{
    const token = localStorage.getItem('token')
    let newRecipe = JSON.parse(JSON.stringify(getState().recipe.clickedRecipe))
    newRecipe.items.push(product)
    axios.put(`/recipes/${newRecipe.key}.json?auth=${token}`,newRecipe)
        .then(res => {
            dispatch(actions.addItemToRecipeSuccess(res.data))
        })
        .catch( err => {
            dispatch(actions.addItemToRecipeFail(err.data))
        })
    }

export const editRecipeItemAmount = (product, amount) => (dispatch, getState) => {
    const token = localStorage.getItem('token')
    let newRecipe = JSON.parse(JSON.stringify(getState().recipe.clickedRecipe))
    newRecipe.items.map( item => {
        if(item.key === product.key){
            item.quantity = amount
        }
    })
    axios.put(`/recipes/${newRecipe.key}.json?auth=${token}`,newRecipe)
        .then( res => {
            dispatch(actions.editRecipeItemAmountSuccess(res.data))
        })
        .catch( err => {
            dispatch(actions.editRecipeItemAmountFail(err.data))
        })
}

export const removeRecipeItem = itemKey => (dispatch, getState) => {
    const token = localStorage.getItem('token')
    let newRecipe = JSON.parse(JSON.stringify(getState().recipe.clickedRecipe))
    const newItems = newRecipe.items.filter( item => item.key !== itemKey)
    newRecipe.items = newItems
    axios.put(`/recipes/${newRecipe.key}.json?auth=${token}`,newRecipe)
        .then( res => {
            dispatch(actions.removeRecipeItemSuccess(res.data))
        })
        .catch( err => {
            dispatch(actions.removeRecipeItemFail(err.data))
        })
}

export const editRecipeName = recipe => dispatch => {
    const token = localStorage.getItem('token')
    axios.put(`/recipes/${recipe.key}.json?auth=${token}`,recipe)
        .then( res => {
            dispatch(actions.editRecipeNameSuccess(res.data))
        })
        .catch( err => {
            dispatch(actions.editRecipeNameFail(err.data))
        })
}

export const deleteRecipe = recipeKey => dispatch => {
    const token = localStorage.getItem('token')
    axios.delete(`/recipes/${recipeKey}.json?auth=${token}`)
        .then( () => {
            dispatch(actions.deleteRecipeSuccess(recipeKey))
        })
        .catch( err => {
            dispatch(actions.removeRecipeItemFail(err.data))
        })
}

export const fetchRecipes = () =>  dispatch => {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    axios.get(`/recipes.json?auth=${token}&orderBy="userId"&equalTo="${userId}"`)
        .then( res => {
            const fetchedRecipes = []
            for (const key in res.data) {
                fetchedRecipes.push({
                    ...res.data[key],
                    key: key
                })
            }
            dispatch(actions.fecthRecipesSuccess(fetchedRecipes))
        })
        .catch(err => {
            dispatch(actions.fetchRecipesFail(err))
        })
}

export const saveRecipe = recipe => dispatch => {
    recipe.userId = localStorage.getItem("userId");
    axios.post(`/recipes.json?auth=${localStorage.getItem("token")}`, recipe)
        .then(res => {
            recipe.key = res.data.name;
            dispatch(actions.saveRecipeSuccess(recipe));
    })
        .catch(error => dispatch(actions.saveRecipeFail(error)));
}