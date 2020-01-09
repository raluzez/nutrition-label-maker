import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../../components/Product/Product";
import AddProduct from "../../components/Product/AddProduct/AddProduct";
import Modal from "../../components/UI/Modal/Modal";
import ProductModal from "../../components/Product/ProductModal/ProductModal";
import AddProductModal from "../../components/Product/AddProductModal/AddProductModal";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actions from "../../Store/actions";
import Styles from "./ProductsList.module.css";


class ProductsList extends Component {
    state = { amountInput:""}

    componentDidMount () {
      this.props.onFetchProducts(this.props.token, this.props.userId)
    }

    productSelectedHandler = () => {
      this.props.onSelectProduct(this.props.clickedProduct, this.state.amountInput);
      this.props.history.push("/")
    }

    amountInputHandler = (event) => {
      this.setState({amountInput:event.target.value})
    }

    render(){

      let productsList = <Spinner/>
      if (!this.props.loading) {
        productsList = 
        <>
          {/* <AddProduct clicked={()=>this.props.onClickedProduct(null)} name="Add New Product"/> */}
          {(this.props.products || []).map(product =>(
            <Product
              key={product.name}
              name={product.name}
              fat={product.totalNutrients.FAT.quantity}
              carbs={product.totalNutrients.CHOCDF.quantity}
              protein={product.totalNutrients.PROCNT.quantity}
              clicked={()=>this.props.onClickedProduct(product)}
          />
        ))}
      </>
    }
        return(
          <>
            <Modal show={this.props.showModal}>
              {this.props.clickedProduct 
              ? <ProductModal
                  product={this.props.clickedProduct}
                  buttonClickced={this.productSelectedHandler}
                  deleteProduct={() => {
                      this.props.onDeleteProduct(this.props.clickedProduct.key, this.props.token)
                      this.props.onCloseModal()
                      }}
                  inputValue={this.state.amountInput}
                  inputChanged={event =>this.amountInputHandler(event)}
                  closeIconClicked={()=>this.props.onCloseModal()}/> 
              : <AddProductModal
                  closeIconClicked={()=>this.props.onCloseModal()}/>}
            </Modal>
            <div className={Styles.AddProductButtonContainer}>
                <button onClick={()=>this.props.onClickedProduct()}>Add Recipe</button>
            </div>
            <div className={Styles.ProductList}>
              {productsList}
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
    products: state.productList.products,
    loading: state.productList.loading,
    token: state.auth.token,
    userId: state.auth.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSelectProduct: (product, amount) => dispatch(actions.productSelected(product, amount)),
    onClickedProduct: (product) => dispatch(actions.productClicked(product)),
    onCloseModal:() => dispatch(actions.closeModal()),
    onFetchProducts: (token, userId) => dispatch(actions.fetchProducts(token, userId)),
    onDeleteProduct: (productKey, token) => dispatch(actions.deleteProduct(productKey, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);