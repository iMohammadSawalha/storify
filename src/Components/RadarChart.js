import {
    Chart,
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
  } from 'chart.js';
  import{Radar} from 'react-chartjs-2'
  import React ,{useState,useEffect} from 'react';
  import './components.css'

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
        });
        },[])
          return (
              <Radar data={chartData} options={chartOptions}/>
      
        )}
  
          const RadarChartCard = () => {
              return (
              <div className='col-lg-6 ps-lg-2 mb-3'>
                  <div className='card card-chart'>
              <div class="card-header">
                        <div class="row flex-between-center">
                          <div class="col-auto">
                            <h6 class="mb-0">Traffic Source</h6>
                          </div>
                          <div class="col-auto d-flex">
                            </div>
                          </div>
                        </div>
                        <div className='card-body h-100 pe-0'>
                      <RadarChart/>
                      </div>
              </div>
          </div>
              );
        }
         
        export default RadarChartCard;