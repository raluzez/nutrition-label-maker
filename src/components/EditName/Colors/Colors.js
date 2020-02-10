import React from "react";
import * as consts from "../../../Utility/Consts";

const Colors = props => (
  <ul>
    {consts.colorsArray.map(color => (
      <li
        style={{
          background: consts[color],
          boxShadow: props.color === consts[color] && consts.selected
        }}
        onClick={() => props.onclick(consts[color])}
      />
    ))}
  </ul>
);

export default Colors;
