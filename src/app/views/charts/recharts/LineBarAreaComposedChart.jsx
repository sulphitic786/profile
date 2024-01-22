import RechartCreator from "app/components/charts/RechartCreator";
import { Area, Bar, CartesianGrid, ComposedChart, Line, Tooltip, XAxis, YAxis } from "recharts";

const LineBarAreaComposedChart = ({ height, width, data }) => {
  return (
    <RechartCreator height={height} width={width}>
      <ComposedChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="Mi" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="OnePlus" stroke="#ff7300" />
        {/* <Scatter dataKey="cnt" fill="red" /> */}
      </ComposedChart>
    </RechartCreator>
  );
};

export default LineBarAreaComposedChart;
