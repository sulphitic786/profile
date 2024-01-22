import RechartCreator from "app/components/charts/RechartCreator";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const SimpleBarChart = ({ height, width, data }) => {
  return (
    <RechartCreator height={height} width={width}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="Mi" fill="#8884d8" />
        <Bar dataKey="OnePlus" fill="#82ca9d" />
      </BarChart>
    </RechartCreator>
  );
};

export default SimpleBarChart;
