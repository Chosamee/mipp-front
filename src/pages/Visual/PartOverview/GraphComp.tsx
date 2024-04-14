import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
} from "recharts";
import "tailwindcss/tailwind.css";
import { IVisualData2 } from "../types";

// Approximates a float to the nearest integer for label usage
const approximateLabel = (num: number) => Math.round(num);

const PlagiarismGraph = ({
  test_plag,
  comp_plag,
  plag_pair,
  test_start,
  comp_start,
  test_gap,
  comp_gap,
}: IVisualData2) => {
  // Prepare the data for the test and comparison plagiarism bars
  const testData = test_plag.map((value, index) => ({
    index: approximateLabel(test_start + index * test_gap),
    value: value === 1 ? 1 : 0,
  }));

  const compData = comp_plag.map((value, index) => ({
    index: approximateLabel(comp_start + index * comp_gap),
    value: value === 1 ? -1 : 0,
  }));

  // Combine test and comp data into one array for the bar chart
  const combinedData = testData.map((item, index) => ({
    ...item,
    compValue: compData[index] ? compData[index].value : 0,
  }));

  // Prepare lines for the plagiarism pairs
  const linesData = plag_pair.map((pair) => ({
    startX: testData[pair[0]].index,
    endX: compData[pair[1]].index,
    value: 0.5, // This value is arbitrary, just to place the line in the middle of the chart
  }));

  return (
    <div className="App">
      <BarChart
        width={500}
        height={300}
        data={combinedData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="index" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
        <Bar dataKey="compValue" fill="#82ca9d" />
        {testData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.value === 1 ? "red" : "#8884d8"} />
        ))}
        {compData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.value === -1 ? "red" : "#82ca9d"} />
        ))}
      </BarChart>
      <LineChart width={500} height={300} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        {linesData.map((line, index) => (
          <Line
            type="monotone"
            dataKey="value"
            data={[
              { index: line.startX, value: line.value },
              { index: line.endX, value: line.value },
            ]}
            stroke="#82ca9d"
            isAnimationActive={false}
            key={`line-${index}`}
          />
        ))}
      </LineChart>
    </div>
  );
};

export default PlagiarismGraph;
