import AreaLineChartCard from "../../Components/Analysis/AreaLineChart";
import DoughnutChartCard from "../../Components/Analysis/DoughnutChart";
import RadarChartCard from "../../Components/Analysis/RadarChart";

const AnalysisCharts = () => {
    return (
        <div className="row">
        <DoughnutChartCard/>
        <AreaLineChartCard/>
        <RadarChartCard/>
        </div>
    )
}

export default AnalysisCharts;
