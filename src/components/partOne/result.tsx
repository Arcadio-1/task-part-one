import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Button } from "antd";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Dates Bar Chart",
    },
  },
};

type Props = {
  resetHandler: () => void;
  stepTwoData: {
    color: string;
    number: number;
    date: string;
  }[];
};

export const Result: React.FC<Props> = ({ stepTwoData, resetHandler }) => {
  const labels = stepTwoData.map((item) => item.date);

  const data = {
    labels,
    datasets: [
      {
        label: "Dates",
        data: stepTwoData.map((item) => item.number),
        backgroundColor: stepTwoData.map((item) => item.color),
      },
    ],
  };

  return (
    <>
      <Bar options={options} data={data} />
      <Button onClick={resetHandler} className="w-full">
        Reset
      </Button>
    </>
  );
};
