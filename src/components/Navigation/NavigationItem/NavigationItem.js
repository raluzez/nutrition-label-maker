import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "./NavigationItem.module.css";

const navigationItem = (props) => (
    <li className={Styles.NavigationItem} onClick={props.onclick}>
        <NavLink to={props.link} activeClassName={Styles.active} exact={props.exact}>
            {props.children}
        </NavLink>
    </li>
);

export default navigationItem;