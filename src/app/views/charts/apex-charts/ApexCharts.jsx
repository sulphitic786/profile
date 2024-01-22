import { Card, Grid, styled, useTheme } from "@mui/material";
import Breadcrumb from "app/components/Breadcrumb";
import { H2 } from "app/components/Typography";
import { convertHexToRGB } from "app/utils/utils";
import AdvanceAreaChart from "./AdvanceAreaChart";
import AdvanceLineChart from "./AdvanceLineChart";
import AdvanceLineChart2 from "./AdvanceLineChart2";
import HeatmapChart from "./HeatmapChart";
import PieChart from "./PeiChart";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const ApexCharts = () => {
  const { palette } = useTheme();
  const textPrimary = palette.primary.main;
  const textError = palette.error.main;
  const textMuted = palette.text.secondary;

  return (
    <Container>
      <div className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: "Charts", path: "/charts" }, { name: "Apex Charts" }]}
        />
      </div>

      <Card sx={{ py: 2, pl: 1, pr: 2 }}>
        <H2 sx={{ pl: 2 }}>Apex Line Chart</H2>
        <AdvanceLineChart
          chartData={[{ name: "A", data: [40, 80, 20, 90, 145, 80, 125, 60, 120, 70] }]}
          colors={[textPrimary]}
          height={300}
        />
      </Card>

      <Grid container spacing={3} my="0px">
        <Grid item xs={12} md={8}>
          <Card>
            <H2 sx={{ py: 2, pl: 2 }}>This Year Sales</H2>
            <AdvanceLineChart2
              chartData={[
                { name: "Like", data: [40, 80, 20, 90, 30, 80, 40, 90, 130] },
                { name: "Average like per day", data: [40, 60, 10, 70, 50, 90, 70, 60, 80] },
              ]}
              colors={[textError, textMuted]}
              height={320}
            />
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: "100%" }}>
            <H2 sx={{ pt: 2, pl: 2, mb: 5 }}>Apex Pie Chart</H2>
            <PieChart height={280} chartData={[44, 55, 13, 43, 22, 20]} />
          </Card>
        </Grid>
      </Grid>

      <Card sx={{ my: 3 }}>
        <H2 sx={{ py: 2, pl: 2 }}>Apex Advance Area Chart</H2>
        <AdvanceAreaChart
          chartData={[
            { name: "Series 1", data: [20, 90, 20, 90, 20, 90, 20] },
            { name: "Series 2", data: [90, 20, 90, 20, 90, 20, 90] },
          ]}
          colors={[
            `rgba(${convertHexToRGB(palette.primary.main)}, 0.4)`,
            `rgba(${convertHexToRGB(palette.text.secondary)}, 0.3)`,
          ]}
          height={380}
        />
      </Card>

      <Card>
        <H2 sx={{ pt: 2, pl: 2 }}>Apex Heatmap Chart</H2>
        <HeatmapChart
          chartData={[
            {
              name: "Sat",
              data: [
                40, 80, 20, 90, 30, 80, 40, 90, 130, 120, 135, 145, 30, 80, 40, 90, 130, 120, 135,
                145,
              ],
            },
            {
              name: "Sun",
              data: [
                40, 80, 20, 90, 30, 80, 40, 90, 130, 120, 135, 145, 30, 80, 40, 90, 130, 120, 135,
                145,
              ],
            },
            {
              name: "Mon",
              data: [
                40, 80, 20, 90, 30, 80, 40, 90, 130, 120, 135, 145, 30, 80, 40, 90, 130, 120, 135,
                145,
              ],
            },
            {
              name: "Tue",
              data: [
                40, 80, 20, 90, 30, 80, 40, 90, 130, 120, 135, 145, 30, 80, 40, 90, 130, 120, 135,
                145,
              ],
            },
            {
              name: "Wed",
              data: [
                40, 80, 20, 90, 30, 80, 40, 90, 130, 120, 135, 145, 30, 80, 40, 90, 130, 120, 135,
                145,
              ],
            },
            {
              name: "Thu",
              data: [
                40, 80, 20, 90, 30, 80, 40, 90, 130, 120, 135, 145, 30, 80, 40, 90, 130, 120, 135,
                145,
              ],
            },
            {
              name: "Fri",
              data: [
                40, 80, 20, 90, 30, 80, 40, 90, 130, 120, 135, 145, 30, 80, 40, 90, 130, 120, 135,
                145,
              ],
            },
          ]}
          height={350}
        />
      </Card>
    </Container>
  );
};

export default ApexCharts;
