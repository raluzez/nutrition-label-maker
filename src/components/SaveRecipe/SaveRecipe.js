import React, { useState } from "react";
import { connect } from "react-redux";
import RecipeIcons from '../EditName/RecipeIcons/RecipeIcons';
import Colors from '../EditName/Colors/Colors';
import * as consts from '../../Utility/Consts';
import * as actions from "../../Store/actions";
import Styles from './SaveRecipe.module.css';

const SaveRecipe = props => {
  const [name, setName] = useState('Recipe Name');
  const [ iconName, setIconName] = useState(consts.defaultIcon)
  const [ color, setColor ] = useState(consts.orange)

  const newRecipeObject = () => {
    const newRecipeObject = new Object()
    newRecipeObject.color = color
    newRecipeObject.icon = iconName
    newRecipeObject.name = name
    newRecipeObject.items = props.selectedProducts;
    return newRecipeObject
}

console.log(props)
  return (
    <div className={Styles.Container}>
            <input type="text" placeholder={name} onChange={ e => setName(e.target.value)}/>
            <div className={Styles.ProductAvatarContainer}>
                <div className={Styles.ProductAvatar} style={{background: color}}>
                    <i className={iconName}></i>
                </div>
                <div>
                    <RecipeIcons onclick={iconName => setIconName(iconName)} iconName={iconName}/>
                    <Colors onclick={color => setColor(color)} color={color}/>
                </div>
            </div>
            <button onClick={()=> {props.onSaveRecipe(newRecipeObject()); props.closeModal()}}>Save</button>
        </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onSaveRecipe: recipe => dispatch(actions.saveRecipe(recipe))
  };
};

export default connect(null, mapDispatchToProps)(SaveRecipe);
