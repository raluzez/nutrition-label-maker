import React, { useState } from 'react';
import { connect } from "react-redux";
import { productSelected } from '../../../../Store/actions/index';
import Styles from './AddProductItem.module.css';

const AddProductItem = (props) => {
    const [productAmount, setProductAmount] = useState(null)

    const inputChangeHandler = e => {
        setProductAmount(e.target.value)
    }

    return (
        <div
        className={Styles.Container}
      >
        <div className={Styles.ProductAvatar}>
          <i className="fas fa-birthday-cake"></i>
        </div>
        <div className={Styles.ProductBody}>
            <div className={Styles.ProductName}>
                {props.product.name}
            </div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <input type="text" placeholder='Amount' onChange={inputChangeHandler}/>
                <span className={Styles.InputUnits}>g</span>
                {productAmount&&
                    <button className={Styles.AddProductButton} onClick={() => props.onSelectProduct(props.product, productAmount)}>Add</button>}
            </div>
            
        </div>
      </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onSelectProduct: (product, amount) => dispatch(productSelected(product, amount))
    }
}

export default connect(null, mapDispatchToProps)(AddProductItem);
