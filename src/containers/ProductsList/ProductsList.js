import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../../components/Product/Product";
import Modal from "../../components/UI/Modal/Modal";
import NutritionLabel from "../../components/NutritionLabel/NutritionLabel";
import Aux from "../../hoc/Aux/Aux";
import * as actions from "../../Store/actions/home";
import Styles from "./ProductsList.module.css";


class ProductsList extends Component {
    state = {products:[
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
                    }
                }
            },{
                name:"Egg",
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
                    }
                }
            }
        ]}

    render(){
        return(
          <Aux>
            <Modal>
              <NutritionLabel/>
            </Modal>
            <div className={Styles.ProductList}>
                {this.state.products.map(product =>(
                    <Product
                        name={product.name}
                        fatCalories={product.totalNutrients.FAT.quantity*9}
                        carbohydratesCalories={product.totalNutrients.CHOCDF.quantity*4}
                        proteinCalories={product.totalNutrients.PROCNT.quantity*4}
                        clicked={()=>this.props.onSelectProduct(product)}
                    />
                ))}
            </div>
          </Aux>
        )
    }
}

const mapDispatchToProps = dispatch => {
  return {
    onSelectProduct: (product) => dispatch(actions.selectProduct(product))
  }
}

export default connect(null, mapDispatchToProps)(ProductsList);