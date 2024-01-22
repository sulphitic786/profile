import RechartCreator from "app/components/charts/RechartCreator";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const SimpleLineChart = ({ height, width, data }) => {
  return (
    <RechartCreator height={height} width={width}>
      <LineChart data={data} margin={{ top: 10, left: 0, right: 30, bottom: 0 }}>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Line type="monotone" dataKey="Mi" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="OnePlus" activeDot={{ r: 5 }} stroke="#82ca9d" />
      </LineChart>
    </RechartCreator>
  );
};

export default SimpleLineChart;
