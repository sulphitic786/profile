import RechartCreator from "app/components/charts/RechartCreator";
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

const StackedAreaChart = ({ height, width, data }) => {
  return (
    <RechartCreator height={height} width={width}>
      <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Mi"
          stackId="1"
          //   stroke="#8884d8"
          fill="#9068be"
        />
        <Area
          type="monotone"
          dataKey="OnePlus"
          stackId="1"
          //   stroke="#82ca9d"
          fill="#7467ef"
        />
        <Area
          type="monotone"
          dataKey="amount"
          stackId="1"
          //   stroke="#ffc658"
          fill="#6ed3cf"
        />
      </AreaChart>
    </RechartCreator>
  );
};

export default StackedAreaChart;
