import { Box, Card, Icon, useTheme } from "@mui/material";
import { FlexBetween } from "app/components/FlexBox";
import { H4, Small } from "app/components/Typography";
import React from "react";
import ModifiedAreaChart from "./ModifiedAreaChart";

const FollowerCard = () => {
  const { palette } = useTheme();
  const error = palette.error.main;
  const light = palette.primary.light;
  const primary = palette.primary.main;
  const textMuted = palette.text.secondary;

  return (
    <Card sx={{ p: 2, mb: 3 }} elevation={3}>
      <FlexBetween>
        <H4 sx={{ m: 0 }}>Followers</H4>

        <Box display="flex" alignItems="center">
          <H4 sx={{ m: 0 }}>860K</H4>

          <Box ml={1} textAlign="center">
            <Icon size="small" color="primary" sx={{ mt: -1, display: "block" }}>
              arrow_drop_up
            </Icon>

            <Box mt={-1} fontSize="11px" color={textMuted}>
              +49%
            </Box>
          </Box>
        </Box>
      </FlexBetween>

      <Small sx={{ color: textMuted }}>System project</Small>
      <ModifiedAreaChart
        height="100%"
        option={{
          grid: { top: 0, left: 10, right: 10 },
          tooltip: { axisPointer: { type: "line" } },
          series: [
            {
              type: "line",
              smooth: false,
              areaStyle: null,
              data: [8, 32, 18, 27, 39, 53, 36],
              lineStyle: { width: 2, color: error },
            },
          ],
          xAxis: { data: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"] },
          yAxis: { show: false },
          color: [
            {
              type: "linear",
              // x: 0,
              // y: 0,
              // x2: 0,
              // y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: primary, // color at 0% position
                },
                {
                  offset: 1,
                  color: light, // color at 100% position
                },
              ],
              global: false, // false by default
            },
          ],
        }}
      />
    </Card>
  );
};

export default FollowerCard;
