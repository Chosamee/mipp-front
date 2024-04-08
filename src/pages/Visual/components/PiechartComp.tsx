import React, { PureComponent } from "react";
import { PieChart, Pie, Cell } from "recharts";
import renderCustomizedLabel from "./Labal";

interface IPieChartProps {
  title: string;
  paired_value: number;
  total_value: number;
}

const COLORS = ["#FF0000", "#0000FF", "#FF0000", "#0000FF"];

const PieChartComp = (propsData: IPieChartProps) => {
  const data = [
    { name: "Paired Duration 1", value: propsData.paired_value },
    { name: "Total Duration 1", value: propsData.total_value - propsData.paired_value },
  ];
  return (
    <PieChart width={300} height={240}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        fill="#8884d8"
        dataKey="value"
        nameKey={"name"}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={120}
        animationDuration={1200}
        startAngle={90}
        endAngle={450}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default PieChartComp;
