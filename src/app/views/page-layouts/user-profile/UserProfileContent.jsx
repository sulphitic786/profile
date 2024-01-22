import {
  Badge,
  Box,
  Card,
  Divider,
  Fab,
  Grid,
  Icon,
  IconButton,
  lighten,
  styled,
  useTheme,
} from "@mui/material";
import { FlexBetween } from "app/components/FlexBox";
import { H1, H3, H4, Paragraph, Span } from "app/components/Typography";
import { convertHexToRGB } from "app/utils/utils";
import { Fragment } from "react";
import DummyChart from "./DummyChart";
import ProfileBarChart from "./ProfileBarChart";

const FlexBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

const ProfileContent = styled("div")(() => ({
  marginTop: "-345px",
  paddingTop: "74px",
  paddingRight: "30px",
  paddingLeft: "4px",
  "& .menu-button": {
    display: "none",
  },
  "@media only screen and (max-width: 959px)": {
    marginTop: "-390px",
    paddingTop: "24px",
    paddingRight: "16px",
    paddingLeft: "16px",
  },
  "@media only screen and (max-width: 767px)": {
    marginTop: "-410px",
    paddingTop: "16px",
    paddingRight: "16px",
    paddingLeft: "16px",
    "& .menu-button": { display: "flex" },
  },
}));

const StyledCard = styled(Card)(() => ({
  height: 96,
  padding: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "rgba(0, 0, 0, 0.15)",
}));

const StyledH1 = styled(H1)(() => ({
  fontWeight: "normal",
  marginBottom: "4px",
}));

const StyledSpan = styled(Span)(({ theme }) => ({
  fontWeight: "normal",
  textTransform: "uppercase",
  color: theme.palette.text.secondary,
}));

const StyledFab = styled(Fab)(({ bgcolor, textcolor }) => ({
  boxShadow: "none",
  overflow: "hidden",
  background: bgcolor,
  "& h3": { color: textcolor, fontWeight: "normal" },
}));

const TextBox = styled(Box)(({ theme }) => ({
  marginLeft: "16px",
  "& h4": { marginBottom: "4px", fontWeight: "500" },
  "& p": { color: theme.palette.text.secondary },
}));

const StyledCard2 = styled(Card)(() => ({
  display: "flex",
  paddingTop: "8px",
  overflow: "unset",
  paddingBottom: "8px",
}));

const IMG = styled("img")(() => ({ width: "100%", overflow: "hidden" }));
const Card2LeftContent = styled("div")(() => ({ minWidth: 100, textAlign: "center" }));

const Card2RightContent = styled(FlexBetween)(({ theme }) => ({
  paddingRight: "16px",
  paddingBottom: "12px",
  "& h4": { fontWeight: "500", textTransform: "capitalize" },
  "& span": { color: theme.palette.text.secondary },
}));

const UserProfileContent = ({ toggleSidenav }) => {
  const { palette } = useTheme();
  const textError = palette.error.main;
  const textMuted = palette.text.secondary;
  const textPrimary = palette.primary.main;
  const bgLightGreen = "rgba(9, 182, 109, 0.15)";
  const bgLightError = lighten(palette.error.main, 0.85);
  const bgLightPrimary = `rgba(${convertHexToRGB(textPrimary)}, 0.15)`;
  const bgGrey = "rgba(0, 0, 0, 0.15)";

  return (
    <ProfileContent>
      <Box display="flex" justifyContent="flex-end" className="menu-button">
        <IconButton onClick={toggleSidenav}>
          <Icon sx={{ color: "#fff" }}>menu</Icon>
        </IconButton>
      </Box>

      <div className="headerCardHolder">
        <Grid container spacing={3}>
          {projectSummery.map((project) => (
            <Grid item lg={4} md={4} sm={12} xs={12} key={project.title}>
              <StyledCard>
                <div>
                  <StyledSpan sx={{ color: "rgba(255, 255, 255, 0.54)" }}>
                    {project.title}
                  </StyledSpan>

                  <H3 sx={{ color: "#fff", paddingTop: 1, fontWeight: "normal" }}>
                    {project.amount}
                  </H3>
                </div>

                <Box height={36} width={56}>
                  <DummyChart height="40px" />
                </Box>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </div>
      <Box py={4} />
      <Grid container spacing={3}>
        <Grid item lg={8} md={8} sm={12} xs={12}>
          <Card sx={{ pb: 2 }}>
            <H3 sx={{ color: textMuted, padding: "16px", paddingBottom: 0, fontWeight: "normal" }}>
              Data Use
            </H3>
            <ProfileBarChart height="260px" color={[palette.warn]} />

            <FlexBox pt={2} justifyContent="space-around">
              <div>
                <StyledH1>140</StyledH1>
                <StyledSpan>avg yearly</StyledSpan>
              </div>

              <div>
                <StyledH1>12</StyledH1>
                <StyledSpan>avg monthly</StyledSpan>
              </div>

              <div>
                <StyledH1>3</StyledH1>
                <StyledSpan>avg weekly</StyledSpan>
              </div>
            </FlexBox>
          </Card>
        </Grid>

        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Card sx={{ p: 2, height: "100%" }}>
            <H3 sx={{ color: textMuted, marginBottom: 3, fontWeight: "500" }}>Data Use</H3>
            <FlexBox mb={2}>
              <Badge badgeContent="New" color="primary">
                <StyledFab textcolor={textPrimary} bgcolor={bgLightPrimary}>
                  <H3>MR</H3>
                </StyledFab>
              </Badge>

              <TextBox>
                <H4>Watson Joyce</H4>
                <Paragraph>London</Paragraph>
              </TextBox>
            </FlexBox>

            <FlexBox mb={2}>
              <StyledFab textcolor={"#08ad6c"} bgcolor={bgLightGreen}>
                <H3>WT</H3>
              </StyledFab>

              <TextBox>
                <H4>Watson Joyce</H4>
                <Paragraph>London</Paragraph>
              </TextBox>
            </FlexBox>

            <FlexBox mb={2}>
              <StyledFab textcolor={textError} bgcolor={bgLightError}>
                <H3>RY</H3>
              </StyledFab>

              <TextBox>
                <H4>Watson Joyce</H4>
                <Paragraph>London</Paragraph>
              </TextBox>
            </FlexBox>

            <FlexBox>
              <StyledFab textcolor={textError} bgcolor={bgLightPrimary}>
                <H3>MR</H3>
              </StyledFab>

              <TextBox>
                <H4>Watson Joyce</H4>
                <Paragraph>London</Paragraph>
              </TextBox>
            </FlexBox>
          </Card>
        </Grid>

        <Grid item lg={8} md={8} sm={12} xs={12}>
          <Box py="12px" />
          <StyledCard2>
            <Card2LeftContent>
              <Fab size="medium" color="primary" sx={{ mt: -7, position: "relative" }}>
                <Icon>trending_up</Icon>
              </Fab>
              <Box py="12px" />

              <IconButton size="small">
                <Icon>favorite</Icon>
              </IconButton>
              <Paragraph sx={{ pb: 2 }}>65</Paragraph>

              <IconButton size="small">
                <Icon>chat</Icon>
              </IconButton>
              <Paragraph>65</Paragraph>
            </Card2LeftContent>

            <Box flexGrow={1}>
              <Card2RightContent>
                <H4>update profile picture</H4>
                <Span>12/03/2019</Span>
              </Card2RightContent>

              <Divider sx={{ mb: 2 }} />

              <Box height={220}>
                <IMG
                  alt="random"
                  src="/assets/images/photo-1.jpg"
                  sx={{ height: "100%", borderRadius: "4px" }}
                />
              </Box>
            </Box>
          </StyledCard2>

          <Box py="28px" />

          <StyledCard2>
            <Card2LeftContent>
              <Fab
                size="medium"
                color="primary"
                className="cardLeftVerticalLine"
                sx={{ mt: -7, position: "relative" }}
              >
                <Icon>star_outline</Icon>
              </Fab>
            </Card2LeftContent>

            <Box flexGrow={1}>
              <Card2RightContent>
                <H4>bought air ticket</H4>
                <Span>12/03/2019</Span>
              </Card2RightContent>

              <Divider />

              <Paragraph sx={{ pt: "12px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s
              </Paragraph>
            </Box>
          </StyledCard2>
          <Box py="28px" />

          <StyledCard2>
            <Card2LeftContent>
              <Fab
                size="medium"
                color="primary"
                className="cardLeftVerticalLine"
                sx={{ mt: -7, position: "relative" }}
              >
                <Icon>date_range</Icon>
              </Fab>
            </Card2LeftContent>

            <Box flexGrow={1}>
              <Card2RightContent>
                <H4>timeline box title</H4>
                <Span>12/03/2019</Span>
              </Card2RightContent>

              <Divider />

              <Paragraph sx={{ pt: "12px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s
              </Paragraph>
            </Box>
          </StyledCard2>
        </Grid>

        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Card>
            {paymentList.map((method, index) => (
              <Fragment key={index}>
                <FlexBetween py={2} px={3} flexWrap="wrap">
                  <FlexBox flexWrap="wrap">
                    <FlexBox
                      width={64}
                      height={52}
                      justifyContent="center"
                      sx={{ background: bgGrey }}
                    >
                      <IMG src={method.img} alt="master card" sx={{ height: 36 }} />
                    </FlexBox>

                    <Box ml={2}>
                      <H4 sx={{ mb: "4px", fontWeight: "500" }}>{method.type}</H4>
                      <Span sx={{ color: textMuted }}>{method.product}</Span>
                    </Box>
                  </FlexBox>
                </FlexBetween>

                {index !== paymentList.length - 1 && <Divider />}
              </Fragment>
            ))}
          </Card>
        </Grid>
      </Grid>
      <Box py="8px" />
    </ProfileContent>
  );
};

const projectSummery = [
  { title: "Project Created", amount: 11 },
  { title: "Project Completed", amount: 15 },
  { title: "Project Published", amount: 25 },
];

const paymentList = [
  {
    img: "/assets/images/payment-methods/master-card.png",
    type: "Master Card",
    product: "Bundled product",
    amount: 909,
  },
  {
    img: "/assets/images/payment-methods/paypal.png",
    type: "Master Card",
    product: "Bundled product",
    amount: 303,
  },
  {
    img: "/assets/images/payment-methods/visa.png",
    type: "Paypal",
    product: "Bundled product",
    amount: 330,
  },
  {
    img: "/assets/images/payment-methods/maestro.png",
    type: "Paypal",
    product: "Bundled product",
    amount: 909,
  },
  {
    img: "/assets/images/payment-methods/maestro.png",
    type: "Master Card",
    product: "Bundled product",
    amount: 909,
  },
];

export default UserProfileContent;
