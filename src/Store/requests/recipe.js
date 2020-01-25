import * as actions from "../actions/recipe";
import axios from "../../axios";

export const addProductToRecipe =  product => (dispatch, getState) =>{
    const token = localStorage.getItem('token')
    let newRecipe = JSON.parse(JSON.stringify(getState().recipe.clickedRecipe))
    newRecipe.items.push(product)
    axios.put(`/recipes/${newRecipe.key}.json?auth=${token}`,newRecipe)
        .then(res => {
            dispatch(actions.addProductToRecipeSuccess(res.data))
        })
        .catch( err => {
            dispatch(actions.addProductToRecipeFail(err.data))
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