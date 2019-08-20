import React from "react";
import { connect } from "react-redux";
import Styles from "./Items.module.css";
import Aux from "../../../hoc/Aux/Aux";
import * as actions from "../../../Store/actions/productsList";

const items = (props) => {
    const items = props.items.map(item => (
        <Aux>
            <div key={item.name} className={Styles.ItemContainer}>
                <i className={`fas fa-minus ${Styles.Minus}`} onClick={()=>props.onDeleteItem(item.name, item)}></i>
                <p>{item.name}</p>
                <p className={Styles.Units}> g </p>
                <input className={Styles.Input} type="text" placeholder={item.quantity}/>   
            </div>  
            <span className={Styles.Line}/> 
        </Aux>
    ))
    return items
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteItem: (productName, product) => dispatch(actions.productDeleted(productName, product))
    }
}

const mapStateToProps = state => {
    return {
        items : state.selectedProducts
    }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(items)