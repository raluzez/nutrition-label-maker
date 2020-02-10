import React from "react";
import * as consts from "../../../Utility/Consts";

const RecipeIcons = props => (
  <ul>
    {consts.recipeIconsArray.map(icon => (
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

export default RecipeIcons;
