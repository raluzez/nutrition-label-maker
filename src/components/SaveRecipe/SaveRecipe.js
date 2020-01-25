import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../Store/actions";

const SaveRecipe = props => {
  const [recipeName, setRecipeName] = useState(null);

  const recipe = new Object();

  recipe.items = props.selectedProducts;
  recipe.name = recipeName;

  return (
    <>
      <input type="text" onChange={e => setRecipeName(e.target.value)} />
      <button onClick={() => props.onSaveRecipe(recipe)}>Save Recipe</button>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onSaveRecipe: recipe => dispatch(actions.saveRecipe(recipe))
  };
};

export default connect(null, mapDispatchToProps)(SaveRecipe);
