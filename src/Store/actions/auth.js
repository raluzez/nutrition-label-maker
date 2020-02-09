import * as actionTypes from "./actionTypes";

export const authSuccess = token => ({
  type: actionTypes.AUTH_SUCCESS,
  idToken: token
});

export const authFail = error => ({
  type: actionTypes.AUTH_FAIL,
  error
});

export const resetError = () => ({
  type: actionTypes.RESET_ERROR
});

export const logout = () => ({
  type: actionTypes.LOGOUT
});
