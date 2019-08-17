import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import ItemsList from "../../components/ItemsList/ItemsList";
import NutritionLabel from "../../components/NutritionLabel/NutritionLabel";


class Home extends Component {
    render(){
        return(
            <Aux>
                <ItemsList/>
                <NutritionLabel/>
            </Aux>
        )
    }
}

export default Home;