import { Grid, LinearProgress, Typography, styled, useTheme } from "@mui/material";
import { Small } from "./Typography";
import React from "react";

const CustomLinearProgress = styled(LinearProgress)({
  borderRadius: 2,
  background: "rgba(0, 0, 0, 0.1)"
});

const MatxProgressBar = ({
  value = 75,
  color = "primary",
  text = "",
  spacing = 2,
  coloredText = false
}) => {
  const theme = useTheme();
  const secondary = theme.palette.text.secondary;

  return (
    <Grid container spacing={spacing} alignItems="center">
      <Grid item xs={text ? 8 : 12}>
        <CustomLinearProgress
          color={color}
          value={value}
          variant="determinate"
        ></CustomLinearProgress>
      </Grid>
      {text !== "" && (
        <Grid item xs={text ? 4 : false}>
          <Typography color={color}>
            <Small sx={{ color: coloredText ? "" : secondary }}>{text}</Small>
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default MatxProgressBar;
