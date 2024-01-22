import { useTheme } from "@mui/material";
import ReactApexChart from "react-apexcharts";

const AdvanceAreaChart = (props) => {
  const { palette } = useTheme();
  const { colors, chartData, height } = props;
  const series = chartData;

  const options = {
    chart: {
      type: "area",
      id: "basicAreaChart",
      background: "transparent",
      zoom: { enabled: false },
      toolbar: { show: false },
    },
    colors: colors,

    dataLabels: { enabled: false },
    xaxis: { categories: ["00.00", "01.00", "02.00", "03.00", "04.00", "05.00", "06.00"] },
    stroke: { curve: "smooth", width: 0 },
    markers: {
      size: 4,
      colors: "rgba(102, 51, 153)",
      strokeColors: "white",
      hover: { size: 7 },
    },
    theme: { mode: palette.type },
    legend: { show: true, position: "top", horizontalAlign: "left" },
    grid: {
      show: true,
      borderColor: palette.grey[300],
      yaxis: { lines: { show: true } },
      padding: { top: 10, right: 10, bottom: 0, left: 15 },
    },
    tooltip: { x: { format: "dd/MM/yy HH:mm" } },
  };
  return (
    <ReactApexChart options={options} series={series} type="area" height={height} width={"100%"} />
  );
};

export default AdvanceAreaChart;
