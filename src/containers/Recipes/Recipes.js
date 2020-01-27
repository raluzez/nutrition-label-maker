import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Product from "../../components/Product/Product";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actions from "../../Store/actions";
import Styles from "./Recipes.module.css";

const Recipes = props => {
  const { onFetchRecipes, token, userId } = props;

  let history = useHistory();

  useEffect(() => {
    onFetchRecipes(token, userId);
  }, [onFetchRecipes, token, userId]);

  let recipesList = <Spinner />;
  if (!props.loading) {
    recipesList = (
      <>
        {(props.recipes || []).map(recipe => (
          <Product
            productList={recipe.items}
            key={recipe.key}
            recipe={recipe}
            clicked={() => {
              props.onClickedRecipe(recipe);
              history.push('/editRecipe');
            }}
          />
        ))}
      </>
    );
  }

  return (
    <>
      <div className={Styles.AddRecipeButtonContainer}>
        <button onClick={() => props.history.push("/")}>Add Recipe</button>
      </div>
      <div className={Styles.Recipe}>{recipesList}</div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    recipes: state.recipe.savedRecipes,
    clickedRecipe: state.recipe.clickedRecipe,
    loading: state.recipe.loading,
    token: state.auth.token,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickedRecipe: recipe => dispatch(actions.recipeClicked(recipe)),
    onFetchRecipes: (token, userId) =>
      dispatch(actions.fetchRecipes(token, userId)),
    onEditRecipeItem: (amount, product, id, recipeId) => dispatch(actions.editRecipeItem(amount, product, id, recipeId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
