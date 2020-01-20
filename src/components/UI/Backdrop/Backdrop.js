import React from "react";
import Styles from "./Backdrop.module.css";

const backdrop = (props) => (
    <div 
        className={Styles.Backdrop} 
        onClick={props.closeModal}
        style={{
        zIndex:props.show ? '100':'-100',
        display:props.show ? 'block':'none'}}>
            <i className="material-icons" onClick={props.closeModal}>clear</i>
    </div>
)

export default backdrop;