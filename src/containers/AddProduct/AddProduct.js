import React from 'react';
import Styles from './AddProduct.module.css';

const AddProduct = () => {
    return (
        <div className={Styles.Nutrients}>
            <div  className={Styles.StatusBarInfo}>
                <span>Total Fat</span>
                <input type="text"/>
            </div>
            <div className={Styles.StatusBarBase}>
                <div className={[Styles.StatusBar, Styles.Fat].join(' ')}/>
            </div>
            
            
            <div className={Styles.StatusBarInfo}>
                <span>Saturated Fat</span>
                <input type="text"/>
            </div>
            <div className={Styles.StatusBarBase}>
                <div className={[Styles.StatusBar, Styles.Fat].join(' ')}/>
            </div>
            <div className={Styles.StatusBarInfo}>
                <span>Trans Fat</span>
                <input type="text"/>
            </div>
            <div className={Styles.StatusBarBase}>
                <div className={[Styles.StatusBar, Styles.Fat].join(' ')}/>
            </div>
            
            <div className={Styles.StatusBarInfo}>
                <span>Total Carbs</span>
                <input type="text"/>
            </div>
            <div className={Styles.StatusBarBase}>
                <div className={[Styles.StatusBar, Styles.Carbs].join(' ')}/>
            </div>
            
            <div className={Styles.StatusBarInfo}>
                <span>Dietry Fiber</span>
                <input type="text"/>
            </div>
            <div className={Styles.StatusBarBase}>
                <div className={[Styles.StatusBar, Styles.Carbs].join(' ')}/>
            </div>
            
            <div className={Styles.StatusBarInfo}>
                <span>Sugars</span>
                <input type="text"/>
            </div>
            <div className={Styles.StatusBarBase}>
                <div className={[Styles.StatusBar, Styles.Carbs].join(' ')}/>
            </div>
            
            <div className={Styles.StatusBarInfo}>
                <span>Protein</span>
                <input type="text"/>
            </div>
            <div className={Styles.StatusBarBase}>
                <div className={[Styles.StatusBar, Styles.Protein].join(' ')}/>
            </div>
        </div>
    );
}

export default AddProduct;
