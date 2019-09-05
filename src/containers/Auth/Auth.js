import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../../components/UI/Button/Button";
import * as actions from "../../Store/actions";
import Styles from "./Auth.module.css";


class Auth extends Component {
    state = {
        existingUser:false,
        password:"",
        email:"",
        repeatedPassword: "",
        passwordMatch: true
    }

    existingUserHandler = () => {
        this.setState({existingUser:!this.state.existingUser})
    }

    emailHandler = (event) => {
        this.setState({email: event.target.value})
    }

    passwordHandler = (event) => {
        if (event.target.placeholder === "Password"){
            this.setState({password : event.target.value});
            this.checkPassword(event.target.value, event.target.placeholder)
        } else if (event.target.placeholder === "Repeat Password") {
            this.setState({repeatedPassword : event.target.value});
            this.checkPassword(event.target.value, event.target.placeholder)
        }
    }

    checkPassword = (value,type) => {
        if(type==="Password"){
            if(value!==this.state.repeatedPassword){
                this.setState({passwordMatch: false})
            } else { this.setState({passwordMatch: true}) }
        } else {
            if(value!==this.state.password){
                this.setState({passwordMatch: false})
            } else { this.setState({passwordMatch: true}) }
        }
    }



    render(){

        let errorMessage = null

        if (!this.state.passwordMatch) {
            errorMessage = <p className={Styles.ErrorMessage}>Passwords Don't Match</p>
        } else {errorMessage = null}

        if (this.props.error) {
            errorMessage = <p className={Styles.ErrorMessage}>{this.props.error.message}</p>
        } 

        let form = 
        <>
            <div className={Styles.Name}>Login</div>
            {errorMessage}
            <form className={Styles.Form}>
                <input type="text" placeholder="E-mail" onChange={this.emailHandler}/>
                <input type="password" placeholder="Password" onChange={this.passwordHandler}/>
            </form>
            <div className={Styles.ButtonsDiv}>
                <Button classname="Success" onclick={() => this.props.onAuth(this.state.email, this.state.password, this.state.existingUser)}>Submit</Button>
                <Button classname="Neutral" onclick={() => {this.existingUserHandler(); this.props.switchForm()}}>Sign Up</Button>
            </div>   
        </>
        
        if(!this.state.existingUser) {
            form = 
            <>
                <div className={Styles.Name}>Sign Up</div>
                {errorMessage}
                <form className={Styles.Form}>
                    <input type="text" placeholder="E-mail" onChange={this.emailHandler}/>
                    <input type="password" placeholder="Password" onChange={this.passwordHandler}/>
                    <input type="password" placeholder="Repeat Password" onChange={this.passwordHandler}/>
                </form>
                <div className={Styles.ButtonsDiv}>
                    <Button classname="Success" onclick={() => this.props.onAuth(this.state.email, this.state.password, this.state.existingUser)}>Submit</Button>
                    <Button classname="Neutral" onclick={() => {this.existingUserHandler(); this.props.switchForm()}}>Login</Button>
                </div>   
            </>
        }
        return(
            <>{form}</>
        )
    }
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