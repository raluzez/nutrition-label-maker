import * as actionTypes from "../actions/actionTypes";

const initialState = {
    selectedProducts:[],
    clickedProduct: "",
    showModal:false,
    reciepieNutrients : {   
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
    }
}



const addToRecipieNutrients = (state, productNutrients, amountOfProduct) => {
    let totalRecipies = state.reciepieNutrients.totalNutrients
    Object.keys(totalRecipies).map((key) => {
        const newNutrient = totalRecipies[key].quantity += (productNutrients[key].quantity/100)*amountOfProduct
        return {...totalRecipies[key], newNutrient}
    })
    return totalRecipies
}

const addToRecipieAmount = (state,amount) => {
    return state.reciepieNutrients.quantity + Number(amount)
}

const deleteFromRecipieNutrients = (state, productNutrients, amountOfProduct) => {
    let totalRecipies = {...state.reciepieNutrients.totalNutrients}
    Object.keys(totalRecipies).map((key) => {
        const newNutrient = totalRecipies[key].quantity -= (productNutrients[key].quantity/100)*amountOfProduct
        return {...totalRecipies[key], newNutrient}
    })
    return totalRecipies
}

const deleteFromRecipieAmount = (state, amount) => (
    state.reciepieNutrients.quantity - Number(amount)
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
    let totalRecipies = {...state.reciepieNutrients.totalNutrients}
    let oldAmount = 0
    state.selectedProducts.map(item =>{
        if(item.name === product.name){
            return oldAmount = item.quantity
        }
        return oldAmount
    })
    Object.keys(totalRecipies).map((key) => {
        let newNutrient = 0
        newNutrient = totalRecipies[key].quantity -= (product.totalNutrients[key].quantity/100)*oldAmount
        newNutrient = totalRecipies[key].quantity += (product.totalNutrients[key].quantity/100)*amountOfProduct
        return {...totalRecipies[key], newNutrient}
    })
    return totalRecipies
    }

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.SELECT_PRODUCT: 
            action.product.quantity = Number(action.amount)
            return {
                ...state,
                selectedProducts: state.selectedProducts.concat(action.product),
                showModal:false,
                reciepieNutrients : {
                    ...state.reciepieNutrients,
                    totalNutrients : addToRecipieNutrients(state, action.product.totalNutrients, action.product.quantity),
                    quantity : addToRecipieAmount(state, action.product.quantity)
                }
            }
        case actionTypes.DELETE_PRODUCT:
            return {
                ...state,
                selectedProducts: state.selectedProducts.filter(product => action.productName !== product.name),
                reciepieNutrients : {
                    ...state.reciepieNutrients,
                    totalNutrients : deleteFromRecipieNutrients(state, action.product.totalNutrients, action.product.quantity),
                    quantity : deleteFromRecipieAmount(state, action.product.quantity)
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
                reciepieNutrients: {
                    ...state.reciepieNutrients,
                    totalNutrients,
                    quantity
                }
            }
        case actionTypes.CLOSE_MODAL:
            return {
                ...state,
                showModal:false, 
                clickedProduct: ""
            }
        default: return state
    }
}

export default reducer;