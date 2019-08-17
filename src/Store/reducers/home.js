import * as actionTypes from "../actions/actionTypes";

const initialState = {
    selectedProducts:[]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SELECT_PRODUCT: 
            return {
                ...state,
                selectedProducts: state.selectedProducts.concat(action.product)
            }
        default: return state
    }
}

export default reducer;