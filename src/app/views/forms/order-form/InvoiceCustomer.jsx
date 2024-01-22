import { Avatar, Box, Card, Divider, Rating, styled } from "@mui/material";
import { FlexAlignCenter, FlexBetween } from "app/components/FlexBox";
import { H4, H5, Paragraph } from "app/components/Typography";
import { Link } from "react-router-dom";

// styled components
const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 100,
  height: 100,
  marginBottom: 3,
  boxShadow: theme.shadows[3],
  border: "4px solid rgba(var(--body), 0.03)",
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const InvoiceCustomer = () => {
  return (
    <Card sx={{ p: 2 }}>
      <FlexBetween sx={{ mb: 2 }}>
        <H4 fontWeight={500}>Customer</H4>
        <StyledLink to="/">View Details</StyledLink>
      </FlexBetween>

      <Divider sx={{ mb: 3 }} />

      <FlexAlignCenter flexDirection="column" mb={3}>
        <StyledAvatar src="/assets/images/faces/5.jpg" />
        <H5>Devid Templehov</H5>
        <Paragraph mt={1} color="primary.main">
          davidtempletone@gmail.com
        </Paragraph>
        <Paragraph mb={1}>+21 (050) 071-91-58</Paragraph>
        <Rating readOnly={true} value={4} />
      </FlexAlignCenter>

      <Divider sx={{ mb: 3 }} />

      <Box mb={3}>
        <Paragraph mb={1.5} fontWeight={500}>
          Shipping Address
        </Paragraph>
        <Paragraph>39, Hilbert Store</Paragraph>
        <Paragraph>New York, NY, United States</Paragraph>
      </Box>

      <Box>
        <Paragraph mb={1.5} fontWeight={500}>
          Billing Address
        </Paragraph>
        <Paragraph>39, Hilbert Store</Paragraph>
        <Paragraph>New York, NY, United States</Paragraph>
      </Box>
    </Card>
  );
};

export default InvoiceCustomer;
