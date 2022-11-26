import AreaLineChartCard from '../../Components/AreaLineChart';
import DoughnutChartCard from '../../Components/DoughnutChart';
import RadarChartCard from '../../Components/RadarChart';
import './Analysis.css';

const Analysis = () => {
  return (
    <div className='Analysis'>
      <div className='row'>
        <DoughnutChartCard/>
        <AreaLineChartCard/>
        <RadarChartCard/>
      </div>
    </div>
)}
export default Analysis;