import { Box, Button, Card } from "@mui/material";
import { H5, Paragraph } from "app/components/Typography";

const NewAddressCard = () => {
  return (
    <Card
      sx={{
        border: 1,
        padding: 2,
        height: "100%",
        minHeight: 100,
        display: "flex",
        alignItems: "center",
        borderColor: "grey.200",
        boxShadow: "none !important",
        justifyContent: "space-between",
        // backgroundColor: palette.mode === "light" ? "grey.200" : "divider",
      }}
    >
      <Box maxWidth="60%">
        <H5>Enter a new address</H5>
        <Paragraph lineHeight={1.8}>Add your new destination..</Paragraph>
      </Box>

      <Button variant="contained">New Address</Button>
    </Card>
  );
};

export default NewAddressCard;
