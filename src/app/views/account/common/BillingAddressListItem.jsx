import { Delete, Edit, HomeOutlined } from "@mui/icons-material";
import { Box, Card, IconButton, Stack } from "@mui/material";
import { H5, Paragraph } from "app/components/Typography";

const BillingAddressListItem = () => {
  return (
    <Card
      sx={{
        border: 1,
        padding: 2,
        display: "flex",
        alignItems: "center",
        borderColor: "grey.200",
        boxShadow: "none !important",
        justifyContent: "space-between",
      }}
    >
      <Box maxWidth="60%">
        <Stack direction="row" alignItems="center" spacing={1}>
          <HomeOutlined sx={{ color: "text.disabled" }} />
          <H5>Home</H5>
        </Stack>

        <Paragraph mt={1}>Ap #285-7193 Ullamcorper Avenue Amesbury HI 93373 US</Paragraph>
      </Box>

      <Stack direction="row">
        <IconButton>
          <Edit sx={{ color: "text.disabled", fontSize: 19 }} />
        </IconButton>

        <IconButton>
          <Delete sx={{ color: "text.disabled", fontSize: 19 }} />
        </IconButton>
      </Stack>
    </Card>
  );
};

export default BillingAddressListItem;
