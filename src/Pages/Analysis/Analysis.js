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
      <div className='row row align-items-start'>
          <div className='row'>
            <div className='col'>
            <DoughnutChartCard/>
            </div>
          </div>
          <div className='row'>
          <div className='col'>
            <RadarChartCard/>
            </div>
          </div>
          <div className='row'>
          <div className='col'>
          <AreaLineChartCard/>
          </div>
          </div>
      </div>
        <div className='row'>
         <GridTable tableTitle={"Latest Orders"} cols={DataGridCol} data={Orders}/> 
        </div>
    </div>
)}
export default Analysis;