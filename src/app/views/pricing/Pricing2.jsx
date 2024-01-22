import { Button, Card, Grid, Icon, styled, useTheme } from "@mui/material";
import { FlexAlignCenter } from "app/components/FlexBox";
import { themeShadows } from "app/components/MatxTheme/themeColors";
import { H1, H4, Paragraph } from "app/components/Typography";

// styled components
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  position: "relative",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
}));

const CardWrapper = styled(Card)(() => ({
  padding: 32,
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  "& h4": { marginBottom: "24px", fontSize: "20px" },
  "& .icon": { fontSize: 72, marginBottom: "32px" },
}));

const GridContent = styled(FlexAlignCenter)(() => ({
  padding: "2rem 0",
  flexDirection: "column",
  "& h4": { marginBottom: "24px", fontSize: "20px" },
  "& .icon": { fontSize: 72, marginBottom: "32px" },
}));

const ContentBox = styled(FlexAlignCenter)(({ theme }) => ({
  flexWrap: "wrap",
  "& .title": { margin: "8px", color: theme.palette.text.secondary },
  "& .content": {
    padding: "2px",
    overflow: "hidden",
    borderRadius: "300px",
    background: "rgba(0, 0, 0, 0.15)",
  },
}));

const PriceBox = styled("div")(({ textcolor, theme }) => ({
  display: "flex",
  marginTop: "40px",
  marginBottom: "40px",
  "& h1": { fontSize: "48px", color: theme.palette.text.secondary },
  "& b": {
    marginTop: "6px",
    marginLeft: "4px",
    color: textcolor && textcolor,
  },
}));

const StyledButton = styled(Button)(({ bgcolor }) => ({
  color: "#fff",
  fontSize: "18px",
  fontWeight: "500",
  overflow: "hidden",
  paddingLeft: "28px",
  paddingRight: "28px",
  borderRadius: "300px",
  boxShadow: themeShadows[12],
  background: bgcolor && bgcolor,
}));

const StyledP = styled(Paragraph)(({ theme }) => ({
  marginTop: "8px",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Pricing2 = () => {
  const { palette } = useTheme();

  const colors = [
    palette.error.main,
    "rgba(9, 182, 109, 1)",
    palette.secondary.main,
    palette.primary.main,
  ];

  const textMuted = palette.text.secondary;

  return (
    <Container>
      <Grid container spacing={3}>
        {planList.map(({ id, features, icon, title, price }) => (
          <Grid item lg={4} xs={12} key={id}>
            <CardWrapper>
              <Icon className="icon" color="primary">
                {icon}
              </Icon>
              <H4 sx={{ color: textMuted }}>{title}</H4>

              <ContentBox>
                <span className="title">{features.domain} Domain</span>
                <span className="content" />
                <span className="title">{features.users} Users</span>
                <span className="content" />
                <span className="title">{features.copies} Copies</span>
              </ContentBox>

              <StyledP maxWidth={300}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </StyledP>

              <PriceBox textcolor={textMuted}>
                <H1>{price}</H1>
                <b>$</b>
              </PriceBox>

              <StyledButton variant="contained" color="primary">
                Purchase
              </StyledButton>
            </CardWrapper>
          </Grid>
        ))}
      </Grid>

      <Card elevation={3} sx={{ px: 3, mt: 3 }}>
        <Grid container spacing={3}>
          {planList2.map(({ id, features, icon, title, price }, i) => (
            <Grid item lg={6} xs={12} key={id}>
              <GridContent>
                <Icon className="icon" sx={{ color: colors[i] }}>
                  {icon}
                </Icon>

                <H4 sx={{ color: textMuted }}>{title}</H4>

                <ContentBox>
                  <span className="title">{features.domain} Domain</span>
                  <span className="content" />
                  <span className="title">{features.users} Users</span>
                  <span className="content" />
                  <span className="title">{features.copies} Copies</span>
                </ContentBox>

                <StyledP>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </StyledP>

                <PriceBox textcolor={textMuted}>
                  <H1>{price}</H1>
                  <b>$</b>
                </PriceBox>

                <StyledButton variant="contained" sx={{ background: colors[i] }}>
                  Purchase
                </StyledButton>
              </GridContent>
            </Grid>
          ))}
        </Grid>
      </Card>
    </Container>
  );
};

const planList = [
  {
    id: 1,
    price: 75,
    title: "Startup",
    icon: "sports_football",
    features: { domain: 1, users: 5, copies: 10 },
  },
  {
    id: 2,
    price: 175,
    title: "Growth Plan",
    icon: "trending_up",
    features: { domain: 8, users: 15, copies: 100 },
  },
  {
    id: 3,
    price: 875,
    title: "Enterprise",
    icon: "apartment",
    features: { domain: 10, users: 25, copies: 1000 },
  },
];

const planList2 = [
  {
    id: 1,
    price: 20,
    title: "Student",
    icon: "person",
    features: { domain: 1, users: 5, copies: 10 },
  },
  {
    id: 2,
    price: 75,
    title: "Basic Plan",
    icon: "flight",
    features: { domain: 8, users: 15, copies: 100 },
  },
  {
    id: 3,
    price: 375,
    title: "For Business",
    icon: "apartment",
    features: { domain: 10, users: 25, copies: 1000 },
  },
  {
    id: 4,
    price: 875,
    title: "Enterprise",
    icon: "meeting_room",
    features: { domain: 18, users: 35, copies: 10000 },
  },
];

export default Pricing2;
