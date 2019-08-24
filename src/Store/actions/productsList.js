import * as actionTypes from "./actionTypes";

export const productSelected = (product, amount) => {
    return {
        type: actionTypes.SELECT_PRODUCT,
        product: product,
        amount: amount
    }
}

export const productDeleted = (productName, product) => {
    return {
        type : actionTypes.DELETE_PRODUCT,
        productName : productName,
        product : product
    }
}

export const productClicked = (product) => {
    return {
        type: actionTypes.CLICKED_PRODUCT,
        product: product
    }
}

export const changeItemAmount = (amount, product) => {
    return {
        type: actionTypes.CHANGE_AMOUNT,
        product,
        amount
    }
}

export const addProduct = (product) => {
    return {
        type: actionTypes.ADD_PRODUCT,
        product
    }
}

export const closeModal = () => {
    return {
        type:actionTypes.CLOSE_MODAL
    }
}

export const addRecipeName = (recipeName) => {
    return {
        type: actionTypes.ADD_RECIPE_NAME,
        recipeName: recipeName
    }
}