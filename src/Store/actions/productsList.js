import * as actionTypes from "./actionTypes";

export const productSelected = (product, amount) => {
    return {
        type: actionTypes.SELECT_PRODUCT,
        product: product,
        amount: amount
    }
}

export const productClicked = (product) => {
    return {
        type: actionTypes.CLICKED_PRODUCT,
        product: product
    }
}

export const closeModal = () => {
    return {
        type:actionTypes.CLOSE_MODAL
    }
}