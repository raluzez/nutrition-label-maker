import * as actionTypes from "../actions/actionTypes";

const initialState = {
    products:[],
    selectedProducts:[],
    clickedProduct: "",
    showModal:false,
    recipeNutrients : {   
            name : "",
            quantity : 0,
            units : "g",
            totalNutrients : {
                ENERC_KCAL : {quantity : 0},
                FAT : {quantity : 0},
                FASAT : {quantity : 0},
                FATRN : {quantity : 0},
                CHOCDF : {quantity : 0},
                FIBTG : {quantity : 0},
                SUGAR : {quantity : 0},
                PROCNT : {quantity : 0},
                CHOLE : {quantity : 0},
                NA : {quantity : 0},
                CA : {quantity: 0},
                FE : {quantity: 0},
                VITA_RAE : {quantity : 0},
                VITC : {quantity : 0}
            }
    },
    loading: false
}



const addToRecipeNutrients = (state, productNutrients, amountOfProduct) => {
    let totalRecipes = state.recipeNutrients.totalNutrients
    Object.keys(totalRecipes).map((key) => {
        const newNutrient = totalRecipes[key].quantity += (productNutrients[key].quantity/100)*amountOfProduct
        return {...totalRecipes[key], newNutrient}
    })
    return totalRecipes
}

const addToRecipeAmount = (state,amount) => {
    return state.recipeNutrients.quantity + Number(amount)
}

const deleteFromRecipeNutrients = (state, productNutrients, amountOfProduct) => {
    let totalRecipes = {...state.recipeNutrients.totalNutrients}
    Object.keys(totalRecipes).map((key) => {
        const newNutrient = totalRecipes[key].quantity -= (productNutrients[key].quantity/100)*amountOfProduct
        return {...totalRecipes[key], newNutrient}
    })
    return totalRecipes
}

const deleteFromRecipeAmount = (state, amount) => (
    state.recipeNutrients.quantity - Number(amount)
)

const changeProductAmount = (state, product, amount) => {
    const allProducts = [...state.selectedProducts]
    return allProducts.map(item => {
        if (item.name === product.name) {
            return {...item, quantity: Number(amount)};
        }
        return item;
    })
}
 const changeTotalAmount = (selectedProducts) => {
     let quantity = 0
     selectedProducts.map(item => {
         return quantity += Number(item.quantity)
     })
     return quantity
 }

const changeTotalNutreants = (state, product, amountOfProduct) => {
    let totalRecipes = {...state.recipeNutrients.totalNutrients}
    let oldAmount = 0
    state.selectedProducts.map(item =>{
        if(item.name === product.name){
            return oldAmount = item.quantity
        }
        return oldAmount
    })
    Object.keys(totalRecipes).map((key) => {
        let newNutrient = 0
        newNutrient = totalRecipes[key].quantity -= (product.totalNutrients[key].quantity/100)*oldAmount
        newNutrient = totalRecipes[key].quantity += (product.totalNutrients[key].quantity/100)*amountOfProduct
        return {...totalRecipes[key], newNutrient}
    })
    return totalRecipes
    }

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.SELECT_PRODUCT: 
            action.product.quantity = Number(action.amount)
            return {
                ...state,
                selectedProducts: state.selectedProducts.concat(action.product),
                showModal:false,
                recipeNutrients : {
                    ...state.recipeNutrients,
                    totalNutrients : addToRecipeNutrients(state, action.product.totalNutrients, action.product.quantity),
                    quantity : addToRecipeAmount(state, action.product.quantity)
                }
            }
        case actionTypes.DELETE_PRODUCT:
            return {
                ...state,
                selectedProducts: state.selectedProducts.filter(product => action.productName !== product.name),
                recipeNutrients : {
                    ...state.recipeNutrients,
                    totalNutrients : deleteFromRecipeNutrients(state, action.product.totalNutrients, action.product.quantity),
                    quantity : deleteFromRecipeAmount(state, action.product.quantity)
                }
            }
        case actionTypes.CLICKED_PRODUCT:
            return {
                ...state,
                clickedProduct: action.product,
                showModal:true
            }
        case actionTypes.CHANGE_AMOUNT:
            const selectedProducts = changeProductAmount(state, action.product, action.amount);
            const totalNutrients = changeTotalNutreants(state, action.product, action.amount);
            const quantity = changeTotalAmount(selectedProducts)
            return {
                ...state,
                selectedProducts,
                recipeNutrients: {
                    ...state.recipeNutrients,
                    totalNutrients,
                    quantity
                }
            }
        case actionTypes.ADD_PRODUCT_START:
            return {
              ...state,
              loading: true
            }
        case actionTypes.ADD_PRODUCT_FAIL:
            return {
              ...state,
              loading: false
            }
        case actionTypes.ADD_PRODUCT_SUCCESS:
            console.log(action.product)
            return {
                ...state,
                products: state.products.concat(action.product),
                showModal:false,
                loading: false
            }
        case actionTypes.FETCH_PRODUCTS_START:
            return {
              ...state,
              loading: true
            }
        case actionTypes.FETCH_PRODUCTS_FAIL:
            return {
              ...state,
              loading: false
            }
        case actionTypes.FETCH_PRODUCTS_SUCCESS:
            return {
              ...state,
              products: action.products,
              loading: false
            }
        case actionTypes.CLOSE_MODAL:
            return {
                ...state,
                showModal:false, 
                clickedProduct: ""
            }
          case actionTypes.OPEN_MODAL:
              return {
                  ...state,
                  showModal:true
                }
        case actionTypes.ADD_RECIPE_NAME:
          return {
            ...state,
            recipeNutrients: {
              ...state.recipeNutrients,
              name: action.recipeName
            }
          }
        default: return state
    }
}

export default reducer;