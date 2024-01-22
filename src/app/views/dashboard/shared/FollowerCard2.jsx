import { Box, Card, Icon, useTheme } from "@mui/material";
import { FlexBetween } from "app/components/FlexBox";
import { H4, Small } from "app/components/Typography";
import React from "react";
import ModifiedAreaChart from "./ModifiedAreaChart";

const FollowerCard2 = () => {
  const { palette } = useTheme();
  const light = palette.primary.light;
  const primary = palette.primary.main;
  const textMuted = palette.text.secondary;

  return (
    <Card sx={{ p: 2 }} elevation={3}>
      <FlexBetween>
        <H4 sx={{ m: 0 }}>One Else Graph</H4>
        <Box display="flex" alignItems="center">
          <H4 sx={{ m: 0 }}>429K</H4>
          <Box ml={1} textAlign="center">
            <Icon size="small" color="primary" sx={{ mt: -1, display: "block" }}>
              arrow_drop_up
            </Icon>
            <Box mt={-1} fontSize="11px" color={textMuted}>
              +35%
            </Box>
          </Box>
        </Box>
      </FlexBetween>

      <Small sx={{ color: textMuted }}>System project</Small>

      <ModifiedAreaChart
        height="100%"
        option={{
          grid: { top: 0, left: 10, right: 10, bottom: 32 },
          tooltip: { axisPointer: { type: "line" } },
          series: [{ data: [34, 45, 31, 45, 31, 43, 26], type: "line" }],
          xAxis: { data: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"] },
          yAxis: { show: false },
          color: [
            {
              type: "linear",
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
            },
          ],
        }}
      />
    </Card>
  );
};

export default FollowerCard2;
