import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Product from "../../components/Product/Product";
import { Portal } from '../../Utility/Portal';
import Nutrients from '../../components/Nutrients/Nutrients';
import { changeBackground } from '../../Utility/Helpers';
import * as actions from "../../Store/actions";
import Styles from "./Recipes.module.css";

const Recipes = props => {
  const [ printNutritionFacts, setPrintNutritionFacts ] = useState(null)
  const history = useHistory();

  useEffect(() => {
    printNutritionFacts && window.print()
    return () => setPrintNutritionFacts(null)
  }, [ printNutritionFacts, setPrintNutritionFacts ]);

  let recipesList = 
      <>
        {(props.recipes || []).map(recipe => (
          <Product
            productList={recipe.items}
            key={recipe.key}
            recipe={recipe}
            print={(currentProduct) => setPrintNutritionFacts(currentProduct)}
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
      <Portal>
        {printNutritionFacts && 
          <Nutrients productList={printNutritionFacts}/>}
      </Portal>
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
