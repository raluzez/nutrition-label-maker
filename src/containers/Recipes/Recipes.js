import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import InformationModal from "../../components/UI/InformationModal/Modal";
import AddProductModal from '../../components/UI/AddProductModal/Modal';
import AddProduct from '../../components/Product/AddProduct/AddProduct';
import Product from "../../components/Product/Product";
import Nutrients from '../../components/Nutrients/Nutrients';
import Spinner from "../../components/UI/Spinner/Spinner";
import ItemsList from '../../components/ItemsLists/ItemsList';
import * as actions from "../../Store/actions";
import Styles from "./Recipes.module.css";

const Recipes = props => {
  const { onFetchRecipes, token, userId } = props;

  const [recipeInformationModal, setRecipeInformationModal] = useState(false);
  const [addProductModal, setAddProductModal] = useState(false);

  useEffect(() => {
    onFetchRecipes(token, userId);
  }, [onFetchRecipes, token, userId]);

  let recipesList = <Spinner />;
  if (!props.loading) {
    recipesList = (
      <>
        {(props.recipes || []).map(recipe => (
          <Product
            key={recipe.name}
            name={recipe.name}
            fat={recipe.totalNutrients.FAT.quantity}
            carbs={recipe.totalNutrients.CHOCDF.quantity}
            protein={recipe.totalNutrients.PROCNT.quantity}
            clicked={() => {
              props.onClickedRecipe(recipe);
              setRecipeInformationModal(true);
            }}
          />
        ))}
      </>
    );
  }

  return (
    <>
      <AddProductModal
        show={addProductModal}
        closeModal={() => setAddProductModal(false)}
        backdropZIndex='510'
      >
        <AddProduct
          products={props.products}
          selectedProducts={props.clickedRecipe.items || []}
          closeModal={() => setAddProductModal(false)}
        />
      </AddProductModal>
      <InformationModal show={recipeInformationModal} closeModal={() => setRecipeInformationModal(false)} backdropZIndex='110'>
        <ItemsList
          items={props.clickedRecipe.items || []}
          openAddProductModal={() => setAddProductModal(true)}
          onChangeAmount={(amount, product, id) => props.onEditRecipeItem(amount, product, id, props.clickedRecipe.key)}
        />
        <Nutrients product={props.clickedRecipe} />
      </InformationModal>
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
    products: state.productList.products,
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
    onDeleteRecipe: (recipeKey, token) =>
      dispatch(actions.deleteRecipe(recipeKey, token)),
    onEditRecipeItem: (amount, product, id, recipeId) => dispatch(actions.editRecipeItem(amount, product, id, recipeId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
