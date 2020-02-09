import React from 'react';
import { useHistory } from "react-router-dom";
import Styles from './LandingPage.module.css';

const LandingPage = () => {
    const history = useHistory()

    return (
        <>
        <div className={Styles.BoxContainer}>
            <div className={Styles.FirstBox}/>
            <div className={Styles.SecondBox}/>
            <div className={Styles.ThirdBox}/>
        </div>
        
        
        <div className={Styles.HeaderText}>
            <span>Nutrition Facts</span>
            <span>Label creator</span>
        </div>
        <button className={Styles.Button} onClick={() => history.push('/auth')}>Get Started</button>
        <div className={Styles.Background}/>
        </>
    );
}

export default LandingPage;
