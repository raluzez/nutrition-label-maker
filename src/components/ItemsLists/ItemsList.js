import React from "react";
import Item from "./Item/Item";
import Styles from "./ItemsList.module.css";

const ItemsList = props => {
  const { recipe, items } = props;
  const saveButton = !recipe && items.length > 0;

  const itemsList = (
    <div className={Styles.ProductsListContainer}>
      {!items.length ? (
        <div className={Styles.NoProductsMessage}>
          No products yet! Add some
        </div>
      ) : (
        items.map(item => (
          <Item item={item} key={item.key} isCreateRecipe={!recipe} />
        ))
      )}
    </div>
  );

  return (
    <div className={Styles.ProductsContainer}>
      <button
        style={{ display: saveButton ? "block" : "none" }}
        className={Styles.AddButton}
        onClick={props.openSaveRecipeModal}
      >
        Save
      </button>
      <div className={Styles.ProductsTitleLine}>
        <div style={{ display: !recipe ? "none" : "block" }}>
          {recipe && recipe.name}
        </div>
        <div style={{ display: !recipe ? "block" : "none" }}>
          <span>New Recipe</span>
        </div>
        <i
          className="material-icons"
          style={{ display: !recipe ? "none" : "block" }}
          onClick={props.openEditNameModal}
        >
          edit
        </i>
      </div>
      {itemsList}
      <button className={Styles.AddButton} onClick={props.openAddProductModal}>
        Add
      </button>
    </div>
  );
};

export default ItemsList;
