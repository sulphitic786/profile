import { Box, Button, Grid, Icon, IconButton, styled } from "@mui/material";
import { FlexBetween, FlexBox } from "app/components/FlexBox";
import { H3 } from "app/components/Typography";
import InvoiceCustomer from "./InvoiceCustomer";
import InvoiceOverview from "./InvoiceOverview";

// styled components
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
}));

const TextBox = styled(Box)({
  color: "#fff",
  fontSize: "11px",
  padding: "3px 12px",
  borderRadius: "4px",
});

const Invoice2 = () => {
  return (
    <Container>
      <FlexBetween flexWrap="wrap" mb={3} gap={2}>
        <Box>
          <H3 sx={{ mb: 1, fontSize: "28px", fontWeight: "500" }}>Order #1028</H3>

          <FlexBox gap={1.5}>
            <TextBox bgcolor="#08ad6c">Paid</TextBox>
            <TextBox bgcolor="secondary.main">Unfulfilled</TextBox>
          </FlexBox>
        </Box>

        <Box>
          <IconButton>
            <Icon>more_horiz</Icon>
          </IconButton>

          <Button variant="contained">Fulfill Order</Button>
        </Box>
      </FlexBetween>

      <Grid container spacing={3}>
        <Grid item md={8} xs={12}>
          <InvoiceOverview />
        </Grid>

        <Grid item md={4} xs={12}>
          <InvoiceCustomer />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Invoice2;
