import * as actionTypes from "./actionTypes";

export const selectProduct = (product) => {
    return {
        type: actionTypes.SELECT_PRODUCT,
        product: product
    }
}