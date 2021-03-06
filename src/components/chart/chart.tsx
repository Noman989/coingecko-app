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

export interface ChartProps {
  chartData: number[];
  name: string;
  height?: string;
  width?: string;
  x?: boolean;
  y?: boolean;
}
export const Chart: React.FC<ChartProps> = ({chartData,  name, height, width, x, y}) => {
  const options = {
    responsive: true,
    scales: {
      x: {
        display: x || false
      },
      y: {
        display: y || false
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };  
  const labels = ["1", "2", "3", "4", "5", "6", "7"];
  const data = {
    labels,
    datasets: [
      {
        label: name,
        data: chartData,
        borderColor: "teal",
        backgroundColor: "teal",
      },
    ],
  };

  return (
    <div className="overflow-hidden">
      <Line options={options} data={data} height={height} width={width} ></Line>
    </div>
  );
};
