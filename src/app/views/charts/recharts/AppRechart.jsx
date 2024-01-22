import { Box, Stack, styled } from "@mui/material";
import Breadcrumb from "app/components/Breadcrumb";
import SimpleCard from "app/components/SimpleCard";
import LineBarAreaComposedChart from "./LineBarAreaComposedChart";
import SimpleBarChart from "./SimpleBarChart";
import SimpleLineChart from "./SimpleLineChart";
import SimpleRadarChart from "./SimpleRadarChart";
import SimpleRadialBar from "./SimpleRadialBar";
import SimpleScatterChart from "./SimpleScatterChart";
import SimpleTreeMap from "./SimpleTreeMap";
import StackedAreaChart from "./StackedAreaChart";
import TwoSimplePieChart from "./TwoSimplePieChart";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const data = [
  {
    name: "January",
    OnePlus: 4000,
    Mi: 2400,
    amt: 2400,
  },
  {
    name: "February",
    OnePlus: 3000,
    Mi: 1398,
    amt: 2210,
  },
  {
    name: "March",
    OnePlus: 2000,
    Mi: 9800,
    amt: 2290,
  },
  {
    name: "April",
    OnePlus: 2780,
    Mi: 3908,
    amt: 2000,
  },
  {
    name: "May",
    OnePlus: 1890,
    Mi: 4800,
    amt: 2181,
  },
  {
    name: "June",
    OnePlus: 2390,
    Mi: 3800,
    amt: 2500,
  },
  {
    name: "July",
    OnePlus: 3490,
    Mi: 4300,
    amt: 2100,
  },
  {
    name: "August",
    OnePlus: 3000,
    Mi: 1398,
    amt: 2210,
  },
  {
    name: "September",
    OnePlus: 2000,
    Mi: 9800,
    amt: 2290,
  },
  {
    name: "October",
    OnePlus: 2780,
    Mi: 3908,
    amt: 2000,
  },
  {
    name: "November",
    OnePlus: 1890,
    Mi: 4800,
    amt: 2181,
  },
  {
    name: "December",
    OnePlus: 2000,
    Mi: 9800,
    amt: 2290,
  },
];

const AppRechart = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Charts", path: "/charts" }, { name: "Recharts" }]} />
      </Box>

      <Stack spacing={2}>
        <SimpleCard title="simple line chart">
          <SimpleLineChart data={data} />
        </SimpleCard>

        <SimpleCard title="stacked area chart">
          <StackedAreaChart data={data} />
        </SimpleCard>

        <SimpleCard title="simple bar Chart">
          <SimpleBarChart data={data} />
        </SimpleCard>

        <SimpleCard title="line bar area composed Chart">
          <LineBarAreaComposedChart data={data} />
        </SimpleCard>

        <SimpleCard title="simple scatter Chart">
          <SimpleScatterChart />
        </SimpleCard>

        <SimpleCard title="two simple pie chart">
          <TwoSimplePieChart />
        </SimpleCard>

        <SimpleCard title="simple radar chart">
          <SimpleRadarChart />
        </SimpleCard>

        <SimpleCard title="simple radial chart">
          <SimpleRadialBar />
        </SimpleCard>

        <SimpleCard title="simple tree map">
          <SimpleTreeMap />
        </SimpleCard>
      </Stack>
    </Container>
  );
};

export default AppRechart;
