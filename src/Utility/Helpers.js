import { newNutrientsObject } from "./Consts";

export const productListToNutrientsHelper = productsList => {
  const nutrientsObject = JSON.parse(JSON.stringify(newNutrientsObject));
  const overalQuantity = productsList.reduce(
    (acc, val) => acc + Number(val.quantity),
    0
  );
  Object.keys(nutrientsObject).map(
    key =>
      (nutrientsObject[key].quantity = productsList.reduce(
        (acc, val) =>
          acc + (val.totalNutrients[key].quantity * val.quantity) / 100,
        0
      ))
  );
  return { quantity: overalQuantity, totalNutrients: nutrientsObject };
};

export const changeBackground = color => {
  window.document.body.style.background = color;
  window.document.getElementsByTagName("header")[0].style.background = color;
};
