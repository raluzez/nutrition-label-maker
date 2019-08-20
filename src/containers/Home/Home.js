import React, { Component } from "react";
import { connect } from "react-redux";
import Aux from "../../hoc/Aux/Aux";
import ItemsList from "../../components/ItemsList/ItemsList";
import NutritionLabel from "../../components/NutritionLabel/NutritionLabel";


class Home extends Component {
    render(){
        return(
            <Aux>
                <ItemsList/>
                <NutritionLabel product={this.props.recipieAsProduct}/>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        recipieAsProduct : state.reciepieNutrients
    }
}

export default connect(mapStateToProps)(Home);