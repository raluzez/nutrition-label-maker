import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../../components/Product/Product";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../../hoc/Aux/Aux";
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
                      quantity : 21814.306200000003,
                      unit : "kcal"
                    },
                    FAT : {
                      label : "Fat",
                      quantity : 1562.5579472000002,
                      unit : "g"
                    },
                    FASAT : {
                      label : "Saturated",
                      quantity : 538.5602623999998,
                      unit : "g"
                    },
                    FATRN : {
                      label : "Trans",
                      quantity : 0.015,
                      unit : "g"
                    },
                    CHOCDF : {
                      label : "Carbs",
                      quantity : 390.41195,
                      unit : "g"
                    },
                    FIBTG : {
                      label : "Fiber",
                      quantity : 48.5609,
                      unit : "g"
                    },
                    SUGAR : {
                      label : "Sugars",
                      quantity : 205.60635,
                      unit : "g"
                    },
                    PROCNT : {
                      label : "Protein",
                      quantity : 1466.6697507999997,
                      unit : "g"
                    },
                    CHOLE : {
                      label : "Cholesterol",
                      quantity : 6153.39888,
                      unit : "mg"
                    },
                    NA : {
                      label : "Sodium",
                      quantity : 14854.027320000001,
                      unit : "mg"
                    },
                    CA:{
                      label:"Calcium",
                      quantity:10.92,
                      unit:"mg"
                    },
                    FE:{
                      label:"Iron",
                      quantity:0.2184,
                      unit:"mg"
                    },
                    VITA_RAE:{
                      label:"Vitamin A",
                      quantity:5.46,
                      unit:"µg"
                    },
                    VITC:{
                      label:"Vitamin C",
                      quantity:8.372,
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
                      quantity : 21814.306200000003,
                      unit : "kcal"
                    },
                    FAT : {
                      label : "Fat",
                      quantity : 1562.5579472000002,
                      unit : "g"
                    },
                    FASAT : {
                      label : "Saturated",
                      quantity : 538.5602623999998,
                      unit : "g"
                    },
                    FATRN : {
                      label : "Trans",
                      quantity : 0.015,
                      unit : "g"
                    },
                    CHOCDF : {
                      label : "Carbs",
                      quantity : 390.41195,
                      unit : "g"
                    },
                    FIBTG : {
                      label : "Fiber",
                      quantity : 48.5609,
                      unit : "g"
                    },
                    SUGAR : {
                      label : "Sugars",
                      quantity : 205.60635,
                      unit : "g"
                    },
                    PROCNT : {
                      label : "Protein",
                      quantity : 1466.6697507999997,
                      unit : "g"
                    },
                    CHOLE : {
                      label : "Cholesterol",
                      quantity : 6153.39888,
                      unit : "mg"
                    },
                    NA : {
                      label : "Sodium",
                      quantity : 14854.027320000001,
                      unit : "mg"
                    },
                    CA:{
                      label:"Calcium",
                      quantity:10.92,
                      unit:"mg"
                  },
                  FE:{
                      label:"Iron",
                      quantity:0.2184,
                      unit:"mg"
                  },
                  VITA_RAE:{
                      label:"Vitamin A",
                      quantity:5.46,
                      unit:"µg"
                  },
                  VITC:{
                      label:"Vitamin C",
                      quantity:8.372,
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
          <Aux>
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
                {this.state.products.map(product =>(
                    <Product
                        name={product.name}
                        fatCalories={product.totalNutrients.FAT.quantity*9}
                        carbohydratesCalories={product.totalNutrients.CHOCDF.quantity*4}
                        proteinCalories={product.totalNutrients.PROCNT.quantity*4}
                        clicked={()=>this.props.onClickedProduct(product)}
                    />
                ))}
            </div>
          </Aux>
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