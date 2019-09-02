import * as actionTypes from "../actions/actionTypes";

const initialState = {
    showAuthModal: true,
    token: null,
    userId: null,
    error: null,
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CLOSE_SIGN_UP:
            return {
                ...state,
                showAuthModal:false
            }
        case actionTypes.OPEN_SIGN_UP:
            return{
                ...state,
                showAuthModal:true
            }
        case actionTypes.AUTH_START: 
            return {
                ...state,
                loading: true,
                error: null
            }
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.idToken,
                userId: action.userId,
                error: null,
                loading: false
            }
        default : return state
    }
}

export default reducer;