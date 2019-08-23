import React from "react";
import { connect } from "react-redux";
import AddProductNutritionLabel from "../../NutritionLabel/AddProductNutritionLabel/AddProductNutritionLabel";
import * as actions from "../../../Store/actions/productsList";
import Styles from "./AddProductModal.module.css";

const addProductModal = (props) => {

    let addedProduct = {
        name:"",
        quantity:100,
        units:"g",
        totalNutrients : {
            ENERC_KCAL:{
              label : "Energy",
              quantity : 0,
              unit : "kcal"
            },
            FAT : {
              label : "Fat",
              quantity : 0,
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
              quantity : 0,
              unit : "g"
            },
            FIBTG : {
              label : "Fiber",
              quantity : 0,
              unit : "g"
            },
            SUGAR : {
              label : "Sugars",
              quantity : 0,
              unit : "g"
            },
            PROCNT : {
              label : "Protein",
              quantity : 0,
              unit : "g"
            },
            CHOLE : {
              label : "Cholesterol",
              quantity : 0,
              unit : "mg"
            },
            NA : {
              label : "Sodium",
              quantity : 0,
              unit : "mg"
            },
            CA:{
              label:"Calcium",
              quantity: 0,
              unit:"mg"
            },
            FE:{
              label:"Iron",
              quantity:0,
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

    const addName = (event) => {
        addedProduct.name = event.target.value
        console.log(addedProduct)
    }

    const addNutrients = (event) => {
        addedProduct.totalNutrients[event.target.name].quantity = Number(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        props.onAddProduct(addedProduct)
        console.log(addedProduct)
    }
    return(
        <form onSubmit={onSubmit}>
            <i className={`fas fa-times ${Styles.CloseIcon}`} onClick={props.closeIconClicked}></i>
            <div className={Styles.Name}>Add New Product</div>
            <AddProductNutritionLabel addName={addName} addNutrients={addNutrients}/>
            <div>
                <button type="submit">Add Product</button>
            </div>   
        </form> 
)}

const mapDispatchToProps = dispatch => {
    return {
      onAddProduct:(product) => dispatch(actions.addProduct(product))
    }
  }

export default connect(null,mapDispatchToProps)(addProductModal);