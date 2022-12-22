
import { ArcElement, Chart as ChartJS, Legend, RadialLinearScale, Tooltip } from 'chart.js';
import React, { useEffect, useState } from 'react';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const PolarChart = () => {
const [chartData,setChartData] = useState({datasets:[],});
const[chartOptions,setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
          labels: ['Organic Search', 'Social', 'Paid Search', 'Referral'],
          datasets: [
            {
              data: [32, 26, 17, 25],
              backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
              ],
              hoverOffset: 20,
            },
          ],
        });
        setChartOptions({
          responsive :true,
          maintainAspectRatio:false,
          scales: {
            r: {
              display: false
            }
          },
          plugins: {
            legend: {
              display:false,
        
            },
          },
        })
        },[]);
        
        
  return (<PolarArea data={chartData} options={chartOptions}/>);
}

export default PolarChart;
