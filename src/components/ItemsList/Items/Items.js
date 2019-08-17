import React from "react";
import Styles from "./Items.module.css";

const items = (props) => {
    console.log(props.items)
    const items = props.items.map(item => (
        <div key={item.name} className={Styles.ItemGrid}>
            <div className={Styles.Minus}><i className="fas fa-minus"></i></div>
            <div className={Styles.Name}>{item.name}</div>
            <div className={Styles.Amount}><input type="text" placeholder={item.quantity}/></div>
            <div className={Styles.Units}>
                { item.units}
            </div>
            <span className={Styles.Line}/>
        </div>   
    ))
    return items
}
    
    


export default items