import {
    Chart,
    ArcElement,
    Legend,
    Tooltip,
  } from 'chart.js';
  import{Doughnut} from 'react-chartjs-2'
  import React ,{useState,useEffect} from 'react';
  import './components.css'
  
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
    responsive :true,
  })
  },[])
    return (
        <Doughnut options ={chartOptions} data={chartData}/>

  )}

  const DoughnutChartCard = () => {

    return (

            <div className='col-md-offset-1 col-md-2 col-sm-3 col-xs-4 ps-lg-2 mb-3'>
                <div className='card card-chart'>
            <div class="card-header">
                      <div class="row">
                        <div class="col-auto">
                          <h6 class="mb-0">Customers</h6>
                        </div>
                        </div>
                      </div>
                      <div className='card-body h-100 pe-0'>
                    <DoughnutChart/>
                    </div>
            </div>
        </div>
    )
    
    }

  export default DoughnutChartCard;