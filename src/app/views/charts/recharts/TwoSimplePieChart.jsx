import RechartCreator from "app/components/charts/RechartCreator";
import { Pie, PieChart, Tooltip } from "recharts";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

const data02 = [
  { name: "Group A", value: 2400 },
  { name: "Group B", value: 4567 },
  { name: "Group C", value: 1398 },
  { name: "Group D", value: 9800 },
  { name: "Group E", value: 3908 },
  { name: "Group F", value: 4800 },
];

const TwoSimplePieChart = ({ height, width }) => {
  return (
    <RechartCreator height={height} width={width}>
      <PieChart margin={{ top: 0 }}>
        <Pie
          cx={200}
          cy={200}
          data={data01}
          fill="#8884d8"
          dataKey="value"
          outerRadius={80}
          label
        />
        <Pie
          cx={500}
          cy={200}
          data={data02}
          dataKey="value"
          innerRadius={40}
          outerRadius={80}
          fill="#82ca9d"
        />
        <Tooltip />
      </PieChart>
    </RechartCreator>
  );
};

export default TwoSimplePieChart;
