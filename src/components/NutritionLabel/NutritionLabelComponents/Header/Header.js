import React from "react";
import Styles from "./Header.module.css";

const header = (props) => (
    <div className={Styles.Header}>
        <div className={Styles.Headline}>
            <span>Nutrition</span>
            <span>Facts</span>
        </div>
        <div className={Styles.Summary}>
            {typeof props.servingSize !== "undefined" ?
                <div>{`Serving size ${props.servingSize}`}</div> :
                null
            }
            {typeof props.servingPerContainer !== "undefined" ?
                <div>{`Serving Size ${props.servingPerContainer}`}</div> :
                null
            }     
        </div>
    </div>
);

export default header;