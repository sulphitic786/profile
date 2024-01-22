import { Box, Button, Card, Grid, lighten, styled } from "@mui/material";
import { themeShadows } from "app/components/MatxTheme/themeColors";
import { H1, H3, H4, Paragraph, Small } from "app/components/Typography";

// styled components
const Container = styled(Box)(({ theme }) => ({
  margin: "30px",
  position: "relative",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  padding: "24px",
  boxShadow: "none",
  marginBottom: "44px",
  background: lighten(theme.palette.error.main, 0.85),
}));

const GridContent = styled(Card)(({ theme }) => ({
  borderRadius: 20,
  textAlign: "center",
  transition: "all 0.3s ease",
  padding: "24px !important",
  "&:hover": { boxShadow: themeShadows[12] },
  [theme.breakpoints.down("sm")]: { padding: "16px !important" },
}));

const IMG = styled("img")({
  width: 152,
  height: 152,
  marginBottom: "16px",
});

const Pricing = () => {
  return (
    <Container>
      <StyledCard>
        <H4 color="error.main">You are using the free version of the Application</H4>

        <Paragraph color="text.secondary" maxWidth={770}>
          With 10k searchable messages, 10 apps and integrations, 1-to-1 video calls and two factor
          authentication. The free version gives your team access to Application's basic features
        </Paragraph>
      </StyledCard>

      <Box mb={4} textAlign="center">
        <H3>Choose the plan that's right for your team</H3>
        <Paragraph color="text.secondary" pt={1}>
          Pay month or year and cancel at any time
        </Paragraph>
      </Box>

      <Grid container spacing={6}>
        {planList.map((item) => (
          <Grid key={item.title} item md={4} sm={6} xs={12}>
            <GridContent elevation={6}>
              <IMG src={item.logo} alt={item.title} />

              <Box mb={2}>
                <H4 sx={{ fontWeight: "300", color: "primary.main", textTransform: "uppercase" }}>
                  {item.title}
                </H4>

                <H1 sx={{ fontSize: "48px", color: "primary.main", textTransform: "uppercase" }}>
                  ${item.price}
                </H1>

                <Small color="text.secondary">Monthly</Small>
              </Box>

              <Box mb={3} color="text.secondary" sx={{ "& p": { fontSize: "16px" } }}>
                <Paragraph>Complete CRM service</Paragraph>
                <Paragraph sx={{ my: "16px" }}>100GB disk space</Paragraph>
                <Paragraph>upto 5 users</Paragraph>
              </Box>

              <Button variant="contained" color="primary" sx={{ textTransform: "uppercase" }}>
                Sign up
              </Button>
            </GridContent>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const planList = [
  { title: "Starter", price: 75, logo: "/assets/images/illustrations/baby.svg" },
  { title: "Growing", price: 195, logo: "/assets/images/illustrations/upgrade.svg" },
  { title: "Enterprise", price: 495, logo: "/assets/images/illustrations/business_deal.svg" },
];

export default Pricing;
