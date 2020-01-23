import React from "react";
import Item from "./Item/Item";
import Styles from "./ItemsList.module.css";

const ItemsList = props => {
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

  return (
    <div className={Styles.ProductsContainer}>
      <div className={Styles.ProductsTitleLine}>
        <div>Random Recipe</div>
      </div>
      {items}
      <div className={Styles.AddButton} onClick={props.openAddProductModal}>
        Add
      </div>
    </div>
  );
};

export default ItemsList;
