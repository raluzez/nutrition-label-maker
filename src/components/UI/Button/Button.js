import React from "react";
import Styles from "./Button.module.css";

const button = (props) => (
    <button 
        className={Styles[props.classname]} 
        style={props.style}
        onClick={props.onclick}>
            {props.children}
    </button>
)

export default button;