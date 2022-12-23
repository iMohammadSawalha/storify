import { ArcElement, Chart, Legend, Tooltip } from "chart.js";
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import "./components.css";

Chart.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});
  useEffect(() => {
    setChartData({
      labels: ["Electronic", "Fashion", "Decor", "Sports"],
      datasets: [
        {
          data: [82.5, 23.8, 49, 99],
          backgroundColor: [
            "rgba(255, 99, 132, 0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(255, 206, 86, 0.8)",
            "rgba(75, 192, 192, 0.8)",
          ],
          hoverOffset: 10,
        },
      ],
    });
    setChartOptions({
      resizeDelay: 30,
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
