import React from 'react';
import Styles from './AddProductNutrients.module.css';

const AddProductNutrients = (props) => {

    const nutrientsInputHandler = (key, event) => {
        props.nutrients[key].quantity = Number(event.target.value)
        return props.nutrients
    } 

    return (
        <div className={Styles.NutrientsContainer}>
        <div className={Styles.Nutrients}>
            <div  className={Styles.StatusBarInfo}>
                <span>Total Fat</span>
                <input type="text"
                    placeholder='Amount'
                    onChange={ e => props.onchange(nutrientsInputHandler('FAT', e))}/>
            </div>
            <div className={Styles.StatusBarBase}>
                <div className={[Styles.StatusBar, Styles.Fat].join(' ')}/>
            </div>
            
            
            <div className={Styles.StatusBarInfo}>
                <span>Saturated Fat</span>
                <input type="text"
                    placeholder='Amount'
                    onChange={ e => props.onchange(nutrientsInputHandler('FASAT', e))}/>
            </div>
            <div className={Styles.StatusBarBase}>
                <div className={[Styles.StatusBar, Styles.Fat].join(' ')}/>
            </div>
            <div className={Styles.StatusBarInfo}>
                <span>Trans Fat</span>
                <input type="text"
                    placeholder='Amount'
                    onChange={ e => props.onchange(nutrientsInputHandler('FATRN', e))}/>
            </div>
            <div className={Styles.StatusBarBase}>
                <div className={[Styles.StatusBar, Styles.Fat].join(' ')}/>
            </div>
            
            <div className={Styles.StatusBarInfo}>
                <span>Total Carbs</span>
                <input type="text"
                    placeholder='Amount'
                    onChange={ e => props.onchange(nutrientsInputHandler('CHOCDF', e))}/>
            </div>
            <div className={Styles.StatusBarBase}>
                <div className={[Styles.StatusBar, Styles.Carbs].join(' ')}/>
            </div>
            
            <div className={Styles.StatusBarInfo}>
                <span>Dietry Fiber</span>
                <input type="text"
                    placeholder='Amount'
                    onChange={ e => props.onchange(nutrientsInputHandler('FIBTG', e))}/>
            </div>
            <div className={Styles.StatusBarBase}>
                <div className={[Styles.StatusBar, Styles.Carbs].join(' ')}/>
            </div>
            
            <div className={Styles.StatusBarInfo}>
                <span>Sugars</span>
                <input type="text"
                    placeholder='Amount'
                    onChange={ e => props.onchange(nutrientsInputHandler('SUGAR', e))}/>
            </div>
            <div className={Styles.StatusBarBase}>
                <div className={[Styles.StatusBar, Styles.Carbs].join(' ')}/>
            </div>
            
            <div className={Styles.StatusBarInfo}>
                <span>Protein</span>
                <input type="text"
                    placeholder='Amount'
                    onChange={ e => props.onchange(nutrientsInputHandler('PROCNT', e))}/>
            </div>
            <div className={Styles.StatusBarBase}>
                <div className={[Styles.StatusBar, Styles.Protein].join(' ')}/>
            </div>
            </div>
        <div className={Styles.Nutrients}>
            <div className={Styles.StatusBarInfo}>
        <span>Calories</span>
        <input type="text"
            placeholder='Amount'
            onChange={ e => props.onchange(nutrientsInputHandler('ENERC_KCAL', e))}/>
      </div>
      <div className={Styles.StatusBarBase} >
        <div
          className={[Styles.StatusBar, Styles.Calories].join(" ")}
        />
      </div>

      <div className={Styles.StatusBarInfo}>
        <span>Cholesterol</span>
        <input type="text"
            placeholder='Amount'
            onChange={ e => props.onchange(nutrientsInputHandler('CHOLE', e))}/>
      </div>
      <div className={Styles.StatusBarBase} >
        <div
          className={[Styles.StatusBar, Styles.Fat].join(" ")}
        />
      </div>

      <div className={Styles.StatusBarInfo}>
        <span>Sodium</span>
        <input type="text"
            placeholder='Amount'
            onChange={ e => props.onchange(nutrientsInputHandler('NA', e))}/>
      </div>
      <div className={Styles.StatusBarBase} >
        <div
          className={[Styles.StatusBar, Styles.Vitamins].join(" ")}
        />
      </div>

      <div className={Styles.StatusBarInfo}>
        <span>Iron</span>
        <input type="text"
            placeholder='Amount'
            onChange={ e => props.onchange(nutrientsInputHandler('FE', e))}/>
      </div>
      <div className={Styles.StatusBarBase} >
        <div
          className={[Styles.StatusBar, Styles.Vitamins].join(" ")}
        />
      </div>

      <div className={Styles.StatusBarInfo}>
        <span>Calcium</span>
        <input type="text"
            placeholder='Amount'
            onChange={ e => props.onchange(nutrientsInputHandler('CA', e))}/>
      </div>
      <div className={Styles.StatusBarBase} >
        <div
          className={[Styles.StatusBar, Styles.Vitamins].join(" ")}
        />
      </div>

      <div className={Styles.StatusBarInfo}>
        <span>Vitamin A</span>
        <input type="text"
            placeholder='Amount'
            onChange={ e => props.onchange(nutrientsInputHandler('VITA_RAE', e))}/>
      </div>
      <div className={Styles.StatusBarBase} >
        <div
          className={[Styles.StatusBar, Styles.Vitamins].join(" ")}
        />
      </div>

      <div className={Styles.StatusBarInfo}>
        <span>Vitamin C</span>
        <input type="text"
            placeholder='Amount'
            onChange={ e => props.onchange(nutrientsInputHandler('VITC', e))}/>
      </div>
      <div className={Styles.StatusBarBase} >
        <div
          className={[Styles.StatusBar, Styles.Vitamins].join(" ")}
        />
      </div>
        </div>
    </div>
    );
}

export default AddProductNutrients;
