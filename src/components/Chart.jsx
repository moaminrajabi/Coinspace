import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BitcoinChart = () => {
  // داده‌های ساختگی برای نمایش قیمت بیت‌کوین
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Bitcoin Price (USD)", // عنوان چارت
        data: [20000, 22000, 25000, 27000, 30000, 28000, 35000],
        borderColor: "#FF9900", // رنگ خط
        backgroundColor: "rgba(255, 153, 0, 0.2)",
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", 
      },
      title: {
        display: true,
        text: "Bitcoin Price Chart (2024)",
      },
    },
  };

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default BitcoinChart;
