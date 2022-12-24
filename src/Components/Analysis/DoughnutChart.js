import { ArcElement, Chart, Legend, Tooltip } from "chart.js";
import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
Chart.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ GlobalData }) => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});
  useEffect(() => {
    setChartData({
      labels: GlobalData.DoughnutChart.labels,
      datasets: [
        {
          data: GlobalData.DoughnutChart.data,
          backgroundColor: GlobalData.DoughnutChart.bgcolor,
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
  return <Doughnut options={chartOptions} data={chartData} />;
};

export default DoughnutChart;
