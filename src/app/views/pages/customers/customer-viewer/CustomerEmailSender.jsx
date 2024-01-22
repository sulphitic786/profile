import { MailOutline } from "@mui/icons-material";
import {
  Button,
  Card,
  Divider,
  MenuItem,
  styled,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
} from "@mui/material";
import { FlexBox } from "app/components/FlexBox";
import { H4 } from "app/components/Typography";

const ContentBox = styled(FlexBox)({
  marginBottom: "16px",
  flexDirection: "column",
  alignItems: "flex-start",
});

const CustomerEmailSender = () => {
  return (
    <Card elevation={3}>
      <H4 sx={{ p: 2 }}>Send Email</H4>
      <Divider sx={{ mb: 2 }} />

      <ContentBox px={2}>
        <TextField
          select
          fullWidth
          size="small"
          variant="outlined"
          defaultValue="Resend Last Invoice"
          sx={{ mb: 2 }}
        >
          {menuItemList.map((item) => (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          ))}
        </TextField>

        <Button
          variant="contained"
          startIcon={<MailOutline fontSize="small" />}
          sx={{ boxShadow: "none" }}
        >
          Send Email
        </Button>
      </ContentBox>

      <Table>
        <TableBody>
          {customerInfo.map((item, ind) => (
            <TableRow key={ind}>
              <TableCell sx={{ pl: 2 }}>{item.title}</TableCell>
              <TableCell>{item.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

const menuItemList = [
  "Resend Last Invoice",
  "Send Password Reset Email",
  "Send Verification Email",
];

const customerInfo = [
  { title: "27/10/2020 | 12:23", value: "Order Received" },
  { title: "11/05/2020 | 01:19", value: "Order Confirmation" },
];

export default CustomerEmailSender;
