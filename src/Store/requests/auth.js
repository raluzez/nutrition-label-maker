import firebase from "firebase";
import { authSuccess, authFail, logout } from "../actions/auth";

const provider = new firebase.auth.GoogleAuthProvider();

const saveToLocalStorage = (token, userId) => {
  const expirationDate = new Date(new Date().getTime() + 3600000);
  localStorage.setItem("token", token);
  localStorage.setItem("expirationDate", expirationDate);
  localStorage.setItem("userId", userId);
};

const checkAuthTimeout = expirationTime => dispatch => {
  setTimeout(() => {
    dispatch(signOut());
  }, expirationTime * 1000);
};

export const signOut = () => dispatch => {
  firebase.auth().signOut();
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
  dispatch(logout());
};

export const authCheckLogin = () => dispatch => {
  const token = localStorage.getItem("token");
  const expirationDate = new Date(localStorage.getItem("expirationDate"));
  if (!token || expirationDate < new Date()) {
    signOut();
  } else {
    dispatch(authSuccess(token));
    dispatch(
      checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000)
    );
  }
};

export const googleAuth = () => dispatch => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(res => {
      saveToLocalStorage(res.user.ma, res.user.uid);
      dispatch(authSuccess(res.user.ma));
      dispatch(checkAuthTimeout(3600));
    })
    .catch(error => {
      dispatch(authFail(error.message));
    });
};

export const auth = (email, password, isSignUp) => dispatch => {
  let auth = () =>
    firebase.auth().createUserWithEmailAndPassword(email, password);
  if (isSignUp) {
    auth = () => firebase.auth().signInWithEmailAndPassword(email, password);
  }
  auth()
    .then(res => {
      saveToLocalStorage(res.user.ma, res.user.uid);
      dispatch(authSuccess(res.user.ma));
      dispatch(checkAuthTimeout(3600));
    })
    .catch(error => {
      dispatch(authFail(error.message));
    });
};
