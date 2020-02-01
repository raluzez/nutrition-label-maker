import * as actionTypes from "../actions/actionTypes";

const initialState = {
  products: [],
  selectedProducts: []
};

const changeProductAmount = (state, product, amount) => {
  const allProducts = [...state.selectedProducts];
  return allProducts.map(item => {
    if (item.name === product.name) {
      return { ...item, quantity: Number(amount) };
    }
    return item;
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_PRODUCT:
      action.product.quantity = Number(action.amount);
      return {
        ...state,
        selectedProducts: state.selectedProducts.concat(action.product)
      };
    case actionTypes.CHANGE_AMOUNT:
      const selectedProducts = changeProductAmount(
        state,
        action.product,
        action.amount
      );
      return {
        ...state,
        selectedProducts
      };
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.products
      };
    case actionTypes.FETCH_PRODUCTS_FAIL:
      return {
        ...state
      };
    case actionTypes.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter(
          product => action.productKey !== product.key
        )
      };
    case actionTypes.DELETE_PRODUCT_FAIL:
      return {
        ...state,
        error: action.err
      };
    case actionTypes.EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.map(product =>
          product.key === action.product.key ? action.product : product
        )
      };
    case actionTypes.EDIT_PRODUCT_FAIL:
      return {
        ...state,
        error: action.err
      };
    case actionTypes.SAVE_PRODUCT_SUCCESS:
      return {
        ...state
      };
    case actionTypes.SAVE_PRODUCT_FAIL:
      return {
        ...state,
        error: action.err
      };
    case actionTypes.REMOVE_SELECTED_ITEM:
      return {
        ...state,
        selectedProducts: state.selectedProducts.filter( product => product.key !== action.productKey)
      }
    default:
      return state;
  }
};

export default reducer;
