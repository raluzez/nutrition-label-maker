import * as actionTypes from "./actionTypes";
import * as consts from '../../Utility/Consts';
import axios from "../../axios";

export const productSelected = (product, amount) => {
    return {
        type: actionTypes.SELECT_PRODUCT,
        product: product,
        amount: amount
    }
}

export const productDeleted = (productId, product) => {
    return {
        type : actionTypes.DELETE_PRODUCT,
        productId,
        product
    }
}

export const productClicked = (product) => {
    return {
        type: actionTypes.CLICKED_PRODUCT,
        product
    }
}

export const changeItemAmount = (amount, product) => {
    return {
        type: actionTypes.CHANGE_AMOUNT,
        product,
        amount
    }
}

export const addProductStart = () => {
    return {
        type: actionTypes.ADD_PRODUCT_START
    }
}

export const addProductFail = (error) => {
    return {
        type: actionTypes.ADD_PRODUCT_FAIL,
        error
    }
}

export const addProductSuccess = (product) => {
    return {
        type: actionTypes.ADD_PRODUCT_SUCCESS,
        product
        
    }
}

export const addProduct = (product, token, userId) => {
    product.userId = userId
    return dispatch => {
        dispatch(addProductStart())
        axios.post(`/products.json?auth=${token}`, product)
            .then((res) => {
                product.key = res.data.name
                dispatch(addProductSuccess(product));
            })
            .catch(error => dispatch(addProductFail(error)))
    }
}

export const fetchProductsStart = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_START
    }
}

export const fetchProductsFail = (error) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_FAIL,
        error
    }
}

export const fecthProductsSuccess = (products) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        products
    }
}

export const fetchProducts = (token, userId) => {
    return dispatch => {
        dispatch(fetchProductsStart())
        axios.get(`/products.json?auth=${token}&orderBy="userId"&equalTo="${userId}"`)
            .then(response => {
                const fetchedProducts = []
                for (const key in response.data) {
                    fetchedProducts.push({
                        ...response.data[key],
                        key: key
                    })
                }
                dispatch(fecthProductsSuccess(fetchedProducts))
            })
            .catch(error => {
                dispatch(fetchProductsFail(error))
            })
    }
}

export const deleteProductFail = err => {
    return {
        type: actionTypes.DELETE_PRODUCT_FAIL,
        err
    }
}

export const deleteProductSuccess = productKey => {
    return {
        type: actionTypes.DELETE_PRODUCT_SUCCESS,
        productKey
    }
}

export const addRecipeName = (recipeName) => {
    return {
        type: actionTypes.ADD_RECIPE_NAME,
        recipeName: recipeName
    }
}

export const editProductSuccess = product => {
    return {
        type: actionTypes.EDIT_PRODUCT_SUCCESS,
        product
    }
}

export const editProductFail = err => {
    return {
        type: actionTypes.EDIT_PRODUCT_FAIL,
        err
    }
}