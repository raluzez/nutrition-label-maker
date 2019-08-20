import React from "react";
import { connect } from "react-redux";
import Aux from "../../hoc/Aux/Aux";
import ItemsList from "../../components/ItemsList/ItemsList";
import NutritionLabel from "../../components/NutritionLabel/NutritionLabel";


const home = (props) =>(
            <Aux>
                <ItemsList addProductClicked={() =>props.history.push("/productlist")}/>
                <NutritionLabel product={props.recipieAsProduct}/>
            </Aux>
)

const mapStateToProps = state => {
    return {
        recipieAsProduct : state.reciepieNutrients
    }
}

export default connect(mapStateToProps)(home);