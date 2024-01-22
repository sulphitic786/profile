import { Box, Stack, styled, useTheme } from "@mui/material";
import Breadcrumb from "app/components/Breadcrumb";
import SimpleCard from "app/components/SimpleCard";
import AreaChart from "./AreaChart";
import ComparisonChart from "./ComparisonChart";
import DoughnutChart from "./Doughnut";
import LineChart from "./LineChart";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const AppEchart = () => {
  const theme = useTheme();

  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Charts", path: "/charts" }, { name: "Echarts" }]} />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="Doughnut Chart">
          <DoughnutChart
            height="350px"
            color={[
              theme.palette.primary.dark,
              theme.palette.primary.main,
              theme.palette.primary.light,
            ]}
          />
        </SimpleCard>

        <SimpleCard title="Line Chart">
          <LineChart
            height="350px"
            color={[theme.palette.primary.main, theme.palette.primary.light]}
          />
        </SimpleCard>

        <SimpleCard title="Comparison Chart">
          <ComparisonChart
            height="350px"
            color={[
              theme.palette.primary.dark,
              // theme.palette.primary.main,
              theme.palette.primary.light,
            ]}
          />
        </SimpleCard>

        <SimpleCard title="Area Chart">
          <AreaChart height="350px" color={[theme.palette.primary.main]} />
        </SimpleCard>
      </Stack>
    </Container>
  );
};

export default AppEchart;
