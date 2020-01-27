import React from 'react';
import * as consts from '../../../Utility/Consts';

const ProductIcons = (props) => {

    const {onclick, iconName} = props

    const selected = 'inset 2px 2px 6px rgba(0, 0, 0, 0.5)'

    return (
                <ul>
                    <li onClick={() => onclick(consts.cheeseIcon)} 
                        style={{boxShadow: iconName === consts.cheeseIcon && selected}}>
                        <i className={consts.cheeseIcon}/>
                    </li>
                    <li onClick={() => onclick(consts.breadIcon)} 
                        style={{boxShadow: iconName === consts.breadIcon && selected}}>
                        <i className={consts.breadIcon}/>
                    </li>
                    <li onClick={() => onclick(consts.baconIcon)} 
                        style={{boxShadow: iconName === consts.baconIcon && selected}}>
                        <i className={consts.baconIcon}/>
                    </li>
                    <li onClick={() => onclick(consts.carrotIcon)} 
                        style={{boxShadow: iconName === consts.carrotIcon && selected}}>
                        <i className={consts.carrotIcon}/>
                    </li>
                    <li onClick={() => onclick(consts.appleIcon)} 
                        style={{boxShadow: iconName === consts.appleIcon && selected}}>
                        <i className={consts.appleIcon}/>
                    </li>
                </ul>
    );
}

export default ProductIcons;
