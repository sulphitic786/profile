import { Box, Card, Icon, IconButton, styled, useTheme } from "@mui/material";
import { H5, Paragraph, Span } from "app/components/Typography";
import Chart from "react-apexcharts";

const CardHeader = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  padding: "12px 16px",
  justifyContent: "space-between",
  background: "rgba(0, 0, 0, 0.01)",
}));

const GaugeProgressCard = () => {
  const theme = useTheme();

  const options = {
    chart: {},
    grid: { padding: { left: 0, right: 0 } },
    plotOptions: {
      radialBar: {
        startAngle: -120,
        endAngle: 120,
        offsetY: 0,
        hollow: { margin: 0, size: "68%" },
        dataLabels: {
          showOn: "always",
          name: { show: false },
          value: {
            show: true,
            offsetY: 38,
            fontSize: "24px",
            fontWeight: "600",
            // offsetY: -40,
            color: theme.palette.text.primary,
            formatter: (val, opt) => val * 10 + "K",
          },
        },
        track: { background: "#eee", strokeWidth: "100%" },
      },
    },
    colors: [theme.palette.primary.main, "#eee"],
    stroke: { lineCap: "round" },
    responsive: [
      {
        breakpoint: 767,
        options: { chart: { offsetX: 0, offsetY: 0 } },
      },
    ],
  };

  return (
    <Card sx={{ height: "100%" }} elevation={3}>
      <CardHeader>
        <Span sx={{ fontWeight: "500", color: "text.secondary" }}>STATISTICS</Span>

        <IconButton size="small">
          <Icon>more_horiz</Icon>
        </IconButton>
      </CardHeader>

      <Box position="relative" mt={3}>
        <Chart options={options} series={[84.2]} type="radialBar" height={200} />
        <Icon
          sx={{
            fontSize: "36px",
            position: "absolute",
            color: "text.secondary",
            top: "calc(50% - 24px)",
            left: "calc(50% - 18px)",
          }}
        >
          people
        </Icon>
      </Box>

      <H5 sx={{ mb: 1, textAlign: "center", fontWeight: "500" }}>Awesome</H5>

      <Paragraph sx={{ mb: 3, textAlign: "center", color: "text.secondary" }}>
        Close to reach 1000k folowers!
      </Paragraph>
    </Card>
  );
};

export default GaugeProgressCard;
