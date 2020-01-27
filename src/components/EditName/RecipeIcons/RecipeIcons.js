import React from 'react';
import * as consts from '../../../Utility/Consts';

const RecipeIcons = (props) => {

    const {onclick, iconName} = props

    const selected = 'inset 2px 2px 6px rgba(0, 0, 0, 0.5)'

    return (
        <ul>
            <li onClick={() => onclick(consts.defaultIcon)} 
                style={{boxShadow: iconName === consts.defaultIcon && selected}}>
                <i className={consts.defaultIcon}/>
            </li>
            <li onClick={() => onclick(consts.healthyIcon)} 
                style={{boxShadow: iconName === consts.healthyIcon && selected}}>
                <i className={consts.healthyIcon}></i>
            </li>
            <li onClick={() => onclick(consts.hotIcon)} 
                style={{boxShadow: iconName === consts.hotIcon && selected}}>
                <i className={consts.hotIcon}/>
            </li>
            <li onClick={() => onclick(consts.sweetIcon)} 
                style={{boxShadow: iconName === consts.sweetIcon && selected}}>
                <i className={consts.sweetIcon}/>
            </li>
            <li onClick={() => onclick(consts.fastIcon)} 
                style={{boxShadow: iconName === consts.fastIcon && selected}}>
                <i className={consts.fastIcon}/>
            </li>
        </ul>
    );
}

export default RecipeIcons;
