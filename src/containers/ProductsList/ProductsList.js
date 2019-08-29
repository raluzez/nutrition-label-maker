import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../../components/Product/Product";
import AddProduct from "../../components/Product/AddProduct/AddProduct";
import Modal from "../../components/UI/Modal/Modal";
import ProductModal from "../../components/Product/ProductModal/ProductModal";
import AddProductModal from "../../components/Product/AddProductModal/AddProductModal";
import * as actions from "../../Store/actions";
import Styles from "./ProductsList.module.css";


class ProductsList extends Component {
    state = { amountInput:""}

    componentDidMount () {
      this.props.onFetchProducts()
    }

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
              {this.props.clickedProduct 
              ? <ProductModal
                  product={this.props.clickedProduct}
                  buttonClickced={this.productSelectedHandler}
                  inputValue={this.state.amountInput}
                  inputChanged={event =>this.amountInputHandler(event)}
                  closeIconClicked={()=>this.props.onCloseModal()}/> 
              : <AddProductModal
                  closeIconClicked={()=>this.props.onCloseModal()}/>}
            </Modal>
            <div className={Styles.ProductList}>
              <AddProduct clicked={()=>this.props.onClickedProduct(null)} name="Add New Product"/>
              {(this.props.products || []).map(product =>(
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
    showModal: state.productList.showModal,
    clickedProduct: state.productList.clickedProduct,
    selectedProducts: state.productList.selectedProducts,
    products: state.productList.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSelectProduct: (product, amount) => dispatch(actions.productSelected(product, amount)),
    onClickedProduct: (product) => dispatch(actions.productClicked(product)),
    onCloseModal:() => dispatch(actions.closeModal()),
    onFetchProducts: () => dispatch(actions.fetchProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);