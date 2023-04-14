import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const marksArray = [
    {
      name: "Assignment 1",
      marks: 60,
    },
    {
      name: "Assignment 2",
      marks: 55,
    },
    {
      name: "Assignment 3",
      marks: 50,
    },
    {
      name: "Assignment 4",
      marks: 53,
    },
    {
      name: "Assignment 5",
      marks: 45,
    },
    {
      name: "Assignment 6",
      marks: 40,
    },
    {
      name: "Assignment 7",
      marks: 49,
    },
    {
      name: "Assignment 8",
      marks: 46,
    },
  ];
  return (
    <div>
      <ComposedChart width={500} height={300} data={marksArray}>
        <XAxis dataKey="name" scale="band" />
      </ComposedChart>
    </div>
  );
};

export default Statistics;
