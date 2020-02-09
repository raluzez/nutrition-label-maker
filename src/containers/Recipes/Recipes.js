import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/Product/Product";
import { Portal } from "../../Utility/Portal";
import Nutrients from "../../components/Nutrients/Nutrients";
import { changeBackground } from "../../Utility/Helpers";
import { recipeClicked } from "../../Store/actions";
import Styles from "./Recipes.module.css";

const Recipes = () => {
  const [printNutritionFacts, setPrintNutritionFacts] = useState(null);
  const recipes = useSelector(state => state.recipe.savedRecipes);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    printNutritionFacts && window.print();
    return () => setPrintNutritionFacts(null);
  }, [printNutritionFacts, setPrintNutritionFacts]);

  let recipesList = (
    <>
      {(recipes || []).map(recipe => (
        <Product
          productList={recipe.items}
          key={recipe.key}
          recipe={recipe}
          print={currentProduct => setPrintNutritionFacts(currentProduct)}
          clicked={() => {
            dispatch(recipeClicked(recipe));
            history.push("/editRecipe");
            changeBackground("white");
          }}
        />
      ))}
    </>
  );

  return (
    <>
      <Portal>
        {printNutritionFacts && <Nutrients productList={printNutritionFacts} />}
      </Portal>
      <div className={Styles.AddRecipeButtonContainer}>
        <button
          onClick={() => {
            history.push("/");
            changeBackground("white");
          }}
        >
          Add Recipe
        </button>
      </div>
      <div className={Styles.Recipe}>{recipesList}</div>
    </>
  );
};

export default Recipes;
