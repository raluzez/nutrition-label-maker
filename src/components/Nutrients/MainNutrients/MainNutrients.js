import React from 'react';
import Styles from './MainNutrients.module.css'

const MainNutrients = (props) => {
    return (
        <div className={Styles.Nutrients}>
            <div  className={Styles.StatusBarInfo}>
                <span>Total Fat</span>
                <span>{`${props.nutrientsDailyPart.FAT} %`}</span>
            </div>
            <div className={Styles.StatusBarBase}/>
            <div className={[Styles.StatusBar, Styles.Fat].join(' ')} style={{width: `${props.nutrientsDailyPart.FAT}%`}}/>
            
            <div className={Styles.StatusBarInfo}>
                <span>Saturated Fat</span>
                <span>{`${props.nutrientsDailyPart.FASAT} %`}</span>
            </div>
            <div className={Styles.StatusBarBase}/>
            <div className={[Styles.StatusBar, Styles.Fat].join(' ')} style={{width: `${props.nutrientsDailyPart.FASAT}%`}}/>
            <div className={Styles.StatusBarInfo}>
                <span>Trans Fat</span>
                <span>{`${props.nutrientsDailyPart.FATRN} %`}</span>
            </div>
            <div className={Styles.StatusBarBase}/>
            <div className={[Styles.StatusBar, Styles.Fat].join(' ')} style={{width: `${props.nutrientsDailyPart.FATRN}%`}}/>
            
            <div className={Styles.StatusBarInfo}>
                <span>Total Carbs</span>
                <span>{`${props.nutrientsDailyPart.CHOCDF} %`}</span>
            </div>
            <div className={Styles.StatusBarBase}/>
            <div className={[Styles.StatusBar, Styles.Carbs].join(' ')} style={{width: `${props.nutrientsDailyPart.CHOCDF}%`}}/>
            
            <div className={Styles.StatusBarInfo}>
                <span>Dietry Fiber</span>
                <span>{`${props.nutrientsDailyPart.FIBTG} %`}</span>
            </div>
            <div className={Styles.StatusBarBase}/>
            <div className={[Styles.StatusBar, Styles.Carbs].join(' ')} style={{width: `${props.nutrientsDailyPart.FIBTG}%`}}/>
            
            <div className={Styles.StatusBarInfo}>
                <span>Sugars</span>
                <span>{`${props.nutrientsDailyPart.SUGAR} %`}</span>
            </div>
            <div className={Styles.StatusBarBase}/>
            <div className={[Styles.StatusBar, Styles.Carbs].join(' ')} style={{width: `${props.nutrientsDailyPart.SUGAR}%`}}/>
            
            <div className={Styles.StatusBarInfo}>
                <span>Protein</span>
                <span>{`${props.nutrientsDailyPart.PROCNT} %`}</span>
            </div>
            <div className={Styles.StatusBarBase}/>
            <div className={[Styles.StatusBar, Styles.Protein].join(' ')} style={{width: `${props.nutrientsDailyPart.PROCNT}%`}}/>
        </div>
    );
}

export default MainNutrients;
