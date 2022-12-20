import {
  ArcElement, BarController, BarElement, BubbleController, CategoryScale, Chart, Decimation, DoughnutController, Filler,
  Legend, LinearScale, LineController, LineElement, LogarithmicScale, PieController, PointElement, PolarAreaController,
  RadarController, RadialLinearScale, ScatterController, SubTitle, TimeScale,
  TimeSeriesScale, Title,
  Tooltip
} from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Radar } from 'react-chartjs-2';
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

  const RadarChart = () => {
    const [chartData,setChartData] = useState({
        datasets:[],
    });
    const[chartOptions,setChartOptions] = useState({});
    useEffect(() => {
        setChartData({
          labels: ['Organic Search', 'Social', 'Paid Search', 'Referral'],
          datasets: [
            {
              label: 'Traffic Source',
              data: [32, 26, 17, 25],
              fill: true,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgb(255, 99, 132)',
              pointBackgroundColor: 'rgb(255, 99, 132)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(255, 99, 132)'
            },
          ],
        });
        setChartOptions({
          tension:0.3,
          maintainAspectRatio:false,
          responsive :true
        });
        },[])
          return (
              <Radar data={chartData} options={chartOptions}/>
      
        )}
  
          const RadarChartCard = () => {
              return (
              <div className='col-lg-3 col-md-6 col-sm-8 col-xs-12 ps-lg-2 mb-3'>
                  <div className='card card-chart card-chart-custom'>
                        <div className='card-body h-100 pe-0'>
                      <RadarChart/>
                      </div>
              </div>
          </div>
              );
        }
         
        export default RadarChartCard;