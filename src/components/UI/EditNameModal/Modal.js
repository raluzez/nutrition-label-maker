import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import Styles from "./Modal.module.css";

const modal = (props) => (
    <>
        <Backdrop closeModal={props.closeModal}/>
        <div className={Styles.Modal}>
            <i className="material-icons" onClick={props.closeModal}>clear</i>
            {props.children}
        </div>
    </>
)

export default modal;