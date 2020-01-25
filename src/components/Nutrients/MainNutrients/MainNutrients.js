import React from 'react';
import Styles from './MainNutrients.module.css'

const MainNutrients = (props) => {

    const checkIfOverH = amount => {
        if (amount < 100) {
            return amount
        } else {
            return amount = 100
        }
    } 

    const nutients = props.nutrientsDailyPart

    return (
        <div className={Styles.Nutrients}>
            <div  className={Styles.StatusBarInfo}>
                <span>Total Fat</span>
                <span>{`${nutients.FAT} %`}</span>
            </div>
            <div className={Styles.StatusBarBase}>
                <div className={[Styles.StatusBar, Styles.Fat].join(' ')} style={{width: `${checkIfOverH(nutients.FAT)}%`}}/>
            </div>
            
            
            <div className={Styles.StatusBarInfo}>
                <span>Saturated Fat</span>
                <span>{`${nutients.FASAT} %`}</span>
            </div>
            <div className={Styles.StatusBarBase}>
                <div className={[Styles.StatusBar, Styles.Fat].join(' ')} style={{width: `${checkIfOverH(nutients.FASAT)}%`}}/>
            </div>
            <div className={Styles.StatusBarInfo}>
                <span>Trans Fat</span>
                <span>{`${nutients.FATRN} %`}</span>
            </div>
            <div className={Styles.StatusBarBase}>
                <div className={[Styles.StatusBar, Styles.Fat].join(' ')} style={{width: `${checkIfOverH(nutients.FATRN)}%`}}/>
            </div>
            
            <div className={Styles.StatusBarInfo}>
                <span>Total Carbs</span>
                <span>{`${nutients.CHOCDF} %`}</span>
            </div>
            <div className={Styles.StatusBarBase}>
                <div className={[Styles.StatusBar, Styles.Carbs].join(' ')} style={{width: `${checkIfOverH(nutients.CHOCDF)}%`}}/>
            </div>
            
            <div className={Styles.StatusBarInfo}>
                <span>Dietry Fiber</span>
                <span>{`${nutients.FIBTG} %`}</span>
            </div>
            <div className={Styles.StatusBarBase}>
                <div className={[Styles.StatusBar, Styles.Carbs].join(' ')} style={{width: `${checkIfOverH(nutients.FIBTG)}%`}}/>
            </div>
            
            <div className={Styles.StatusBarInfo}>
                <span>Sugars</span>
                <span>{`${nutients.SUGAR} %`}</span>
            </div>
            <div className={Styles.StatusBarBase}>
                <div className={[Styles.StatusBar, Styles.Carbs].join(' ')} style={{width: `${checkIfOverH(nutients.SUGAR)}%`}}/>
            </div>
            
            <div className={Styles.StatusBarInfo}>
                <span>Protein</span>
                <span>{`${nutients.PROCNT} %`}</span>
            </div>
            <div className={Styles.StatusBarBase}>
                <div className={[Styles.StatusBar, Styles.Protein].join(' ')} style={{width: `${checkIfOverH(nutients.PROCNT)}%`}}/>
            </div>
        </div>
    );
}

export default MainNutrients;
