import { Box, Button, Card, Checkbox, Divider, Stack } from "@mui/material";
import { H5, H6, Paragraph } from "app/components/Typography";

const DeleteAccount = () => {
  return (
    <Card sx={{ pb: 3 }}>
      <Box padding={3}>
        <H5 mb={1}>Delete Your Account</H5>
        <Paragraph lineHeight={1.7} maxWidth={600}>
          When you delete your account, you lose access to Front account services, and we
          permanently delete your personal data. You can cancel the deletion for 14 days.
        </Paragraph>
      </Box>

      <Divider />

      <Stack direction="row" alignItems="center" spacing={1} p={2}>
        <Checkbox />
        <H6 fontSize={12}>Confirm that I want to delete my account.</H6>
      </Stack>

      <Stack px={3} direction="row" spacing={2}>
        <Button variant="contained" color="error">
          Delete
        </Button>

        <Button variant="outlined">Delete</Button>
      </Stack>
    </Card>
  );
};

export default DeleteAccount;
