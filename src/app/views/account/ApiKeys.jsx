import { ContentCopy, Delete } from "@mui/icons-material";
import {
  alpha,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  Select,
  styled,
  Switch,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { FlexBetween, FlexBox } from "app/components/FlexBox";
import { H5, Paragraph, Span, Tiny } from "app/components/Typography";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Alert from "./common/Alert";
import { BodyTableCell, HeadTableCell } from "./common/StyledComponents";

const StyledStatus = styled(Span)(({ theme, error }) => ({
  padding: "3px 8px",
  borderRadius: "4px",
  color: error ? theme.palette.error.main : theme.palette.success.main,
  backgroundColor: alpha(error ? theme.palette.error.main : theme.palette.success.main, 0.2),
}));

const ApiKeys = () => {
  return (
    <Card>
      <FlexBetween px={3} py={2}>
        <H5>API Overview</H5>
        <FormControlLabel control={<Switch defaultChecked />} label="Test Mode" />
      </FlexBetween>

      <Divider />

      <Box padding={3}>
        <Grid container spacing={4} mb={3}>
          <Grid item sm={6} xs={12}>
            <H5 mb={0.5}>How to set Api</H5>
            <Paragraph mb={2}>
              Use images to enhance your post, improve its flow, add humor and explain complex
              topics
            </Paragraph>
            <Button variant="outlined">Get Started</Button>
          </Grid>

          <Grid item sm={6} xs={12}>
            <H5 mb={0.5}>Developer Tools</H5>
            <Paragraph mb={2}>
              Plan your blog post by choosing a topic, creating an outline conduct research, and
              checking facts
            </Paragraph>
            <Button variant="outlined">Create Rule</Button>
          </Grid>
        </Grid>

        <Alert
          hiddenButton
          title="Two Factor Authentication"
          description="adds an extra layer of security to your account. To log in, in you'll need to provide a 4 digit amazing and create outstanding products to serve your clients Learn More."
        />
      </Box>

      <FlexBetween px={3} py={2}>
        <H5>Login Sessions</H5>

        <Select value="1" onChange={() => {}}>
          <MenuItem value="1">1 Hour</MenuItem>
          <MenuItem value="2">2 Hour</MenuItem>
          <MenuItem value="3">3 Hour</MenuItem>
        </Select>
      </FlexBetween>

      <Table sx={{ minWidth: 800 }}>
        <TableHead sx={{ backgroundColor: "grey.100" }}>
          <TableRow>
            <HeadTableCell>Location</HeadTableCell>
            <HeadTableCell>Status</HeadTableCell>
            <HeadTableCell>Device</HeadTableCell>
            <HeadTableCell>IP Address</HeadTableCell>
            <HeadTableCell>Time</HeadTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {sessionList.map((item) => (
            <TableRow key={item.id}>
              <BodyTableCell>{item.location}</BodyTableCell>
              <BodyTableCell>
                <StyledStatus error={item.status === "Error"}>{item.status}</StyledStatus>
              </BodyTableCell>
              <BodyTableCell>{item.device}</BodyTableCell>
              <BodyTableCell>{item.ip}</BodyTableCell>
              <BodyTableCell>{item.time}</BodyTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <H5 p={3}>API Keys</H5>

      <Table sx={{ minWidth: 800 }}>
        <TableHead sx={{ backgroundColor: "grey.100" }}>
          <TableRow>
            <HeadTableCell>Label</HeadTableCell>
            <HeadTableCell>API Keys</HeadTableCell>
            <HeadTableCell>Created</HeadTableCell>
            <HeadTableCell>IStatus</HeadTableCell>
            <HeadTableCell>Action</HeadTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {keys.map((item, index) => (
            <TableRow key={index}>
              <BodyTableCell>{item.label}</BodyTableCell>
              <BodyTableCell>
                <FlexBox alignItems="center">
                  <Tiny fontSize={12} minWidth={180}>
                    {item.key}
                  </Tiny>

                  <CopyToClipboard text={item.key} onCopy={() => true}>
                    <IconButton>
                      <ContentCopy sx={{ fontSize: 17, color: "text.disabled" }} />
                    </IconButton>
                  </CopyToClipboard>
                </FlexBox>
              </BodyTableCell>

              <BodyTableCell>{item.created}</BodyTableCell>

              <BodyTableCell>
                <StyledStatus error={item.status === "Inactive"}>{item.status}</StyledStatus>
              </BodyTableCell>

              <BodyTableCell>
                <IconButton>
                  <Delete sx={{ color: "text.disabled", fontSize: 18 }} />
                </IconButton>
              </BodyTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

const sessionList = [
  {
    id: 1,
    location: "USA(5)",
    status: "Ok",
    device: "Chrome - Windows",
    ip: "236.125.56.78",
    time: "2 mins ago",
  },
  {
    id: 2,
    location: "United Kingdom(10)",
    status: "Ok",
    device: "Safari - Mac OS",
    ip: "236.125.56.79",
    time: "4 mins ago",
  },
  {
    id: 3,
    location: "Norway(8)",
    status: "Error",
    device: "Firefox - Windows",
    ip: "236.125.56.74",
    time: "10 mins ago",
  },
];

const keys = [
  {
    label: "none set",
    key: "fftt456765gjkkjhi83093985",
    created: "Nov 12, 2021",
    status: "Active",
  },
  {
    label: "Navitare",
    key: "jk076590ygghgh324vd33",
    created: "Nov 14, 2021",
    status: "Active",
  },
  {
    label: "Docs API Key",
    key: "fftt456765gjkkjhi83093985",
    created: "Nov 14, 2021",
    status: "Inactive",
  },
  {
    label: "Remore Interface",
    key: "jk076590ygghgh324vd33",
    created: "Nov 15, 2021",
    status: "Active",
  },
];

export default ApiKeys;
