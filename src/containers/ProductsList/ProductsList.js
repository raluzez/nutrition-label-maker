import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../../components/Product/Product";
import Modal from "../../components/UI/Modal/Modal";
import ProductModal from "../../components/Product/ProductModal/ProductModal";
import * as actions from "../../Store/actions/productsList";
import Styles from "./ProductsList.module.css";


class ProductsList extends Component {
    state = {
      amountInput:"",
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
        ]}

    productSelectedHandler = () => {
      this.props.onSelectProduct(this.props.clickedProduct, this.state.amountInput);
      this.props.history.push("/")
    }

    amountInputHandler = (event) => {
      this.setState({amountInput:event.target.value})
    }

    render(){
        return(
          <>
            <Modal show={this.props.showModal}>
              <ProductModal
              product={this.props.clickedProduct}
              buttonClickced={this.productSelectedHandler}
              inputValue={this.state.amountInput}
              inputChanged={event =>this.amountInputHandler(event)}
              closeIconClicked={()=>this.props.onCloseModal()}
              />
            </Modal>
            <div className={Styles.ProductList}>
                {(this.state.products || []).map(product =>(
                    <Product
                        key={product.name}
                        name={product.name}
                        fatCalories={product.totalNutrients.FAT.quantity*9}
                        carbohydratesCalories={product.totalNutrients.CHOCDF.quantity*4}
                        proteinCalories={product.totalNutrients.PROCNT.quantity*4}
                        clicked={()=>this.props.onClickedProduct(product)}
                    />
                ))}
            </div>
          </>
        )
    }
}

const mapStateToProps = state => {
  return {
    showModal: state.showModal,
    clickedProduct: state.clickedProduct
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSelectProduct: (product, amount) => dispatch(actions.productSelected(product, amount)),
    onClickedProduct: (product) => dispatch(actions.productClicked(product)),
    onCloseModal:() => dispatch(actions.closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);