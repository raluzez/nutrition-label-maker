import * as actionTypes from "../actions/actionTypes";

const initialState = {
    products:[
        {
            name:"Cheese",
            quantity:100,
            units:"g",
            totalNutrients : {
                ENERC_KCAL:{
                  label : "Energy",
                  quantity : 405.57,
                  unit : "kcal"
                },
                FAT : {
                  label : "Fat",
                  quantity : 33.21429,
                  unit : "g"
                },
                FASAT : {
                  label : "Saturated",
                  quantity : 18.93,
                  unit : "g"
                },
                FATRN : {
                  label : "Trans",
                  quantity : 0.893,
                  unit : "g"
                },
                CHOCDF : {
                  label : "Carbs",
                  quantity : 3.125,
                  unit : "g"
                },
                FIBTG : {
                  label : "Fiber",
                  quantity : 0,
                  unit : "g"
                },
                SUGAR : {
                  label : "Sugars",
                  quantity : 0.44643,
                  unit : "g"
                },
                PROCNT : {
                  label : "Protein",
                  quantity : 22.857,
                  unit : "g"
                },
                CHOLE : {
                  label : "Cholesterol",
                  quantity : 100,
                  unit : "mg"
                },
                NA : {
                  label : "Sodium",
                  quantity : 653.5714,
                  unit : "mg"
                },
                CA:{
                  label:"Calcium",
                  quantity:780,
                  unit:"mg"
                },
                FE:{
                  label:"Iron",
                  quantity:0.162,
                  unit:"mg"
                },
                VITA_RAE:{
                  label:"Vitamin A",
                  quantity:0.252,
                  unit:"µg"
                },
                VITC:{
                  label:"Vitamin C",
                  quantity:0,
                  unit:"mg"
              }
            }
        },{
            name:"Egg",
            quantity:100,
            units:"g",
            totalNutrients : {
                ENERC_KCAL:{
                  label : "Energy",
                  quantity : 144,
                  unit : "kcal"
                },
                FAT : {
                  label : "Fat",
                  quantity : 9.6,
                  unit : "g"
                },
                FASAT : {
                  label : "Saturated",
                  quantity : 3.2,
                  unit : "g"
                },
                FATRN : {
                  label : "Trans",
                  quantity : 0,
                  unit : "g"
                },
                CHOCDF : {
                  label : "Carbs",
                  quantity : 0.7,
                  unit : "g"
                },
                FIBTG : {
                  label : "Fiber",
                  quantity : 0,
                  unit : "g"
                },
                SUGAR : {
                  label : "Sugars",
                  quantity : 0.4,
                  unit : "g"
                },
                PROCNT : {
                  label : "Protein",
                  quantity : 12.6,
                  unit : "g"
                },
                CHOLE : {
                  label : "Cholesterol",
                  quantity : 372,
                  unit : "mg"
                },
                NA : {
                  label : "Sodium",
                  quantity : 142,
                  unit : "mg"
                },
                CA:{
                  label:"Calcium",
                  quantity:44,
                  unit:"mg"
                },
                FE:{
                  label:"Iron",
                  quantity:1.47,
                  unit:"mg"
                },
                VITA_RAE:{
                  label:"Vitamin A",
                  quantity:0.0658,
                  unit:"µg"
                },
                VITC:{
                  label:"Vitamin C",
                  quantity:0,
                  unit:"mg"
                }
            }
        },{
            name:"Superone Foods Hotdog Buns",
            quantity:100,
            units:"g",
            totalNutrients : {
                ENERC_KCAL:{
                  label : "Energy",
                  quantity : 282.05,
                  unit : "kcal"
                },
                FAT : {
                  label : "Fat",
                  quantity : 2.564,
                  unit : "g"
                },
                FASAT : {
                  label : "Saturated",
                  quantity : 0,
                  unit : "g"
                },
                FATRN : {
                  label : "Trans",
                  quantity : 0,
                  unit : "g"
                },
                CHOCDF : {
                  label : "Carbs",
                  quantity : 51.282,
                  unit : "g"
                },
                FIBTG : {
                  label : "Fiber",
                  quantity : 1.282,
                  unit : "g"
                },
                SUGAR : {
                  label : "Sugars",
                  quantity : 5.128,
                  unit : "g"
                },
                PROCNT : {
                  label : "Protein",
                  quantity : 7.6923,
                  unit : "g"
                },
                CHOLE : {
                  label : "Cholesterol",
                  quantity : 0,
                  unit : "mg"
                },
                NA : {
                  label : "Sodium",
                  quantity : 461.5385,
                  unit : "mg"
                },
                CA:{
                  label:"Calcium",
                  quantity: 120.9,
                  unit:"mg"
                },
                FE:{
                  label:"Iron",
                  quantity:3.24,
                  unit:"mg"
                },
                VITA_RAE:{
                  label:"Vitamin A",
                  quantity:0,
                  unit:"µg"
                },
                VITC:{
                  label:"Vitamin C",
                  quantity:0,
                  unit:"mg"
              }
            }
        }
    ],
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
        case actionTypes.ADD_PRODUCT:
            return {
                ...state,
                products: state.products.concat(action.product),
                showModal:false
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