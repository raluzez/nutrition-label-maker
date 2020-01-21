import React from "react";
import Styles from "./Backdrop.module.css";

const backdrop = (props) => (
    <div 
        className={Styles.Backdrop} 
        onClick={props.closeModal}
        style={{
        zIndex:props.show ? `${props.zIndex}`:'-100',
        display:props.show ? 'block':'none'}}>
    </div>
)

export default backdrop;