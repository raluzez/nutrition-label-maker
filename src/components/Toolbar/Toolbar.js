import React from "react";
import NavigationBar from "../Navigation/NavigationBar";
import Logo from "../Logo/Logo";
import Drawer from "../MobileNav/Drawer/Drawer";
import Styles from "./Toolbar.module.css";

const toolbar = () => (
    <header className={Styles.Toolbar}>
        <Drawer/>
        <nav>
            <NavigationBar/>
        </nav>
        <Logo/>
    </header>
);

export default toolbar;