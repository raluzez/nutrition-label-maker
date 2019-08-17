import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Aux/Aux";
import Styles from "./Modal.module.css";

const modal = (props) => (
    <Aux>
        <Backdrop/>
        <div className={Styles.Modal}>
            {props.children}
        </div>
    </Aux>
)

export default modal;