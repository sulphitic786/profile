import { KeyboardArrowDown } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  Grid,
  Stack,
  Switch,
  TextField,
} from "@mui/material";
import { H5, Paragraph } from "app/components/Typography";

const Preferences = () => {
  return (
    <Card>
      <H5 padding={3}>General Preferences</H5>
      <Divider />

      <Box padding={3}>
        <Grid container spacing={4}>
          <Grid item sm={6} xs={12}>
            <TextField
              select
              fullWidth
              label="Language"
              variant="outlined"
              placeholder="Language"
              value="english"
              SelectProps={{ native: true, IconComponent: KeyboardArrowDown }}
            >
              <option value="english">English</option>
              <option value="bangla">Bangla</option>
              <option value="hindi">Hindi</option>
            </TextField>
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField variant="outlined" label="Time Zone" fullWidth value="12:00 AM" />
          </Grid>

          <Grid item sm={6} xs={12}>
            <Stack direction="row" justifyContent="space-between">
              <Box>
                <H5 mb={0.5}>Early release</H5>
                <Paragraph>Get included on new Octavia features.</Paragraph>
              </Box>

              <Switch defaultChecked />
            </Stack>

            <Stack direction="row" justifyContent="space-between" mt={2}>
              <Box>
                <H5 mb={0.5}>See info about people who view my profile</H5>
                <Paragraph>More about viewer info.</Paragraph>
              </Box>

              <Switch defaultChecked />
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <H5 padding={3}>Email Preferences</H5>
      <Divider />

      <Stack spacing={2} padding={3}>
        <Stack direction="row" spacing={2}>
          <Checkbox />
          <Box>
            <H5>Successful Payments</H5>
            <Paragraph>Receive a notification for every successful payment.</Paragraph>
          </Box>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Checkbox checked />
          <Box>
            <H5>Payouts</H5>
            <Paragraph>Receive a notification for every initiated payout.</Paragraph>
          </Box>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Checkbox checked />
          <Box>
            <H5>Fee Collection</H5>
            <Paragraph>Receive a notification each time you collect a fee from sales</Paragraph>
          </Box>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Checkbox />
          <Box>
            <H5>Invoice Payments</H5>
            <Paragraph>
              Receive a notification if a customer sends an incorrect amount to pay their invoice.
            </Paragraph>
          </Box>
        </Stack>
      </Stack>

      <Stack direction="row" spacing={3} padding={3}>
        <Button variant="contained">Save Changes</Button>
        <Button variant="outlined">Cancel</Button>
      </Stack>
    </Card>
  );
};

export default Preferences;
