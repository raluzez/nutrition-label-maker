import React from "react";
import Item from "./Item/Item";
import Styles from "./ItemsList.module.css";

const ItemsList = props => {
  const saveButton = props.isCreateRecipe && props.items.length > 0

  const items = (
    <div className={Styles.ProductsListContainer}>
      {!props.items.length ? (
        <div className={Styles.NoProductsMessage}>
          No products yet! Add some
        </div>
      ) : (
        props.items.map(item => <Item item={item} key={item.key} />)
      )}
    </div>
  );

  console.log(props.setName)

  return (
    <div className={Styles.ProductsContainer}>
      <button style={{display: saveButton ? 'block' : 'none'}} className={Styles.AddButton} onClick={props.openAddProductModal}>
            Save
      </button>
      <div className={Styles.ProductsTitleLine}>
        <div style={{display: props.isCreateRecipe ? 'none' : 'block'}}>{props.name}</div>
        <div style={{display: props.isCreateRecipe ? 'block' : 'none'}}>
          <span>New Recipe</span>
        </div>
      </div>
      {items}
      <button className={Styles.AddButton} onClick={props.openAddProductModal}>
        Add
      </button>
    </div>
  );
};

export default ItemsList;
