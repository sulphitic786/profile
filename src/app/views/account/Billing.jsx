import { Delete, Edit } from "@mui/icons-material";
import { Avatar, Box, Button, Card, Chip, Divider, Grid, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import LinearProgress from "@mui/material/LinearProgress";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { FlexBetween } from "app/components/FlexBox";
import { H5, H6, Paragraph } from "app/components/Typography";
import Alert from "./common/Alert";
import BillingAddressListItem from "./common/BillingAddressListItem";
import NewAddressCard from "./common/NewAddressCard";
import { BodyTableCell, HeadTableCell } from "./common/StyledComponents";

const Billing = () => {
  return (
    <Card>
      <H5 padding={3}>Billing</H5>
      <Divider />

      <Box padding={3}>
        <Alert
          btnText="Add Payment Method"
          title="We Need Your Attention"
          description="Your payment was declined. To start using tools, please add Payment Method"
        />

        <Stack spacing={3} maxWidth={400} py={4}>
          <Box>
            <FlexBetween mb={0.5}>
              <H5>Users</H5>
              <H5 color="primary.main">50</H5>
            </FlexBetween>

            <LinearProgress variant="determinate" value={50} />
            <Paragraph mt={1}>14 Users remaining until your plan requires update</Paragraph>
          </Box>

          <Box>
            <H5>Active until Dec 09, 2021</H5>
            <Paragraph mt={0.5}>
              We will send you a notification upon Subscription expiration
            </Paragraph>
          </Box>

          <Box>
            <H5>$24.99 Per Month</H5>
            <Paragraph mt={0.5}>Extended Pro Package. Up to 100 Agents & 25 Projects</Paragraph>
          </Box>
        </Stack>

        <Stack direction="row" spacing={3}>
          <Button variant="contained">Upgrade Plan</Button>
          <Button variant="outlined">Cancel</Button>
        </Stack>
      </Box>

      <Box mb={2}>
        <H5 padding={3} pt={2}>
          Payment Methods
        </H5>

        <Table sx={{ minWidth: 700 }}>
          <TableHead sx={{ backgroundColor: "grey.100" }}>
            <TableRow>
              <HeadTableCell>Card</HeadTableCell>
              <HeadTableCell>Name</HeadTableCell>
              <HeadTableCell>Expire Date</HeadTableCell>
              <HeadTableCell>Action</HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {[1, 2, 3].map((item) => (
              <TableRow key={item}>
                <BodyTableCell>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Avatar src="/assets/images/payment-card/001-paypal.svg" />
                    <H6>Paypal **** 1679</H6>
                  </Stack>
                </BodyTableCell>

                <BodyTableCell>Marcus Morris</BodyTableCell>
                <BodyTableCell>09/24/2022</BodyTableCell>

                <BodyTableCell>
                  <IconButton>
                    <Edit sx={{ color: "text.disabled", fontSize: 18 }} />
                  </IconButton>

                  <IconButton>
                    <Delete sx={{ color: "text.disabled", fontSize: 18 }} />
                  </IconButton>
                </BodyTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>

      <Box padding={3}>
        <H5 mb={3}>Billing Address</H5>

        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <BillingAddressListItem />
          </Grid>

          <Grid item md={6} xs={12}>
            <BillingAddressListItem />
          </Grid>

          <Grid item md={6} xs={12}>
            <BillingAddressListItem />
          </Grid>

          <Grid item md={6} xs={12}>
            <NewAddressCard />
          </Grid>
        </Grid>
      </Box>

      <Box mb={2}>
        <H5 padding={3} pt={2}>
          Billing History
        </H5>

        <Table sx={{ minWidth: 700 }}>
          <TableHead sx={{ backgroundColor: "grey.100" }}>
            <TableRow>
              <HeadTableCell>Description</HeadTableCell>
              <HeadTableCell>Amount</HeadTableCell>
              <HeadTableCell>Invoice</HeadTableCell>
              <HeadTableCell>Date</HeadTableCell>
              <HeadTableCell>Action</HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {billingHistory.map((item) => (
              <TableRow key={item.id}>
                <BodyTableCell>{item.description}</BodyTableCell>
                <BodyTableCell>${item.amount}</BodyTableCell>

                <BodyTableCell>
                  <Chip
                    label={item.invoice}
                    sx={{ color: "white", borderRadius: "4px", backgroundColor: "primary.main" }}
                  />
                </BodyTableCell>

                <BodyTableCell>{item.date}</BodyTableCell>

                <BodyTableCell>
                  <IconButton>
                    <Edit sx={{ color: "text.disabled", fontSize: 19 }} />
                  </IconButton>

                  <IconButton>
                    <Delete sx={{ color: "text.disabled", fontSize: 19 }} />
                  </IconButton>
                </BodyTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
};

const billingHistory = [
  { id: 1, description: "Invoice for Octavia", amount: 890, invoice: "PDF", date: "Nov 12, 2021" },
  { id: 2, description: "Invoice for Uko", amount: 420, invoice: "DOC", date: "Nov 10, 2021" },
  { id: 3, description: "Invoice for Stocky", amount: 590, invoice: "PDF", date: "Nov 24, 2021" },
  { id: 4, description: "Invoice for Aatrox", amount: 750, invoice: "DOC", date: "Nov 19, 2021" },
  { id: 5, description: "Invoice for Octavia", amount: 890, invoice: "PDF", date: "Nov 12, 2021" },
];

export default Billing;
