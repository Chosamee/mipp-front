import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// 데이터와 색상
const data = [
  { name: "Paired Duration 1", value: 15 },
  { name: "Total Duration 1", value: 22 - 15 },
  { name: "Paired Duration 2", value: 31 },
  { name: "Total Duration 2", value: 170 - 31 },
];
const COLORS = ["#FF0000", "#0000FF", "#FF0000", "#0000FF"];

const SamplePieChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          outerRadius={80}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default SamplePieChart;
