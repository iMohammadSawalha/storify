import {
  ArcElement, BarController, BarElement, BubbleController, CategoryScale, Chart, Decimation, DoughnutController, Filler,
  Legend, LinearScale, LineController, LineElement, LogarithmicScale, PieController, PointElement, PolarAreaController,
  RadarController, RadialLinearScale, ScatterController, SubTitle, TimeScale,
  TimeSeriesScale, Title,
  Tooltip
} from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import './components.css';

  Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
  );
  const AreaLineChart = () => {
    const [chartData,setChartData] = useState({
        datasets:[],
    });
    const [chartOptions,setChartOptions] = useState({});

useEffect(() => {
    setChartData({
        labels : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov'],
        datasets: [{
            type: 'line',
            data: [90,170,130,98,60,89,72,82,73,89,211],
            fill: true,
            label:"2022",
            borderColor: 'rgb(168, 172, 241)',
            backgroundColor: 'rgba(168, 172, 255,0.65)',
            order:1
        },
        {
            type: 'line',
            data: [70,120,90,76,39,72,51,69,61,120,300],
            fill: true,
            label:"2021",
            borderColor: 'rgb(255, 172, 123)',
            backgroundColor: 'rgba(255, 172, 123,0.2)',
            order:2
        }],
    });
    setChartOptions({
        responsive: true,
        pointRadius: 5,
        pointHoverRadius: 7,
        scales: {
          y: {
            display: false,
          },
          x: {
            display: false,
          }
        },
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 0.4 ,
            to: 0.3,
            loop: true

          }
        },
        maintainAspectRatio:false,
  plugins: {
    legend: {
      position: 'chartArea',
      align:'start',
      labels:{
        padding:10,
        boxWidth:30,
        useBorderRadius:true,
        borderRadius:5,
      }
    },
    title:{
      display:false,
    }
  },
    });
},[]);
    return  (
        <Line options={chartOptions} data={chartData} />
    );
  }
  export default AreaLineChart;