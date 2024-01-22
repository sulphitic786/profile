import { Box, Button, Card, Divider, Stack, Switch, TextField } from "@mui/material";
import { H5, Paragraph } from "app/components/Typography";

const TwoStepVerification = () => {
  return (
    <Card>
      <Box padding={3}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <H5>Two-step verification</H5>
          <Switch defaultChecked />
        </Stack>

        <Paragraph mt={1}>
          Start by entering your password so that we know it's you. Then we'll walk you through two
          more simple steps.
        </Paragraph>
      </Box>

      <Divider />

      <Box px={3} py={4} maxWidth={450}>
        <TextField fullWidth label="Account Password" value="Enter Current Password" />
        <Paragraph mt={1.5}>
          This is the password you use to log in to your Front account.
        </Paragraph>

        <Stack direction="row" spacing={2} mt={4}>
          <Button variant="contained">Save Changes</Button>
          <Button variant="outlined">Cancel</Button>
        </Stack>
      </Box>
    </Card>
  );
};

export default TwoStepVerification;
