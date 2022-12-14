import { Avatar } from '@mui/material';
import AreaLineChartCard from '../../Components/Analysis/AreaLineChart';
import DoughnutChartCard from '../../Components/Analysis/DoughnutChart';
import GridTable from '../../Components/Analysis/GridTables/GridTable';
import Orders from '../../Components/Analysis/GridTables/Orders-Latest.json';
import RadarChartCard from '../../Components/Analysis/RadarChart';
import './Analysis.css';
const columns = [
  { field: 'id', headerName: 'OrderID', width: 90 ,type: 'number'},
  {
    field: 'user',
    headerName: 'User Name',
    width: 150,
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
    width: 110,
    flex:2
  },
  {
    field: 'quantity',
    headerName: 'Quantity',
    width: 110,
    flex:1,
    type: 'number'
  },
  {
    field: 'order-total',
    headerName: 'Total',
    width: 110,
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
    width: 150,
    type:'date',
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