import React from "react";
import Styles from "./Product.module.css";

const Product = props =>{
    const total = props.fat + props.carbs + props.protein
    const carbs = (props.carbs/total)*100
    const protein = (props.protein/total)*100
    const fat = (props.fat/total)*100
    
    return (

    <div className={Styles.Container} title='Click to edit'>
        <div className={Styles.ProductAvatar}>
            <i className="fas fa-birthday-cake"></i>
        </div>
        <div className={Styles.ProductBody}>
            <div className={Styles.ProductName}>{props.name}</div>
            <div className={Styles.StatusBar}>
                <div 
                    className={Styles.StatusCarbsBar}
                    style={{width:`${carbs}%`}}>
                </div>
                <div 
                    className={Styles.StatusProteinBar}
                    style={{width:`${protein}%`, left:`${carbs}%`}}>
                </div>
                <div 
                    className={Styles.StatusFatBar}
                    style={{width:`${fat}%`, left:`${carbs+protein}%`}}>
                </div>
                {/* a lot of edge cases:
                    1) no carbs
                    2) no fat
                    3) less than 4% carbs or fat  */}
            </div>
            <div className={Styles.StatusBarLegend}>
                <div style={{color:'#FDB170'}}>{`${Math.round(carbs)}% CARBS`}</div>
                <div style={{color:'#85C5E4', marginLeft:'1em'}}>{`${Math.round(protein)}% PROTEIN`}</div>
                <div style={{color:'#F57899', marginLeft:'1em'}}>{`${Math.round(fat)}% FAT`}</div>
            </div>
            <button className={Styles.DeleteButton} title='Delete recipe'>Delete</button>
        </div>
    </div>

    // <div className={Styles.Product}
    //     onClick={props.clicked}>
    //     <div>{props.name}</div>
    //     <div className={Styles.Doughnut}>
    //         <Doughnut 
    //         data={{
    //             labels:["Fat", "Carbohydrates", "Protein"],
    //             datasets: [{
    //                 data:[props.fatCalories,props.carbohydratesCalories, props.proteinCalories],
    //                 backgroundColor:["#FF6384","#FFCE56","#36A2EB"]
    //             },]
    //         }}
    //         options={{
    //             legend:{
    //                 display: false
    //             },
    //             tooltips: {
    //                 callbacks: {
    //                     label:(tooltipItem,data)=>(`${data.labels[tooltipItem.index]} : ${(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]/data.datasets[tooltipItem.datasetIndex]._meta[Object.keys(data.datasets[tooltipItem.datasetIndex]._meta)[0]].total*100).toFixed(1)} %`)
    //                 }
    //             }
    //         }}/>
    //     </div>
    // </div>
)}

export default Product