import { MoreHoriz } from "@mui/icons-material";
import { Card, Grid, IconButton, MenuItem, styled, TextField } from "@mui/material";
import { FlexBetween } from "app/components/FlexBox";
import { H3, Span } from "app/components/Typography";
import ComparisonChart2 from "./shared/ComparisonChart2";
import FollowerCard from "./shared/FollowerCard";
import FollowerCard2 from "./shared/FollowerCard2";
import GaugeProgressCard from "./shared/GuageProgressCard";
import StatCard3 from "./shared/StatCard3";
import StatCard4 from "./shared/StatCard4";

const AnalyticsRoot = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
}));

const Analytics2 = () => {
  return (
    <AnalyticsRoot>
      <FlexBetween mb={2}>
        <H3 sx={{ m: 0 }}>Overview</H3>
        <TextField defaultValue="1" variant="outlined" size="small" select>
          <MenuItem value="1">This Month</MenuItem>
          <MenuItem value="2">Last Month</MenuItem>
          <MenuItem value="3">Six Month</MenuItem>
          <MenuItem value="4">Last Year</MenuItem>
        </TextField>
      </FlexBetween>

      <StatCard3 />

      <Card sx={{ my: 3 }} elevation={3}>
        <FlexBetween p={2} mb={2} bgcolor="rgba(0, 0, 0, 0.02)">
          <Span sx={{ fontWeight: "500", color: "text.secondary" }}>STATISTICS</Span>

          <IconButton size="small">
            <MoreHoriz />
          </IconButton>
        </FlexBetween>

        <ComparisonChart2 height={400} />
      </Card>

      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <StatCard4 />
        </Grid>

        <Grid item md={4} xs={12}>
          <GaugeProgressCard />
        </Grid>

        <Grid item md={4} xs={12}>
          <FollowerCard />
          <FollowerCard2 />
        </Grid>
      </Grid>
    </AnalyticsRoot>
  );
};

export default Analytics2;
