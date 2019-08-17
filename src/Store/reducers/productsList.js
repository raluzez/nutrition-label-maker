import * as actionTypes from "../actions/actionTypes";

const initialState = {
    selectedProducts:[],
    clickedProduct: "",
    showModal:false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SELECT_PRODUCT: 
            action.product.quantity = action.amount
            return {
                ...state,
                selectedProducts: state.selectedProducts.concat(action.product),
                showModal:false,
            }
        case actionTypes.CLICKED_PRODUCT:
            return {
                ...state,
                clickedProduct: action.product,
                showModal:true
            }
        case actionTypes.CLOSE_MODAL:
            return {
                ...state,
                showModal:false
            }
        default: return state
    }
}

export default reducer;