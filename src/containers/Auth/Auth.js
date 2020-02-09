import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import googleLogo from "../../Assets/images/Google_icon.png";
import { resetError } from "../../Store/actions/auth";
import { googleAuth, auth } from "../../Store/requests/auth";
import Styles from "./Auth.module.css";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [isLogin, setIsLogin] = useState(true);

  let error = useSelector(state => state.auth.error);
  const dispatch = useDispatch();

  let errorMessage = null;

  const resetInputsValues = () => {
    setIsLogin(!isLogin);
    setEmail("");
    setPassword("");
    setSecondPassword("");
    setPasswordsMatch(true);
    dispatch(resetError());
  };

  const passwordHandelr = value => {
    setPassword(value);
    value !== secondPassword && secondPassword !== ""
      ? setPasswordsMatch(false)
      : setPasswordsMatch(true);
  };

  const secondPasswordHandler = value => {
    setSecondPassword(value);
    value !== password ? setPasswordsMatch(false) : setPasswordsMatch(true);
  };

  let buttonsDiv = (
    <div className={Styles.ButtonsDiv}>
      <button onClick={() => dispatch(auth(email, password, isLogin))}>
        LOGIN
      </button>
      <div>Or login with</div>
      <button onClick={() => dispatch(googleAuth())}>
        <img src={googleLogo} alt="" /> Google
      </button>
      <span>
        Not a member? <a onClick={resetInputsValues}>Sign up now</a>
      </span>
    </div>
  );

  if (!passwordsMatch) {
    errorMessage = <p className={Styles.ErrorMessage}>Passwords Don't Match</p>;
  }

  if (error) {
    errorMessage = <p className={Styles.ErrorMessage}>{error}</p>;
  }

  if (!isLogin) {
    buttonsDiv = (
      <div className={Styles.ButtonsDiv}>
        <button onClick={() => dispatch(auth(email, password, isLogin))}>
          SIGN UP
        </button>
        <div>Or sign up with</div>
        <button onClick={() => dispatch(googleAuth())}>
          <img src={googleLogo} alt="" /> Google
        </button>
        <span>
          Have an account? <a onClick={resetInputsValues}>Login</a>
        </span>
      </div>
    );
  }

  return (
    <div className={Styles.Container}>
      <div className={Styles.FormContainer}>
        <div className={Styles.Name}>{isLogin ? "Login" : "Sign Up"}</div>
        {errorMessage}
        <form className={Styles.Form}>
          <input
            type="text"
            placeholder="E-mail"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={e => passwordHandelr(e.target.value)}
            value={password}
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="Repeat Password"
              onChange={e => secondPasswordHandler(e.target.value)}
              value={secondPassword}
            />
          )}
        </form>
        {buttonsDiv}
      </div>
    </div>
  );
};

export default Auth;
