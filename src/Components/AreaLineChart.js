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
  import{Line} from 'react-chartjs-2'
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
      text: 'Chart.js Line Chart',
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
    <div className='col-lg-4 col-md-6 col-sm-8 col-xs-12 ps-lg-2 mb-3'>
        <div className='card card-chart'>
    <div class="card-header">
              <div class="row flex-between-center">
                <div class="col-auto">
                  <h6 class="mb-0">AreaLineChart</h6>
                </div>
                <div class="col-auto d-flex">
                  </div>
                </div>
              </div>
              <div className='card-body h-100 pe-0'>
            <AreaLineChart/>
            </div>
    </div>
</div>
    )
}

  export default AreaLineChartCard;