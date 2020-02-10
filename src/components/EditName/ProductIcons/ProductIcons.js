import React from "react";
import * as consts from "../../../Utility/Consts";

const ProductIcons = props => (
  <ul>
    {consts.productsIconsArray.map(icon => (
      <li
        onClick={() => props.onclick(consts[icon])}
        style={{
          boxShadow: props.iconName === consts[icon] && consts.selected
        }}
      >
        <i className={consts[icon]} />
      </li>
    ))}
  </ul>
);

export default ProductIcons;
