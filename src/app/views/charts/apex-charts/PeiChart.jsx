import { useTheme } from "@mui/material";
import { convertHexToRGB } from "app/utils/utils";
import ReactApexChart from "react-apexcharts";

const PieChart = (props) => {
  const { height, chartData } = props;

  const { palette } = useTheme();
  const primary1 = `rgba(${convertHexToRGB(palette.primary.main)}, 1)`;
  const primary2 = `rgba(${convertHexToRGB(palette.primary.main)}, 0.9)`;
  const primary3 = `rgba(${convertHexToRGB(palette.primary.main)}, 0.8)`;
  const primary4 = `rgba(${convertHexToRGB(palette.primary.main)}, 0.7)`;
  const primary5 = `rgba(${convertHexToRGB(palette.primary.main)}, 0.6)`;
  const primary6 = `rgba(${convertHexToRGB(palette.primary.main)}, 0.5)`;

  const series = chartData;
  const options = {
    chart: { type: "pie" },
    colors: [primary1, primary2, primary3, primary4, primary5, primary6],
    stroke: { show: true, width: 0, colors: ["transparent"] },
    legend: { show: false },
  };
  return <ReactApexChart options={options} series={series} type="pie" height={height} />;
};

export default PieChart;
