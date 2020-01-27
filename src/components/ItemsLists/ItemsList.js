import React from "react";
import Item from "./Item/Item";
import Styles from "./ItemsList.module.css";

const ItemsList = props => {
  const saveButton = !props.recipe && props.items.length > 0

  const items = (
    <div className={Styles.ProductsListContainer}>
      {!props.items.length ? (
        <div className={Styles.NoProductsMessage}>
          No products yet! Add some
        </div>
      ) : (
        props.items.map(item => <Item item={item} key={item.key} isCreateRecipe={!props.recipe}/>)
      )}
    </div>
  );

  return (
    <div className={Styles.ProductsContainer}>
      <button style={{display: saveButton ? 'block' : 'none'}} className={Styles.AddButton} onClick={props.openSaveRecipeModal}>
            Save
      </button>
      <div className={Styles.ProductsTitleLine}>
        <div style={{display: !props.recipe ? 'none' : 'block'}}>{props.recipe && props.recipe.name}</div>
        <div style={{display: !props.recipe ? 'block' : 'none'}}>
          <span>New Recipe</span>
        </div>
        <i className="material-icons" style={{display: !props.recipe ? 'none' : 'block'}} onClick={props.openEditNameModal}>edit</i>
      </div>
      {items}
      <button className={Styles.AddButton} onClick={props.openAddProductModal}>
        Add
      </button>
    </div>
  );
};

export default ItemsList;
