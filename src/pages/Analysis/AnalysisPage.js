import DataGridTable from '../../Components/Analysis/DataGrid';
import EnhancedTable from '../../Components/Analysis/OrdersTable';
import './Analysis.css';
import AnalysisCharts from './AnalysisCharts';

const Analysis = () => {
  return (
    <div className='Analysis'>
      <AnalysisCharts/>
      <DataGridTable/>
    </div>
)}
export default Analysis;