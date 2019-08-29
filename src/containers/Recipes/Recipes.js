import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "../../components/UI/Modal/Modal";
import AddProduct from "../../components/Product/AddProduct/AddProduct";
import Product from "../../components/Product/Product";
import RecipeModal from "../../components/Recipe/RecipeModal/RecipeModal";
import * as actions from "../../Store/actions";
import Styles from "./Recipes.module.css";


class Recepies extends Component {
    render(){
        return(
            <>
                <Modal show={this.props.showModal}>
                    <RecipeModal
                        product={this.props.clickedRecipe}
                        recipeItems={this.props.clickedRecipe.items}
                        closeIconClicked={()=>this.props.onCloseModal()}/>{console.log(this.props.clickedRecipe)}
                </Modal>
                <div className={Styles.Recipe}>
                    <AddProduct name="Add New Recipe" clicked={() => this.props.history.push("/")}/>
                    {(this.props.recipes || []).map(recipe =>(
                        <Product
                        key={recipe.name}
                        name={recipe.name}
                        fatCalories={recipe.totalNutrients.FAT.quantity*9}
                        carbohydratesCalories={recipe.totalNutrients.CHOCDF.quantity*4}
                        proteinCalories={recipe.totalNutrients.PROCNT.quantity*4}
                        clicked={()=>{
                            this.props.onClickedRecipe(recipe);
                            this.props.onOpenModal()
                        }}
                    />))}
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        recipes: state.recipe.savedRecipes,
        showModal: state.productList.showModal,
        clickedRecipe: state.recipe.clickedRecipe
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onClickedRecipe: (recipe) => dispatch(actions.recipeClicked(recipe)),
      onOpenModal:() => dispatch(actions.openModal()),
      onCloseModal:() => dispatch(actions.closeModal())
    }
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(Recepies);