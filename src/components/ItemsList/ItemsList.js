import React, { Component } from "react";
import Styles from "./ItemsList.module.css";
import { connect } from "react-redux";
import Items from "./Items/Items";

class ItemsList extends Component {
    state = {
        itemsList: [
            {
            nutrition:null,
            name: "Cheese",
            amount:{    
                amount:100,
                units:"grams"
                }
            },
            {
            nutrition:null,
            name: "Salt",
            amount:{   
                amount:2,
                units:["spoon","spoons"]
                }
            },
            {
            nutrition:null,
            name: "Egg",
            amount: {
                amount:1,
                units:null
                }
            }
        ]
    } 

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