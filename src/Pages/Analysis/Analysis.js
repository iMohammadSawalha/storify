import DoughnutChartCard from '../../Components/Analysis/DoughnutChart';
import RadarChartCard from '../../Components/Analysis/RadarChart';
import AreaLineChartCard from '../../Components/Analysis/AreaLineChart';
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