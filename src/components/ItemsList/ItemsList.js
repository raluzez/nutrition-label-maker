import React from "react";
import Styles from "./ItemsList.module.css";
import Button from "../UI/Button/Button";
import Items from "./Items/Items";

const itemsList = (props) => (
            <div className={Styles.ItemsList}>
                <div style={{display:"flex", alignItems:"center", flexDirection: "row"}}>
                    <i className={`fas fa-plus ${Styles.Plus}`} onClick={props.addProductClicked}></i>
                    {props.selectedProducts.length > 0 ?
                        <Button 
                            style={{marginBottom: "3px", marginLeft:"1rem"}}
                            classname="Success"
                            onclick={props.saveRecipeClicked}>
                                Save Recipe
                        </Button> :
                        null}
                </div>
                <span className={Styles.Line}/>
                <Items items={props.selectedItems}/>
            </div>
        )

export default itemsList;