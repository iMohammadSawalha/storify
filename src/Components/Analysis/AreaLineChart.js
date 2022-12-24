import {
  ArcElement,
  CategoryScale,
  Chart,
  Filler,
  Legend,
  LineElement,
  PointElement,
  Title,
} from "chart.js";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

Chart.register(
  ArcElement,
  LineElement,
  CategoryScale,
  Filler,
  Legend,
  Title,
  PointElement
);
const AreaLineChart = ({ GlobalData }) => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: GlobalData.AreaLineChart["Labels"],
      datasets: [
        {
          type: "line",
          data: GlobalData.AreaLineChart["First"][0].data,
          fill: true,
          label: GlobalData.AreaLineChart["First"][0].label,
          borderColor: GlobalData.AreaLineChart["First"][0].borderColor,
          backgroundColor: GlobalData.AreaLineChart["First"][0].bgcolor,
          order: 1,
        },
        {
          type: "line",
          data: GlobalData.AreaLineChart["Second"][0].data,
          fill: true,
          label: GlobalData.AreaLineChart["Second"][0].label,
          borderColor: GlobalData.AreaLineChart["Second"][0].borderColor,
          backgroundColor: GlobalData.AreaLineChart["Second"][0].bgcolor,
          order: 2,
        },
      ],
    });
    setChartOptions({
      responsive: true,
      pointRadius: 5,
      pointHoverRadius: 7,
      scales: {
        y: {
          display: false,
        },
        x: {
          display: false,
        },
      },
      animations: {
        tension: {
          duration: 1000,
          easing: "linear",
          from: 0.4,
          to: 0.3,
          loop: true,
        },
      },
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "chartArea",
          align: "start",
          labels: {
            padding: 10,
            boxWidth: 30,
            useBorderRadius: true,
            borderRadius: 5,
          },
        },
        title: {
          display: false,
        },
      },
    });
  }, []);
  return <Line options={chartOptions} data={chartData} />;
};
export default AreaLineChart;
