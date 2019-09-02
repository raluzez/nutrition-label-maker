import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../../components/UI/Button/Button";
import * as actions from "../../Store/actions";
import Styles from "./Auth.module.css";


class Auth extends Component {
    state = {
        existingUser:false,
        password:"",
        email:""
    }

    existingUserHandler = () => {
        this.setState({existingUser:!this.state.existingUser})
    }

    emailHandler = (event) => {
        this.setState({email: event.target.value})
    }

    passwordHandler = (event) => {
        this.setState({password: event.target.value})
    }
    render(){

        let form = 
        <>
            <div className={Styles.Name}>Login</div>
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
                <form className={Styles.Form}>
                    <input type="text" placeholder="E-mail" onChange={this.emailHandler}/>
                    <input type="password" placeholder="Password" onChange={this.passwordHandler}/>
                    <input type="password" placeholder="Repeat Password"/>
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

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp))
    }
} 

export default connect(null, mapDispatchToProps)(Auth);