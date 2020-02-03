import React, { useState } from 'react';
import { connect } from "react-redux";
import { editProduct } from '../../Store/requests/productList';
import { editRecipeName } from '../../Store/requests/recipe';
import ProductIcons from './ProductIcons/ProductIcons';
import RecipeIcons from './RecipeIcons/RecipeIcons';
import Colors from './Colors/Colors';
import Styles from './EditName.module.css';

const EditName = (props) => {

    const [ iconName, setIconName] = useState(props.product.icon)
    const [ color, setColor ] = useState(props.product.color)
    const [ name, setName ] = useState(props.product.name)

    const updatedObject = (item) => {
        const updatedObject = {...item}
        updatedObject.color = color
        updatedObject.icon = iconName
        updatedObject.name = name
        return updatedObject
    } 
    
    let onSave = () => props.onEditProduct(updatedObject(props.product))
    let icons = <ProductIcons onclick={iconName => setIconName(iconName)} iconName={iconName}/>

    if(props.isRecipe){
        onSave = () => props.onEditRecipe(updatedObject(props.product))
        icons = <RecipeIcons onclick={iconName => setIconName(iconName)} iconName={iconName}/>
    }

    return (
        <div className={Styles.Container}>
            <input type="text" placeholder={name} value={name} onChange={ e => setName(e.target.value)}/>
            <div className={Styles.ProductAvatarContainer}>
                <div className={Styles.ProductAvatar} style={{background: color}}>
                    <i className={iconName}></i>
                </div>
                <div>
                    {icons}
                    <Colors onclick={color => setColor(color)} color={color}/>
                </div>
            </div>
            <button onClick={()=> {onSave(); props.closeModal()}}>Save</button>
        </div>
    );
}
  
const mapDispatchToProps = dispatch => {
    return {
      onEditProduct: product => dispatch(editProduct(product)),
      onEditRecipe: recipe => dispatch(editRecipeName(recipe))
    };
  };

export default connect(null, mapDispatchToProps)(EditName);
