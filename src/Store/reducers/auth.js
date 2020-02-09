import * as actionTypes from "../actions/actionTypes";

const initialState = {
  token: null,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        error: action.error
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.idToken
      };
    case actionTypes.RESET_ERROR:
      return {
        ...state,
        error: null
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        token: null
      };
    default:
      return state;
  }
};

export default reducer;
