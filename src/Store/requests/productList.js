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