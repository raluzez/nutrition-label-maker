import React from "react";
import Styles from "./Backdrop.module.css";

const backdrop = (props) => (
    <div 
        className={Styles.Backdrop} 
        style={{
        zIndex:props.show ? '100':'-100',
        display:props.show ? 'block':'none'}}/>
)

export default backdrop;