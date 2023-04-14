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
    <ResponsiveContainer width="100%" height="100%">
      <div>
        <ComposedChart width={800} height={300} data={marksArray}>
          <Line dataKey="marks"></Line>
          <Bar dataKey="marks" barSize={20} fill="#413ea0"></Bar>
          <XAxis dataKey="name" scale="band" />
          <YAxis></YAxis>
          <Tooltip></Tooltip>
          <Legend />
        </ComposedChart>
      </div>
    </ResponsiveContainer>
  );
};

export default Statistics;
