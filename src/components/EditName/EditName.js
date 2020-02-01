import React, { useState } from 'react';
import { connect } from "react-redux";
import { editProduct, saveProduct } from '../../Store/requests/productList';
import { editRecipeName } from '../../Store/requests/recipe';
import ProductIcons from './ProductIcons/ProductIcons';
import RecipeIcons from './RecipeIcons/RecipeIcons';
import Colors from './Colors/Colors';
import Styles from './EditName.module.css';

const EditName = (props) => {

    const [ iconName, setIconName] = useState(props.product.icon)
    const [ color, setColor ] = useState(props.product.color)
    const [ name, setName ] = useState(props.product.name)
    const [ isButtonActive, setIsButtonActive ] = useState(false)

    const updatedObject = (item) => {
        const updatedObject = {...item}
        updatedObject.color = color
        updatedObject.icon = iconName
        updatedObject.name = name
        return updatedObject
    } 

    const unselectedColor = 'linear-gradient(315deg, rgb(214, 214, 213) 0%, rgba(179, 178, 178, 0) 50%), rgb(116, 115, 115)'
    
    let onSave = () => props.onEditProduct(updatedObject(props.product))
    let icons = <ProductIcons onclick={iconName => {setIconName(iconName); activeButtonCondition(name, color, iconName)}} iconName={iconName}/>

    if(props.isRecipe){
        onSave = () => props.onEditRecipe(updatedObject(props.product))
        icons = <RecipeIcons onclick={iconName => setIconName(iconName)} iconName={iconName}/>
    }

    if(props.newProduct) {
        onSave = () => props.onSaveProduct(updatedObject(props.product))
    }

    const activeButtonCondition = (newName, newColor, newIcon) => {
        if(newName !== ('Name' && '') && newColor !== unselectedColor && newIcon !== 'fas fa-concierge-bell'){
            setIsButtonActive(true)
        }
    }

    return (
        <div className={Styles.Container}>
            <input type="text" placeholder={name} onChange={ e => {setName(e.target.value); activeButtonCondition(e.target.value, color, iconName)}}/>
            <div className={Styles.ProductAvatarContainer}>
                <div className={Styles.ProductAvatar} style={{background: color}}>
                    <i className={iconName}></i>
                </div>
                <div>
                    {icons}
                    <Colors onclick={color => {setColor(color); activeButtonCondition(name, color, iconName)}} color={color}/>
                </div>
            </div>
            {isButtonActive
                ? <button onClick={()=> {onSave(); props.closeModal()}}>Save</button>
                : <button className={Styles.AddProductButtonDisabled} disabled title='All fields must be filled'>Save</button>} 
        </div>
    );
}
  
const mapDispatchToProps = dispatch => {
    return {
      onEditProduct: product => dispatch(editProduct(product)),
      onEditRecipe: recipe => dispatch(editRecipeName(recipe)),
      onSaveProduct: product => dispatch(saveProduct(product))
    };
  };

export default connect(null, mapDispatchToProps)(EditName);
