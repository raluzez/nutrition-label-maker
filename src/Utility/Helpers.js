export const productListToNutrientsHelper = productsList => {
    const newNutrientsObject = {
      ENERC_KCAL:{quantity:0},
      FAT:{quantity:0},
      FASAT:{quantity:0},
      FATRN:{quantity:0}, 
      CHOLE:{quantity:0},
      NA:{quantity:0},
      CHOCDF:{quantity:0},
      FIBTG:{quantity:0},
      SUGAR:{quantity:0},
      PROCNT:{quantity:0},
      VITA_RAE:{quantity:0},
      VITC:{quantity:0},
      FE:{quantity:0},
      CA:{quantity:0}
    }
    let overalQuantity = 0;
    (productsList || []).map( product => {
      overalQuantity += Number(product.quantity)
      Object.keys(product.totalNutrients).map( key => {
        newNutrientsObject[key].quantity += (product.totalNutrients[key].quantity*product.quantity/100)
      })
    })
    return { quantity: overalQuantity, totalNutrients: newNutrientsObject}
    
  }