import React,{useState,useEffect} from 'react'
import {Line,Bar, Pie} from 'react-chartjs-2'
import 'chart.js'
import style from './Charts.module.css'


const url="https://covid19.mathdro.id/api";

const Charts=(props)=> {
const {dailyData,countryPicked}= props;
 
 
var dates= dailyData.map(date=>{
    return date.reportDate
})
console.log(dates);

var confirmedData= dailyData.map(confirmed=>{
    return confirmed.totalConfirmed
})
console.log(confirmedData);

var deathData= dailyData.map(deaths=>{
    return deaths.deaths.total
})
console.log(deathData);

const[confirmed,setconfirmed]=useState('');
const[recovered,setrecovered]=useState('');
const[deaths,setdeaths]=useState('');

useEffect(()=>{
    
    if(countryPicked&&countryPicked!="Global"){
    fetch(`${url}/countries/${countryPicked}`).then(res=>
    res.json()).then(result=>{
    console.log(result);
    setconfirmed(result.confirmed.value);
    setrecovered(result.recovered.value);
    setdeaths(result.deaths.value);
    })
}
},[countryPicked]);


var Chart= (!(countryPicked)||(countryPicked=="Global"))?

 (<Line
data={{
    labels:dates,
    datasets:[
        {
        data:confirmedData,
        label:"Infected",
        fill:true,
        backgroundColor:"rgba(0,0,255,0.6)",
        borderColor:"blue"
        },

        {
            data:deathData,
            label:"Deaths",
            fill:true,
            backgroundColor:"rgba(255,0,0,0.6)",
            borderColor:"red"
            }
     
  ]
}}
options={ {
    maintainAspectRatio: false,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true,
               

                
            }
        }]
    }
}}/>):(
    <Bar

    data={{
        labels:["Confirmed", "Recovered","Deaths"],
        datasets:[
            {
            data:[confirmed,recovered,deaths],
            label:countryPicked,
            fill:true,
            backgroundColor: [
                'rgba(0, 0, 255, 0.3)',
                'rgba(0, 255, 0, 0.3)',
                'rgba(255, 0, 0, 0.3)',
              ],
              borderColor: [
                'rgba(0,0,255,1)',
                'rgba(0, 255, 0, 1)',
                'rgba(255, 0, 0, 1)',
                        ],
                borderWidth:1
                }
             ]
        }}
        options={ {
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        }
                }]
            }
        }}
    />
)



    return (
    <div className={style.lineChartContainer} >
      {Chart}
     </div>
    )
}

export default Charts
