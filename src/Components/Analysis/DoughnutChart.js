import {
  ArcElement, Chart, Legend,
  Tooltip
} from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import './components.css';
  
  Chart.register(
    ArcElement,
    Tooltip,
    Legend
    );
  
  const DoughnutChart = () => {
    const [chartData,setChartData] = useState({
      datasets:[],
    });
    const[chartOptions,setChartOptions] = useState({});
  useEffect(() => {
  setChartData({
    labels: ['New Customers','Recurring Customers'],
    datasets: [
      {
        data: [,43, 57],
        backgroundColor: [
          'rgba(255, 100, 162, 0.8)',
          'rgba(116, 112, 225, 0.8)',
        ],
        hoverOffset: 10,
      },
    ],
  });
  setChartOptions({
    responsive :true,
    maintainAspectRatio:false,
  })
  },[])
    return (
        <Doughnut options ={chartOptions} data={chartData}/>

  )}

  const DoughnutChartCard = () => {

    return (

            <div className='col'>
                    <DoughnutChart/>
        </div>
    )
    
    }

  export default DoughnutChartCard;