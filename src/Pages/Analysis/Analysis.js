import { Avatar } from '@mui/material';
import { Button } from 'react-bootstrap';
import AreaLineChartCard from '../../Components/Analysis/AreaLineChart';
import DoughnutChartCard from '../../Components/Analysis/DoughnutChart';
import GridTable from '../../Components/Analysis/GridTables/GridTable';
import Orders from '../../Components/Analysis/GridTables/Orders-Latest.json';
import RadarChartCard from '../../Components/Analysis/RadarChart';
import './Analysis.css';
const columns = [
  { field: 'id', headerName: 'OrderID', minWidth: 90 ,type: 'number'},
  {
    field: 'user',
    headerName: 'User Name',
    minWidth: 150,
    flex:2,
    renderCell: (params) => {
      return (
        <>
          <Avatar src={params.value.avatar}/>
            {params.value.username}
        </>
      );
    }
  },
  {
    field: 'item-name',
    headerName: 'Item Name',
    minWidth: 110,
    flex:2
  },
  {
    field: 'quantity',
    headerName: 'Quantity',
    minWidth: 110,
    flex:1,
    type: 'number'
  },
  {
    field: 'order-total',
    headerName: 'Total',
    minWidth: 110,
    flex:1,
    type: 'number',
    renderCell: (params) => {
      return (
        <>
            ${params.value}
        </>
      );
    }
  },
  {
    field: 'date',
    headerName: 'Date',
    minWidth: 160,
    type:'date',
  },
  {
    field: 'status',
    headerName: 'Status',
    minWidth: 150,
    type:'number',
    renderCell: (params) => {
      if(params.value == 10)
              return (<Button variant='btn btn-success btn-radius btn-sm'>Completed</Button>);
              else if(params.value > 0)
              return(<Button variant='btn btn-warning btn-radius btn-sm'>Pending</Button>);
              else if(params.value == 0)
              return (<Button variant='btn btn-outline-danger btn-radius btn-sm'>Cancelled</Button>)
    }
  },
];
const Analysis = () => {
  return (
    <div className='Analysis'>
      <div className='row'>
        <DoughnutChartCard/>
        <AreaLineChartCard/>
        <RadarChartCard/>
        <div className='row'>
         <GridTable tableTitle={"Latest Orders"}cols={columns} data={Orders}/> 
        </div>
      </div>
    </div>
)}
export default Analysis;