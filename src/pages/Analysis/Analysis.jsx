import DoughnutChartCard from '../../components/DoughnutChart';
import RadarChartCard from '../../components/RadarChart';
import AreaLineChartCard from '../../components/AreaLineChart';
import './Analysis.css';

const Analysis = () => {
  return (
    <div className='Analysis'>
      <div className='row'>
      <DoughnutChartCard/>
      <RadarChartCard/>
      </div>
      <div className='row'>
        <AreaLineChartCard/>
      </div>
    </div>
)}
export default Analysis;