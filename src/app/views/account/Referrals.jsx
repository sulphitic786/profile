import { CheckCircleOutline, Login, ShowChart } from "@mui/icons-material";
import {
  Box,
  ButtonBase,
  Card,
  Divider,
  Grid,
  InputBase,
  MenuItem,
  Select,
  Stack,
  styled,
  useTheme,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { FlexBetween } from "app/components/FlexBox";
import DollarOutlined from "app/components/icons/DollarOutlined";
import { H5, Paragraph } from "app/components/Typography";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Alert from "./common/Alert";
import { BodyTableCell, HeadTableCell } from "./common/StyledComponents";

const EarningBox = styled(Box)(({ theme }) => ({
  paddingTop: 12,
  paddingBottom: 12,
  textAlign: "center",
  borderRadius: "8px",
  border: `1px solid ${theme.palette.grey[100]}`,
}));

const Referrals = () => {
  const theme = useTheme();
  const [referLink] = useState("https://OctaviaX.com/reffer/?refid=345re66787k8");

  const earningList = [
    {
      id: 1,
      amount: 85460,
      Icon: ShowChart,
      name: "Net Earnings",
      iconColor: theme.palette.primary.main,
    },
    {
      id: 2,
      amount: 44550,
      Icon: DollarOutlined,
      name: "Balance",
      iconColor: theme.palette.success.main,
    },
    {
      id: 3,
      amount: 4550,
      Icon: CheckCircleOutline,
      name: "Avg Deal Size",
      iconColor: theme.palette.error.main,
    },
    {
      id: 4,
      amount: 4550,
      Icon: Login,
      name: "Referral Signup",
      iconColor: theme.palette.info.main,
    },
  ];

  return (
    <Card sx={{ pb: 2 }}>
      <H5 padding={3}>Referrals</H5>
      <Divider />

      <Box padding={3}>
        <Grid container spacing={3} mb={3}>
          {earningList.map((item) => (
            <Grid item md={3} sm={6} xs={12} key={item.id}>
              <EarningBox key={item.id}>
                <item.Icon sx={{ color: item.iconColor }} />
                <H5 my={0.5}>${item.amount}</H5>
                <Paragraph fontSize={12}>{item.name}</Paragraph>
              </EarningBox>
            </Grid>
          ))}
        </Grid>

        <Alert
          btnText="Withdraw $44,550"
          title="We Need Your Attention"
          description="Writing headlines for blog posts is as much an art as it is a science, and warrants its own post, but for now, all I’d advise is experimenting what works for your audience, especially if it’s not resonating with your audience"
        />

        <Box py={3}>
          <Grid container spacing={2}>
            <Grid item lg={6} xs={12}>
              <H5 mb={0.5}>Your Referral Link</H5>
              <Paragraph>
                Plan your blog post by choosing a topic, creating an outline conduct research, and
                checking facts
              </Paragraph>
            </Grid>

            <Grid item lg={6} xs={12}>
              <Stack direction="row" spacing={2}>
                <InputBase
                  value={referLink}
                  disabled
                  sx={{
                    flexGrow: 1,
                    width: "100%",
                    fontWeight: 500,
                    padding: "5px 12px",
                    backgroundColor: "grey.100",
                  }}
                />
                <CopyToClipboard text={referLink} onCopy={() => true}>
                  <ButtonBase
                    sx={{ padding: "0.6rem 1.5rem", backgroundColor: "grey.300", flexShrink: 0 }}
                  >
                    Copy Link
                  </ButtonBase>
                </CopyToClipboard>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <FlexBetween px={3} pb={2}>
        <H5>Referred Users</H5>

        <Select value="2021" onChange={() => {}}>
          <MenuItem value="2021">2021</MenuItem>
          <MenuItem value="2020">2020</MenuItem>
          <MenuItem value="2019">2019</MenuItem>
        </Select>
      </FlexBetween>

      <Table sx={{ minWidth: 800 }}>
        <TableHead sx={{ backgroundColor: "grey.100" }}>
          <TableRow>
            <HeadTableCell>Order ID</HeadTableCell>
            <HeadTableCell>User</HeadTableCell>
            <HeadTableCell>Date</HeadTableCell>
            <HeadTableCell>Bonus</HeadTableCell>
            <HeadTableCell>Profit</HeadTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {referList.map((item) => (
            <TableRow key={item.orderId}>
              <BodyTableCell>{item.orderId}</BodyTableCell>
              <BodyTableCell>{item.user}</BodyTableCell>
              <BodyTableCell>{item.date}</BodyTableCell>
              <BodyTableCell>{item.bonus}%</BodyTableCell>
              <BodyTableCell sx={{ color: "success.main" }}>${item.profit}</BodyTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

const referList = [
  {
    orderId: "678935899",
    user: "Marcus Harris",
    date: "Nov 12, 2021",
    bonus: 15,
    profit: 1200,
  },
  {
    orderId: "678935900",
    user: "Robert Smith",
    date: "Nov 14, 2021",
    bonus: 53,
    profit: 2400,
  },
  {
    orderId: "678935901",
    user: "Williams Brown",
    date: "Nov 15, 2021",
    bonus: 76,
    profit: 1200,
  },
  {
    orderId: "678935902",
    user: "Robert Smith",
    date: "Nov 14, 2021",
    bonus: 53,
    profit: 2400,
  },
];

export default Referrals;
