import { Card, Grid, styled, useTheme } from "@mui/material";
import { Fragment } from "react";
import Campaigns from "./shared/Campaigns";
import DoughnutChart from "./shared/Doughnut";
import ModifiedAreaChart from "./shared/ModifiedAreaChart";
import RowCards from "./shared/RowCards";
import StatCards from "./shared/StatCards";
import StatCards2 from "./shared/StatCards2";
import TopSellingTable from "./shared/TopSellingTable";
import UpgradeCard from "./shared/UpgradeCard";

const AnalyticsRoot = styled("div")(({ theme }) => ({
  padding: "28px 32px 86px 32px",
  background: theme.palette.primary.main,
}));

const ContentBox = styled("div")(({ theme }) => ({
  margin: "30px",
  marginTop: "-72px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
}));

const Title = styled("span")(() => ({
  fontSize: "1rem",
  fontWeight: "500",
  textTransform: "capitalize",
}));

const SubTitle = styled("span")(({ theme }) => ({
  fontSize: "0.875rem",
  color: theme.palette.text.secondary,
}));

const Header = styled(Title)(() => ({
  marginBottom: 2,
  color: "rgba(255, 255, 255, 0.87)",
}));

const H4 = styled("h4")(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "500",
  marginBottom: "16px",
  textTransform: "capitalize",
  color: theme.palette.text.secondary,
}));

const Analytics = () => {
  const { palette } = useTheme();

  return (
    <Fragment>
      <AnalyticsRoot>
        <Header>Last 12 months sales</Header>
        <ModifiedAreaChart
          height="280px"
          option={{
            series: [
              {
                data: [34, 45, 31, 45, 31, 43, 26, 43, 31, 45, 33, 40],
                type: "line",
              },
            ],
            xAxis: {
              data: [
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
          }}
        />
      </AnalyticsRoot>

      <ContentBox className="analytics">
        <Grid container spacing={3}>
          <Grid item md={8} xs={12}>
            <StatCards />
            <TopSellingTable />
            <StatCards2 />
            <H4>Ongoing Projects</H4>
            <RowCards />
          </Grid>

          <Grid item md={4} xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3 }}>
              <Title>Traffic Sources</Title>
              <SubTitle>Last 30 days</SubTitle>
              <DoughnutChart
                height="300px"
                color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
              />
            </Card>

            <UpgradeCard />
            <Campaigns />
          </Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  );
};

export default Analytics;
