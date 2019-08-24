import React from "react";
import Styles from "./RecipeModalItems.module.css";


const recipeModalItems = (props) => {
    const items = props.recipeItems.map(item => (
        <>
            <div key={item.name} className={Styles.ItemContainer}>
                <p style={{maxWidth: "320px"}}>{item.name}</p>
                <div className={Styles.ItemContainer} style={{marginLeft:"auto", marginRight:"20px"}}>
                    <p>{item.quantity}</p>
                    <p className={Styles.Units}> g </p> 
                </div> 
                
            </div>   
        </>
    ))
    return items
}

export default recipeModalItems;