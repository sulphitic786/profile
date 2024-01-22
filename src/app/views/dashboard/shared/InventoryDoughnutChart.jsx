import { useTheme } from "@mui/material";
import { convertHexToRGB } from "app/utils/utils";
import Chart from "react-apexcharts";

const InventoryDoughnutChart = () => {
  const series = [75, 50, 25];
  const { palette } = useTheme();
  const primary = palette.primary.main;
  const secondary = palette.secondary.main;
  const error = palette.error.main;

  const option = {
    labels: ["Available", "Low Stock", "Out of Stock"],
    stroke: { width: 0 },
    colors: [
      `rgba(${convertHexToRGB(primary)}, 1)`,
      `rgba(${convertHexToRGB(secondary)}, 1)`,
      `rgba(${convertHexToRGB(error)}, 1)`,
    ],
    dataLabels: { enabled: false },
    legend: { show: false },
  };

  return <Chart options={option} series={series} type="donut" />;
};

export default InventoryDoughnutChart;
