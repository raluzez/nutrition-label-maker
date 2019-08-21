import React from "react";
import { connect } from "react-redux";
import Styles from "./Items.module.css";
import Aux from "../../../hoc/Aux/Aux";
import get from "lodash.get";
import * as actions from "../../../Store/actions/productsList";

const items = (props) => {
    const items = get(props,'items').map(item => (
        <Aux>
            <div key={item.name} className={Styles.ItemContainer}>
                <i className={`fas fa-minus ${Styles.Minus}`} onClick={()=>props.onDeleteItem(item.name, item)}></i>
                <p>{item.name}</p>
                <p className={Styles.Units}> g </p>
                <input className={Styles.Input} type="text" placeholder={item.quantity} 
                     onChange={event => props.onChangeAmount(event.target.value, item)}/>   
            </div>  
            <span className={Styles.Line}/> 
        </Aux>
    ))
    return items
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteItem: (productName, product) => dispatch(actions.productDeleted(productName, product)),
        onChangeAmount: (amount, product) => dispatch(actions.changeItemAmount(amount, product))
    }
}

const mapStateToProps = state => {
    return {
        items : state.selectedProducts
    }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(items)