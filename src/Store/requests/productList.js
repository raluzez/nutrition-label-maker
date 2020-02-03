import * as actions from "../actions/productsList";
import axios from "../../axios";

export const deleteProduct = productKey => dispatch => {
    const token = localStorage.getItem('token')
    axios.delete(`/products/${productKey}.json?auth=${token}`)
        .then( () =>  dispatch (actions.deleteProductSuccess(productKey) ))
        .catch(err => dispatch (actions.deleteProductFail(err)))
}

export const editProduct = product => dispatch =>{
    const token = localStorage.getItem('token') 
    axios.put(`/products/${product.key}.json?auth=${token}`, product) 
        .then( res => dispatch (actions.editProductSuccess(res.data)))
        .catch( err => dispatch (actions.editProductFail(err)))
}

export const saveProduct = product => dispatch => {
    const token = localStorage.getItem('token') 
    product.userId = localStorage.getItem('userId')
    product.units = 'g'
    axios.post(`/products.json?auth=${token}`, product)
        .then( res => {
            product.key = res.data.name
            dispatch (actions.saveProductSuccess(product));
            })
        .catch( err => dispatch (actions.saveProductFail(err)))
}

export const fetchProducts = () => dispatch => {
    const token = localStorage.getItem('token') 
    const userId = localStorage.getItem('userId')
    axios.get(`/products.json?auth=${token}&orderBy="userId"&equalTo="${userId}"`)
        .then( res => {
            const fetchedProducts = []
                for (const key in res.data) {
                    fetchedProducts.push({
                        ...res.data[key],
                        key: key
                    })
                }
                dispatch (actions.fecthProductsSuccess(fetchedProducts))
        })
        .catch(error => {
            dispatch (actions.fetchProductsFail(error))
        })
}