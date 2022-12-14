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
        labels : ['Nov 11','Nov 16','Nov 21','Nov 25','Nov 28','Dec 1'],
        datasets: [{
            type: 'line',
            label: 'Last Month: $16,218.31',
            data: [50,80,60,80,65,90],
            fill: true,
            borderColor: 'rgb(168, 172, 241)',
            backgroundColor: 'rgba(168, 172, 255,0.5)',
            order:1
        },
        {
            type: 'line',
            label: 'Prev Year: $14,823.03',
            data: [80,40,65,32,55,88],
            fill: false,
            borderColor: 'rgb(255, 172, 123)',
            order:2
        }],
    });
    setChartOptions({
        responsive: true,
        tension:0.4,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text:'Orders Comparison',
    },
  },
    });
},[]);
    return  (
        <Line options={chartOptions} data={chartData} />
    );
  }
  const AreaLineChartCard = () => {
    return (
    <div className='col-lg-6 col-md-8 col-sm-12 col-xs-12 ps-lg-2 mb-3'>
        <div className='card card-chart card-chart-custom'>
              <div className='card-body h-100 pe-0'>
            <AreaLineChart/>
            </div>
    </div>
</div>
    )
}

  export default AreaLineChartCard;