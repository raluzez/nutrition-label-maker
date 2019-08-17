import React from "react";
import { Doughnut } from "react-chartjs-2";
import Styles from "./Product.module.css";

const product = (props) =>(
    <div className={Styles.Product}
        onClick={props.clicked}>
        <div>{props.name}</div>
        <div className={Styles.Doughnut}>
            <Doughnut 
            data={{
                labels:["Fat", "Carbohydrates", "Protein"],
                datasets: [{
                    data:[props.fatCalories,props.carbohydratesCalories, props.proteinCalories],
                    backgroundColor:["#FF6384","#FFCE56","#36A2EB"]
                },]
            }}
            options={{
                legend:{
                    display: false,
                    position:"left"
                },
                tooltips: {
                    callbacks: {
                        label:(tooltipItem,data)=>(`${data.labels[tooltipItem.index]} : ${(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]/data.datasets[tooltipItem.datasetIndex]._meta[Object.keys(data.datasets[tooltipItem.datasetIndex]._meta)[0]].total*100).toFixed(1)} %`)
                    }
                }
            }}/>
        </div>
    </div>
)

export default product