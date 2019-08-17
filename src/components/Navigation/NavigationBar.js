import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import Styles from "./NavigationBar.module.css";

const navigationBar = () => {
    return (
        <ul className={Styles.NavigationBar}>
            <NavigationItem link="/" exact>Home</NavigationItem>
            <NavigationItem link="/productlist">My List</NavigationItem>
            <NavigationItem link="/recipes">Recipies</NavigationItem>
            <NavigationItem link="/auth">Login</NavigationItem>
        </ul>    
    )
}
    

export default navigationBar;