import React from "react";
import Styles from "./ItemsList.module.css";
import Items from "./Items/Items";

const itemsList = (props) => (
            <div className={Styles.ItemsList}>
                <i className={`fas fa-plus ${Styles.Plus}`} onClick={props.addProductClicked}></i>
                <span className={Styles.Line}/>
                <Items items={props.selectedItems}/>
            </div>
        )

export default itemsList;