import React from "react";
import { connect } from "react-redux";
import Modal from "../../components/UI/Modal/Modal";
import RecipeModal from "../../components/Recipe/RecipeModal/RecipeModal"
import ItemsList from "../../components/ItemsList/ItemsList";
import NutritionLabel from "../../components/NutritionLabel/NutritionLabel";
import * as actions from "../../Store/actions/productsList";

const home = (props) =>{
    
    // const addName = (event) => 
    //     { console.log(props.recipeAsProduct.name )
    //         return(
    //         [...props.recipeAsProduct],
    //         props.recipeAsProduct.name = event.target.value
    //         )}
    

    return(
            <>
                <Modal show={props.showModal}>
                    <RecipeModal
                        recipe={props.recipeAsProduct}
                        closeIconClicked={props.onCloseModal}
                        addName={event => props.onAddRecipeName(event.target.value)}
                        recipeItems={props.selectedProducts}/>
                </Modal>
                <ItemsList 
                    addProductClicked={() =>props.history.push("/productlist")} 
                    selectedProducts={props.selectedProducts}
                    saveRecipeClicked={() => props.onSaveRecipeClicked(props.recipeAsProduct)}/>
                <NutritionLabel product={props.recipeAsProduct}/>
            </>
)}
const mapStateToProps = state => {
    return {
        recipeAsProduct : state.recipeNutrients,
        selectedProducts : state.selectedProducts,
        showModal : state.showModal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSaveRecipeClicked :(product) => dispatch(actions.productClicked(product)),
        onCloseModal:() => dispatch(actions.closeModal()),
        onAddRecipeName: (recipeName) => dispatch(actions.addRecipeName(recipeName)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(home);