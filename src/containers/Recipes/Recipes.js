import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Product from "../../components/Product/Product";
import { changeBackground } from '../../Utility/Helpers';
import * as actions from "../../Store/actions";
import Styles from "./Recipes.module.css";

const Recipes = props => {

  let history = useHistory();

  let recipesList = 
      <>
        {(props.recipes || []).map(recipe => (
          <Product
            productList={recipe.items}
            key={recipe.key}
            recipe={recipe}
            clicked={() => {
              props.onClickedRecipe(recipe);
              history.push('/editRecipe');
              changeBackground('white')
            }}
          />
        ))}
      </>

  return (
    <>
      <div className={Styles.AddRecipeButtonContainer}>
        <button onClick={() => {props.history.push("/"); changeBackground('white')}}>Add Recipe</button>
      </div>
      <div className={Styles.Recipe}>{recipesList}</div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    recipes: state.recipe.savedRecipes,
    clickedRecipe: state.recipe.clickedRecipe
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickedRecipe: recipe => dispatch(actions.recipeClicked(recipe))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
