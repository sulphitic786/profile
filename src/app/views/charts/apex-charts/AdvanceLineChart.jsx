import { useTheme } from "@mui/material";
import ReactApexChart from "react-apexcharts";

const AdvanceLineChart = (props) => {
  const { colors, height, chartData } = props;
  const { palette } = useTheme();
  const series = chartData;

  const options = {
    chart: {
      type: "line",
      background: "transparent",
      zoom: { enabled: false },
      toolbar: { show: false },
    },
    colors: colors,
    dataLabels: { enabled: false },
    legend: { show: false },
    stroke: { curve: "smooth", width: 3 },
    tooltip: {
      enabled: true,
      followCursor: true,
      marker: { show: true },
    },
    markers: {
      size: 4,
      colors: "rgba(102, 51, 153)",
      strokeColors: "white",
      hover: { size: 6 },
    },
    theme: { mode: palette.type },
    grid: {
      show: true,
      borderColor: palette.grey[300],
      yaxis: { lines: { show: true } },
      padding: { top: 0, right: 0, bottom: 0, left: 10 },
    },
    xaxis: {
      show: true,
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  };

  return <ReactApexChart options={options} series={series} type="line" height={height} />;
};

export default AdvanceLineChart;
