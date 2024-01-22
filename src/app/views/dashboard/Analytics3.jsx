import { Box, Button, Card, Grid, Icon, IconButton, styled, useTheme } from "@mui/material";
import { FlexBetween, FlexBox } from "app/components/FlexBox";
import { H1, H3, Paragraph, Span } from "app/components/Typography";
import { convertHexToRGB } from "app/utils/utils";
import AdvanceAreaChart from "./shared/AdvanceAreaChart";
import AdvanceLineChart from "./shared/AdvanceLineChart";
import AdvanceLineChart2 from "./shared/AdvanceLineChart2";
import HeatmapChart from "./shared/HeatmapChart";

const AnalyticsRoot = styled("div")(({ theme }) => ({
  margin: 30,
  [theme.breakpoints.down("sm")]: { margin: 16 },
}));

const StyledCard = styled(Card)(({ textcolor, bgcolor }) => ({
  display: "flex",
  padding: "1.25rem",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "space-between",
  "& .icon": {
    color: textcolor,
    background: bgcolor,
    width: "40px",
    height: "40px",
    fontSize: "1.2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
  },
}));

const StyledButton = styled(Button)(({ textcolor, bgcolor }) => ({
  color: textcolor,
  boxShadow: "none",
  fontSize: ".75rem",
  background: bgcolor,
  borderRadius: "2.5rem",
  padding: "0.3125rem 1.125rem",
  "&:hover": {
    color: "#fff",
    background: textcolor,
    boxShadow:
      "0 14px 26px -12px rgba(47,60,74,.42),0 4px 23px 0 rgba(47,60,74,.12),0 8px 10px -5px rgba(47,60,74,.2)",
  },
}));

const ContentBox = styled(FlexBetween)(({ theme }) => ({
  padding: "14px",
  [theme.breakpoints.down("sm")]: { padding: "8px" },
  "& p": { fontSize: ".9375rem", color: theme.palette.text.secondary },
}));

const IMG = styled("img")(() => ({ width: "100%" }));

const FollowerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "1.25rem",
  "& #content": {
    width: "40%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  "& #chart": { width: "60%" },
  [theme.breakpoints.down("md")]: {
    display: "block",
    padding: "1rem .5rem",
    "& #content": { width: "100%" },
    "& #chart": { width: "100%" },
  },
}));

const ChartHeader = styled(FlexBetween)(({ theme }) => ({
  padding: ".8rem 1.25rem",
  justifyContent: "space-between",
  borderBottom: `1px solid ${`rgba(${convertHexToRGB(theme.palette.text.disabled)}, 0.2)`}`,
  [theme.breakpoints.down("md")]: { padding: "10px 15px" },
}));

const TextBox = styled(FlexBox)(({ theme, iconColor }) => ({
  fontWeight: "400",
  fontSize: ".9375rem",
  alignItems: "center",
  color: theme.palette.text.secondary,
  "& .icon": {
    marginRight: "8px",
    color: iconColor,
    width: "20px",
    height: "15px",
    fontSize: "13px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    background: `rgba(${convertHexToRGB(iconColor)}, 0.2)`,
  },
}));

const Analytics3 = () => {
  const { palette } = useTheme();
  const colorPrimary = palette.primary.main;
  const colorSecondary = palette.secondary.main;
  const textError = palette.error.main;
  const textMuted = palette.text.secondary;
  const textPrimary = palette.text.primary;

  return (
    <AnalyticsRoot>
      <Grid container spacing={3}>
        {topCardData.map((data, index) => (
          <Grid key={index} item md={3} sm={6} xs={12}>
            <StyledCard bgcolor={data.bgColor} textcolor={data.color}>
              <Icon className="icon">{data.icon}</Icon>

              <Box mb="24px" mt="20px" textAlign="center">
                <H1>{data.title}</H1>
                <Paragraph sx={{ fontSize: ".6875rem", color: textMuted }}>
                  {data.subTitle}
                </Paragraph>
              </Box>

              <StyledButton variant="contained" bgcolor={data.bgColor} textcolor={data.color}>
                <Icon>{data.arrowIcon}</Icon>
                {data.percent}%
              </StyledButton>
            </StyledCard>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid sx={{ mt: 4 }} item xs={12}>
          <H3 sx={{ fontSize: "1.25rem" }}>
            Most <Span color="primary.main">Recent Media</Span>
          </H3>
        </Grid>

        {mostRecentMedia.map((data, index) => {
          const { like, comment, uploadDate, imgUrl } = data;

          return (
            <Grid key={index} item lg={3} sm={6} xs={12}>
              <Card>
                <IMG src={imgUrl} alt="image" />
                <ContentBox>
                  <FlexBox
                    alignItems="center"
                    sx={{
                      "& span": { fontSize: "16px" },
                      "& .icon": { mx: "4px", color: textMuted },
                    }}
                  >
                    <Icon className="icon">favorite</Icon>
                    <Span mr={1}>{like}</Span>

                    <Icon className="icon">chat</Icon>
                    <Span>{comment}</Span>
                  </FlexBox>
                  <Paragraph>{uploadDate}</Paragraph>
                </ContentBox>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      <Grid item xs={12} mt={4}>
        <Card>
          <ChartHeader>
            <H3>Follower Growth</H3>

            <IconButton>
              <Icon color="text.primary">more_horiz</Icon>
            </IconButton>
          </ChartHeader>

          <FollowerBox>
            <Box id="content">
              <H1 sx={{ fontSize: "2.75rem" }} color="primary.main">
                4,829
              </H1>
              <Paragraph mb="20px" color="grey.main">
                Gained Followers (last 360 days)
              </Paragraph>

              <TextBox my="10px" iconColor={colorSecondary}>
                <Icon className="icon">call_missed_outgoing</Icon>
                <Span>You have a</Span>
                <Span sx={{ mx: "4px" }} color="secondary.main">
                  20% Growth
                </Span>
                <Span>compare to last year</Span>
              </TextBox>

              <TextBox iconColor={colorPrimary}>
                <Icon className="icon">call_missed_outgoing</Icon>
                <Span>You have a reached</Span>

                <Span sx={{ mx: "4px" }} color="primary.main">
                  10%
                </Span>
                <Span>of your follower goal</Span>
              </TextBox>
            </Box>

            <Box id="chart">
              <AdvanceLineChart
                chartData={[{ name: "A", data: [40, 80, 20, 90, 145, 80, 125, 60, 120, 70] }]}
                colors={[colorPrimary]}
                height={300}
              />
            </Box>
          </FollowerBox>
        </Card>
      </Grid>

      <Grid container spacing={3} mt={2}>
        {topCardData.map((data, index) => (
          <Grid key={index} item md={3} sm={6} xs={12}>
            <StyledCard
              bgcolor={data.bgColor}
              textcolor={data.color}
              sx={{ "& .icon": { width: 50, height: 35, borderRadius: "5px" } }}
            >
              <Icon className="icon">{data.icon}</Icon>

              <Box mb="24px" mt="20px" textAlign="center">
                <H1>{data.title}</H1>

                <Paragraph sx={{ fontSize: ".6875rem", color: textMuted }}>
                  {data.subTitle}
                </Paragraph>
              </Box>

              <StyledButton
                variant="contained"
                bgcolor={data.bgColor}
                textcolor={data.color}
                sx={{ borderRadius: "5px" }}
              >
                <Icon>{data.arrowIcon}</Icon>
                {data.percent}%
              </StyledButton>
            </StyledCard>
          </Grid>
        ))}
      </Grid>

      <Grid item xs={12} mt={4}>
        <Card>
          <ChartHeader mb={2}>
            <H3>Reach Impression History</H3>

            <IconButton>
              <Icon sx={{ color: textPrimary }}>more_horiz</Icon>
            </IconButton>
          </ChartHeader>

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
      </Grid>

      <Grid container spacing={3} mt={2}>
        {sealsReportData.map((data, index) => (
          <Grid key={index} item md={3} sm={6} xs={12}>
            <StyledCard bgcolor={data.bgColor} textcolor={data.color}>
              <Box mb="20px" textAlign="center">
                <Paragraph sx={{ fontSize: ".6875rem", color: textMuted }}>
                  {data.subTitle}
                </Paragraph>
                <H1>{data.title}</H1>
              </Box>

              <StyledButton variant="contained" bgcolor={data.bgColor} textcolor={data.color}>
                <Icon>{data.arrowIcon}</Icon>
                {data.percent}%
              </StyledButton>
            </StyledCard>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3} mt={2}>
        <Grid item md={6} xs={12}>
          <Card sx={{ pb: 2 }}>
            <ChartHeader mb={2}>
              <H3>Like history</H3>

              <IconButton>
                <Icon sx={{ color: textPrimary }}>more_horiz</Icon>
              </IconButton>
            </ChartHeader>

            <AdvanceLineChart2
              height={350}
              colors={[textError, textMuted]}
              chartData={[
                { name: "Like", data: [40, 80, 20, 90, 30, 80, 40, 90, 130] },
                { name: "Average like per day", data: [40, 60, 10, 70, 50, 90, 70, 60, 80] },
              ]}
            />
          </Card>
        </Grid>

        <Grid item md={6} xs={12}>
          <Card sx={{ pb: 2 }}>
            <ChartHeader mb={2}>
              <H3>Comments History</H3>

              <IconButton>
                <Icon sx={{ color: textPrimary }}>more_horiz</Icon>
              </IconButton>
            </ChartHeader>

            <AdvanceLineChart2
              height={350}
              colors={["#08ad6c", textMuted]}
              chartData={[
                { name: "Comments", data: [40, 80, 20, 90, 30, 80, 40, 90, 130] },
                { name: "Average comments per day", data: [40, 60, 10, 70, 50, 90, 70, 60, 80] },
              ]}
            />
          </Card>
        </Grid>
      </Grid>

      <Grid item xs={12} mt={4}>
        <Card>
          <ChartHeader>
            <H3>Posting Habits</H3>
            <IconButton>
              <Icon sx={{ color: textPrimary }}>more_horiz</Icon>
            </IconButton>
          </ChartHeader>

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
      </Grid>
    </AnalyticsRoot>
  );
};

const topCardData = [
  {
    icon: "people",
    title: "30.2K",
    subTitle: "Total Followers",
    percent: 12.6,
    arrowIcon: "arrow_drop_down",
    bgColor: "rgba(0,129,255,.17)",
    color: "#0081FF",
  },
  {
    icon: "touch_app",
    title: "9.2K",
    subTitle: "Impressions",
    percent: 58.6,
    arrowIcon: "arrow_drop_up",
    bgColor: "rgba(9,182,109,.17)",
    color: "#09B66D",
  },
  {
    icon: "wifi_tethering",
    title: "1.2K",
    subTitle: "Connect",
    percent: "05.6",
    arrowIcon: "arrow_drop_down",
    bgColor: "rgba(255,61,87,.17)",
    color: "#FF3D57",
  },
  {
    icon: "rate_review",
    title: "18.2K",
    subTitle: "Rate Review",
    percent: "05.6",
    arrowIcon: "arrow_drop_up",
    bgColor: "rgba(94,92,230,.17)",
    color: "#5e5ce6",
  },
];

const sealsReportData = [
  {
    title: "3.2K",
    subTitle: "Likes Received",
    percent: 12.6,
    arrowIcon: "arrow_drop_down",
    bgColor: "rgba(0,129,255,.17)",
    color: "#0081FF",
  },
  {
    title: "25.2K",
    subTitle: "Avg. Likes Received",
    percent: 58.6,
    arrowIcon: "arrow_drop_up",
    bgColor: "rgba(9,182,109,.17)",
    color: "#09B66D",
  },
  {
    title: "1.2K",
    subTitle: "Feedback",
    percent: "05.6",
    arrowIcon: "arrow_drop_down",
    bgColor: "rgba(255,61,87,.17)",
    color: "#FF3D57",
  },
  {
    title: "4.2K",
    subTitle: "Avg Feedback",
    percent: "05.6",
    arrowIcon: "arrow_drop_up",
    bgColor: "rgba(94,92,230,.17)",
    color: "#5e5ce6",
  },
];

const mostRecentMedia = [
  {
    like: "2.3K",
    comment: 900,
    uploadDate: "23 days ago",
    imgUrl: "/assets/images/sq-10.jpg",
  },
  {
    like: "2.3K",
    comment: 900,
    uploadDate: "23 days ago",
    imgUrl: "/assets/images/sq-11.jpg",
  },
  {
    like: "2.3K",
    comment: 900,
    uploadDate: "23 days ago",
    imgUrl: "/assets/images/sq-12.jpg",
  },
  {
    like: "2.3K",
    comment: 900,
    uploadDate: "23 days ago",
    imgUrl: "/assets/images/sq-13.jpg",
  },
];

export default Analytics3;
