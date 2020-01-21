import React from "react";
import NavigationBar from "../Navigation/NavigationBar";
import Logo from "../Logo/Logo";
import Styles from "./Toolbar.module.css";

const toolbar = () => (
    <header className={Styles.Toolbar}>
        <div className={Styles.ToolbarVizuals}>
            <Logo/>
            <div className={Styles.ToolbarLine}/>
        </div>
        <nav>
            <NavigationBar/>
        </nav>
    </header>
);

export default toolbar;