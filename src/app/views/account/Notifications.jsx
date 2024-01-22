import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, Button, Card, Checkbox, Stack, Table, TextField } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { H5, Paragraph } from "app/components/Typography";
import { BodyTableCell, HeadTableCell } from "./common/StyledComponents";

const Notifications = () => {
  return (
    <Card>
      <Box padding={3}>
        <H5>Notifications</H5>
        <Paragraph mt={1}>
          We need permission from your browser to show notifications. Request permission
        </Paragraph>
      </Box>

      <Table sx={{ minWidth: 600 }}>
        <TableHead sx={{ backgroundColor: "grey.100" }}>
          <TableRow>
            <HeadTableCell>Type</HeadTableCell>
            <HeadTableCell>Email</HeadTableCell>
            <HeadTableCell>Browser</HeadTableCell>
            <HeadTableCell>App</HeadTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {notificationSettings.map((item) => (
            <TableRow key={item.id}>
              <BodyTableCell>{item.type}</BodyTableCell>

              <BodyTableCell>
                <Checkbox defaultChecked={item.email} />
              </BodyTableCell>

              <BodyTableCell>
                <Checkbox defaultChecked={item.browser} />
              </BodyTableCell>

              <BodyTableCell>
                <Checkbox defaultChecked={item.app} />
              </BodyTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Box padding={3}>
        <Box mb={6} mt={2}>
          <TextField
            select
            fullWidth
            value="always"
            variant="outlined"
            placeholder="Language"
            label="When should we send you notifications?"
            SelectProps={{ native: true, IconComponent: KeyboardArrowDown }}
            sx={{ maxWidth: 400 }}
          >
            <option value="always">Always</option>
          </TextField>

          <Paragraph mt={2}>
            In order to cut back on noise, email notifications are grouped together and only sent
            when you're idle or offline.
          </Paragraph>
        </Box>

        <Stack direction="row" spacing={2}>
          <Button variant="contained">Save Changes</Button>
          <Button variant="outlined">Cancel</Button>
        </Stack>
      </Box>
    </Card>
  );
};

const notificationSettings = [
  { id: 1, type: "New for you", email: true, browser: false, app: false },
  { id: 2, type: "Account activity", email: true, browser: true, app: true },
  { id: 3, type: "A new browser used to sign in", email: true, browser: true, app: true },
  { id: 4, type: "A new device is linked", email: false, browser: true, app: false },
  { id: 5, type: "A new device connected", email: true, browser: false, app: false },
];

export default Notifications;
