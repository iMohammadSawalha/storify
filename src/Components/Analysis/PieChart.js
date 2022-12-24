import { ArcElement, Chart, Legend, Tooltip } from "chart.js";
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);

const PieChart = ({ GlobalData }) => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});
  useEffect(() => {
    setChartData({
      labels: GlobalData.PieChart.labels,
      datasets: [
        {
          data: GlobalData.PieChart.data,
          backgroundColor: GlobalData.PieChart.bgcolor,
          hoverOffset: 10,
        },
      ],
    });
    setChartOptions({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
    });
  }, []);
  return <Pie options={chartOptions} data={chartData} />;
};

export default PieChart;
