import {
  Chart,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  SubTitle,
  Title,
  Tooltip,
} from "chart.js";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
Chart.register(
  LineElement,
  LineController,
  LinearScale,
  Legend,
  Title,
  Tooltip,
  SubTitle
);
const LineChart = ({ GlobalData }) => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: GlobalData.LineChart.labels,
      datasets: [
        {
          type: "line",
          data: GlobalData.LineChart.data,
          fill: false,
          borderColor: GlobalData.LineChart.bordercolor,
        },
      ],
    });
    setChartOptions({
      responsive: true,
      scales: {
        y: {
          display: false,
        },
        x: {
          display: false,
        },
      },
      pointRadius: 5,
      pointHoverRadius: 7,
      animations: {
        tension: {
          duration: 1000,
          easing: "linear",
          from: 0.45,
          to: 0.3,
          loop: true,
        },
      },
      maintainAspectRatio: true,
      aspectRatio: 1.8,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
      },
    });
  }, []);
  return <Line options={chartOptions} data={chartData} />;
};
export default LineChart;
