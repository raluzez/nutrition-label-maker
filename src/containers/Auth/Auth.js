import React, { useState } from "react";
import { connect } from "react-redux";
import googleLogo from '../../Assets/images/Google_icon.png';
import * as actions from "../../Store/actions";
import Styles from "./Auth.module.css";


const Auth = (props) => {
    const [password, setPassword] = useState('')
    const [secondPassword, setSecondPassword] = useState('')
    const [passwordsMatch, setPasswordsMatch] = useState(true)
    const [email, setEmail] = useState('')
    const [isLogin, setIsLogin] = useState(true)

    // const provider = new firebase.auth.GoogleAuthProvider()

    // const googleLogin = () => {
    //     firebase.auth().signInWithPopup(provider)
    //         .then(res => console.log(res))
    // }

    // state = {
    //     existingUser:true,
    //     password:"",
    //     email:"",
    //     repeatedPassword: "",
    //     passwordMatch: true
    // }

    // signUpPasswordHandler = (event) => {
    //     if (event.target.placeholder === "Password"){
    //         this.setState({password : event.target.value});
    //         this.checkPassword(event.target.value, event.target.placeholder)
    //     } else if (event.target.placeholder === "Repeat Password") {
    //         this.setState({repeatedPassword : event.target.value});
    //         this.checkPassword(event.target.value, event.target.placeholder)
    //     }
    // }

    // checkPassword = (value,type) => {
    //     if(type==="Password"){
    //         if(value!==this.state.repeatedPassword){
    //             this.setState({passwordMatch: false})
    //         } else { this.setState({passwordMatch: true}) }
    //     } else {
    //         if(value!==this.state.password){
    //             this.setState({passwordMatch: false})
    //         } else { this.setState({passwordMatch: true}) }
    //     }
    // }

    // resetPasswordError = () => {
    //     this.setState({passwordMatch: true})
    // }

    const resetInputsValues = () => {
        setEmail('');
        setPassword('');
        setSecondPassword('');
        errorMessage = null
    }

    const secondPasswordHandler = (value) => {
        if(value !== password) {
            setPasswordsMatch(false)
        }
        setSecondPassword(value)
    }


        let errorMessage = null

        if (!passwordsMatch) {
            errorMessage = <p className={Styles.ErrorMessage}>Passwords Don't Match</p>
        } else {errorMessage = null}

        if (props.error) {
            errorMessage = <p className={Styles.ErrorMessage}>{props.error.message}</p>
        } 

        let form = 
        <div className={Styles.Container}>
            <div className={Styles.FormContainer}>
                <div className={Styles.Name}>Login</div>
                {errorMessage}
                <form className={Styles.Form}>
                    <input type="text" placeholder="E-mail" onChange={e => setEmail(e.target.value)} value={email} />
                    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password}/>
                </form>
                <div className={Styles.ButtonsDiv}>
                    <button onClick={() => props.onAuth(email, password, isLogin)}>LOGIN</button>
                    <div>Or login with</div>
                    <button><img src={googleLogo} alt=''/> Google</button> 
                    <span>Not a member? <a onClick={() => {setIsLogin(!isLogin); resetInputsValues()}}>Sign up now</a></span>
                </div> 
            </div>  
        </div>
        
        if(!isLogin) {
            form = 
            <div className={Styles.Container}>
                <div className={Styles.FormContainer}>
                    <div className={Styles.Name}>Sign Up</div>
                    {errorMessage}
                    <form className={Styles.Form}>
                        <input type="text" placeholder="E-mail" onChange={e => setEmail(e.target.value)} value={email} />
                        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password}/>
                        <input type="password" placeholder="Repeat Password" onChange={e => secondPasswordHandler(e.target.value)} value={secondPassword}/>
                    </form>
                    <div className={Styles.ButtonsDiv}>
                        <button onClick={() => props.onAuth(email, password, isLogin)}>Sign Up</button>
                        <div>Or sign up  with</div>
                        <button><img src={googleLogo} alt=''/> Google</button> 
                        <span>Have an account? <a onClick={() => {setIsLogin(!isLogin); resetInputsValues()}}>Login</a></span>
                    </div>  
                </div> 
            </div>
        }
        return(
            <>{form}</>
        )
    }

const mapStateToProps = state => {
    return {
        error: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp))
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Auth);