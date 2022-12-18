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
        label: '# of Votes',
        data: [43, 57],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
      },
    ],
  });
  setChartOptions({
    maintainAspectRatio:false,
    responsive :true
  })
  },[])
    return (
        <Doughnut options ={chartOptions} data={chartData}/>

  )}

  const DoughnutChartCard = () => {

    return (

            <div className='col-lg-3 col-md-6 col-sm-8 col-xs-12 ps-lg-2 mb-3'>
                <div className='card card-chart card-chart-custom'>
                      <div className='card-body h-100 pe-0'>
                    <DoughnutChart/>
                    </div>
            </div>
        </div>
    )
    
    }

  export default DoughnutChartCard;