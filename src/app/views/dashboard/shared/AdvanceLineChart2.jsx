import { useTheme } from "@mui/material";
import ReactApexChart from "react-apexcharts";

const AdvanceLineChart2 = (props) => {
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
    stroke: { width: [4, 3], curve: "straight" },
    tooltip: {
      enabled: true,
      followCursor: true,
      marker: { show: true },
    },
    markers: {
      size: [6, 0],
      colors: "rgba(102, 51, 153)",
      strokeColors: "white",
      hover: { size: 8 },
    },
    theme: { mode: palette.type },
    legend: { show: true, position: "top", horizontalAlign: "left" },
    grid: {
      show: true,
      borderColor: palette.grey[300],
      yaxis: { lines: { show: true } },
      padding: { top: 10, right: 10, bottom: 0, left: 10 },
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

  return (
    <div>
      <ReactApexChart options={options} series={series} type="line" height={height} />
    </div>
  );
};

export default AdvanceLineChart2;
