import AreaLineChartCard from '../../Components/Analysis/AreaLineChart';
import DoughnutChartCard from '../../Components/Analysis/DoughnutChart';
import GridTable from '../../Components/Analysis/GridTables/GridTable';
import RadarChartCard from '../../Components/Analysis/RadarChart';
import './Analysis.css';
import DataGridCol from "./DataGridColumn";
import Orders from './Orders-Latest.json';
const Analysis = () => {
  return (
    <div className='Analysis'>
      <div className='row'>
        <DoughnutChartCard/>
        <AreaLineChartCard/>
        <RadarChartCard/>
        <div className='row'>
         <GridTable tableTitle={"Latest Orders"} cols={DataGridCol} data={Orders}/> 
        </div>
      </div>
    </div>
)}
export default Analysis;