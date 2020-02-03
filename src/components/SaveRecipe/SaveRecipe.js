import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import RecipeIcons from '../EditName/RecipeIcons/RecipeIcons';
import ProductIcons from '../EditName/ProductIcons/ProductIcons';
import Colors from '../EditName/Colors/Colors';
import { saveRecipe } from '../../Store/requests/recipe';
import { saveProduct } from '../../Store/requests/productList';
import { changeBackground } from '../../Utility/Helpers';
import * as consts from '../../Utility/Consts';
import Styles from './SaveRecipe.module.css';

const SaveRecipe = props => {
  const [name, setName] = useState('Recipe Name');
  const [ iconName, setIconName] = useState(props.isNewProduct ?consts.cheeseIcon :consts.defaultIcon)
  const [ color, setColor ] = useState(consts.orange)
  const [ isButtonActive, setIsButtonActive ] = useState(false)

  const history = useHistory()

  const newRecipeObject = () => {
    const newRecipeObject = new Object()
    newRecipeObject.color = color
    newRecipeObject.icon = iconName
    newRecipeObject.name = name
    newRecipeObject.items = props.selectedProducts;
    return newRecipeObject
  }

  const newProductObject = () => {
    const newProductObject = new Object()
    newProductObject.color = color
    newProductObject.icon = iconName
    newProductObject.name = name
    newProductObject.quantity = 100
    newProductObject.totalNutrients = props.nutrients;
    return newProductObject
  }

  let onSave = () => {props.onSaveRecipe(newRecipeObject()); history.push('/recipes'); changeBackground('#eee')}
  let icons = <RecipeIcons onclick={iconName => setIconName(iconName)} iconName={iconName}/>

  if(props.isNewProduct){
    onSave = () => {props.onSaveProduct(newProductObject()); history.push('/productList'); changeBackground('#eee')}
    icons = <ProductIcons onclick={iconName => setIconName(iconName)} iconName={iconName}/>
}

  return (
    <div className={Styles.Container}>
            <input type="text" placeholder={name} onChange={ e => {setName(e.target.value); setIsButtonActive(e.target.value && e.target.value !== '')}}/>
            <div className={Styles.ProductAvatarContainer}>
                <div className={Styles.ProductAvatar} style={{background: color}}>
                    <i className={iconName}></i>
                </div>
                <div>
                    {icons}
                    <Colors onclick={color => setColor(color)} color={color}/>
                </div>
            </div>
            {isButtonActive
                ? <button onClick={()=> onSave()}>Save</button>
                : <button className={Styles.AddProductButtonDisabled} disabled title='Recipe must have a name'>Save</button>}
        </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onSaveRecipe: recipe => dispatch(saveRecipe(recipe)),
    onSaveProduct: product => dispatch(saveProduct(product))
  };
};

export default connect(null, mapDispatchToProps)(SaveRecipe);
