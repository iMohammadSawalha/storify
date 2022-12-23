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
import "./components.css";

Chart.register(
  LineElement,
  LineController,
  LinearScale,
  Legend,
  Title,
  Tooltip,
  SubTitle
);
const LineChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          type: "line",
          data: [110, 270, 145, 245, 205, 285],
          fill: false,
          borderColor: "rgb(168, 172, 241)",
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
