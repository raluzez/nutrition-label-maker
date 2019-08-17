import React, { Component } from "react";
import Styles from "./ItemsList.module.css";
import { connect } from "react-redux";
import Items from "./Items/Items";

class ItemsList extends Component {

    render(){
        return(
            <div className={Styles.ItemsList}>
                <i className={`fas fa-plus ${Styles.Plus}`}></i><input type="text" placeholder="search bar"/>
                <hr/>
                <Items items={this.props.selectedItems}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedItems: state.selectedProducts
    }
}

export default connect(mapStateToProps)(ItemsList);