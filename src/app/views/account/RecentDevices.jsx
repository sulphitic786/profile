import { Avatar, Box, Card, Chip, Table, TableHead, TableRow } from "@mui/material";
import TableBody from "@mui/material/TableBody";

import { FlexBetween, FlexBox } from "app/components/FlexBox";
import { H5, Paragraph } from "app/components/Typography";
import { BodyTableCell, HeadTableCell } from "./common/StyledComponents";

const RecentDevices = () => {
  return (
    <Card sx={{ pb: 1 }}>
      <FlexBetween padding={3} flexWrap="wrap">
        <H5 lineHeight={1.8}>Recent Devices</H5>
        <Paragraph lineHeight={1.5}>
          View and manage devices where you're currently logged in.
        </Paragraph>
      </FlexBetween>

      <Box>
        <Table sx={{ minWidth: 800, overflow: "auto" }}>
          <TableHead sx={{ backgroundColor: "grey.100" }}>
            <TableRow>
              <HeadTableCell>Browser</HeadTableCell>
              <HeadTableCell>Device</HeadTableCell>
              <HeadTableCell>Location</HeadTableCell>
              <HeadTableCell>Recent Activity</HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {activityList.map((item) => (
              <TableRow key={item.id}>
                <BodyTableCell>
                  <FlexBox alignItems="center">
                    <Avatar src={item.browserIcon} sx={{ width: 20, height: 20, mr: 1 }} />
                    <Paragraph>{item.browser}</Paragraph>
                  </FlexBox>
                </BodyTableCell>

                <BodyTableCell>{item.device}</BodyTableCell>

                <BodyTableCell>
                  <FlexBox alignItems="center" gap={1}>
                    <Paragraph>{item.location}</Paragraph>
                    {item.current && (
                      <Chip
                        label="current"
                        sx={{
                          height: 25,
                          color: "white",
                          borderRadius: "10px",
                          backgroundColor: "success.main",
                        }}
                      />
                    )}
                  </FlexBox>
                </BodyTableCell>

                <BodyTableCell>{item.recentActivity}</BodyTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
};

const activityList = [
  {
    id: 1,
    browser: "Chrome on Windows",
    browserIcon: "/assets/images/browsers/chrome.svg",
    device: "Dell XPS 12",
    location: "New York, USA",
    recentActivity: "Now",
    current: true,
  },
  {
    id: 2,
    browser: "Mozilla Firefox",
    browserIcon: "/assets/images/browsers/mozilla.svg",
    device: "Acer Aspire 300",
    location: "New York, USA",
    recentActivity: "15 June 2020",
  },
  {
    id: 3,
    browser: "Safari Browser",
    browserIcon: "/assets/images/browsers/safari.svg",
    device: "Macbook Pro 2020",
    location: "London, UK",
    recentActivity: "05 October 2020",
  },
  {
    id: 4,
    browser: "Apple Browser",
    browserIcon: "/assets/images/browsers/apple.svg",
    device: "IPhone 13 Pro Max",
    location: "Manchester, UK",
    recentActivity: "05 October 2020",
  },
];

export default RecentDevices;
