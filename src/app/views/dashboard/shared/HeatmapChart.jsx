import { useTheme } from "@mui/material";
import { convertHexToRGB } from "app/utils/utils";
import ReactApexChart from "react-apexcharts";

const HeatmapChart = (props) => {
  const { height, chartData } = props;

  const theme = useTheme();
  const { palette } = useTheme();
  const primary3 = `rgba(${convertHexToRGB(palette.primary.main)}, 0.8)`;
  const primary5 = `rgba(${convertHexToRGB(palette.primary.main)}, 0.6)`;

  const series = chartData;
  const options = {
    chart: {
      type: "heatmap",
      background: "transparent",
      toolbar: { show: false },
    },
    dataLabels: { enabled: false },
    plotOptions: {
      heatmap: { radius: "8px", enableShades: false },
    },
    colors: [primary3, primary5, primary3, primary5, primary3, primary5],
    xaxis: {
      categories: [
        "1am",
        "2am",
        "3am",
        "4am",
        "5am",
        "6am",
        "7am",
        "8am",
        "9am",
        "10am",
        "11am",
        "12am",
        "1pm",
        "2pm",
        "3pm",
        "4pm",
        "5pm",
        "6pm",
        "7pm",
        "8pm",
        "9pm",
        "10pm",
        "11pm",
        "12pm",
      ],
      axisBorder: { show: false },
      axisTicks: { show: false },
      tooltip: { enabled: false },
      crosshairs: { show: false },
    },
    theme: { mode: theme.palette.mode },
    grid: {
      yaxis: { lines: { show: false } },
      padding: { top: 0, right: 20, bottom: 0, left: 15 },
    },
    stroke: { show: true, colors: ["#fff"], width: 2 },
  };

  return <ReactApexChart options={options} series={series} type="heatmap" height={height} />;
};

export default HeatmapChart;
