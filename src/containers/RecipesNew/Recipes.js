import React, { useEffect } from "react";
import { connect } from "react-redux";
import Modal from "../../components/UI/Modal/Modal";
import AddProduct from "../../components/Product/AddProduct/AddProduct";
import Product from "../../components/Product/Product";
import RecipeModal from "../../components/Recipe/RecipeModal/RecipeModal";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actions from "../../Store/actions";
import Styles from "./Recipes.module.css";


const Recipes = props => {
    const { onFetchRecipes, token, userId } = props

    useEffect(() => {
        onFetchRecipes(token, userId)
    },[ onFetchRecipes, token, userId ])

    let recipesList = <Spinner/>
    if (!props.loading){
        recipesList = 
            <>
                {/* <AddProduct name="Add New Recipe" clicked={() => props.history.push("/")}/> */}
                    {(props.recipes || []).map(recipe =>(
                        <Product
                            key={recipe.name}
                            name={recipe.name}
                            fat={recipe.totalNutrients.FAT.quantity}
                            carbs={recipe.totalNutrients.CHOCDF.quantity}
                            protein={recipe.totalNutrients.PROCNT.quantity}
                            clicked={()=>{
                                props.onClickedRecipe(recipe);
                                props.onOpenModal()
                            }}
                        />))}
                </>
        }

    return(
        <>
            <Modal show={props.showModal}>
                <RecipeModal
                    product={props.clickedRecipe}
                    recipeItems={props.clickedRecipe.items}
                    closeIconClicked={()=>props.onCloseModal()}
                    deleteRecipe={() =>{
                        props.onDeleteRecipe(props.clickedRecipe.key, props.token)
                        console.log(props.clickedRecipe)
                        props.onCloseModal()
                    }}/>
            </Modal>
            <div className={Styles.Recipe}>
                {recipesList}  
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        recipes: state.recipe.savedRecipes,
        showModal: state.productList.showModal,
        clickedRecipe: state.recipe.clickedRecipe,
        loading: state.recipe.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onClickedRecipe: (recipe) => dispatch(actions.recipeClicked(recipe)),
      onOpenModal: () => dispatch(actions.openModal()),
      onCloseModal: () => dispatch(actions.closeModal()),
      onFetchRecipes: (token, userId) => dispatch(actions.fetchRecipes(token, userId)),
      onDeleteRecipe: (recipeKey, token) => dispatch(actions.deleteRecipe(recipeKey, token))
    }
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);