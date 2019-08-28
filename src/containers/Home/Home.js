import React from "react";
import { connect } from "react-redux";
import Modal from "../../components/UI/Modal/Modal";
import RecipeModal from "../../components/Recipe/RecipeModal/RecipeModal"
import ItemsList from "../../components/ItemsList/ItemsList";
import NutritionLabel from "../../components/NutritionLabel/NutritionLabel";
import * as actions from "../../Store/actions";

const home = (props) =>{
    
    return(
            <>
                <Modal show={props.showModal}>
                    <RecipeModal
                        recipe={props.recipeAsProduct}
                        closeModal={props.onCloseModal}
                        addName={event => props.onAddRecipeName(event.target.value)}
                        recipeItems={props.selectedProducts}
                        saveRecipe={() => {
                            props.onSaveRecipe(props.recipeAsProduct); 
                            props.onCloseModal()}}/>
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
        recipeAsProduct : state.productList.recipeNutrients,
        selectedProducts : state.productList.selectedProducts,
        showModal : state.productList.showModal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSaveRecipeClicked :(product) => dispatch(actions.productClicked(product)),
        onCloseModal:() => dispatch(actions.closeModal()),
        onAddRecipeName: (recipeName) => dispatch(actions.addRecipeName(recipeName)),
        onSaveRecipe: (recipe) => dispatch(actions.saveRecipe(recipe))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(home);