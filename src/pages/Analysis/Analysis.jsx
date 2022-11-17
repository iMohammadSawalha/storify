import DoughnutChartCard from '../../components/Analysis/DoughnutChart';
import RadarChartCard from '../../components/Analysis/RadarChart';
import AreaLineChartCard from '../../components/Analysis/AreaLineChart';
import './Analysis.css';

const Analysis = () => {
  return (
    <div className='Analysis'>
      <div className='row m-1'>
      <DoughnutChartCard/>
      <RadarChartCard/>
      </div>
      <div className='row m-1'>
        <AreaLineChartCard/>
      </div>
    </div>
)}
export default Analysis;