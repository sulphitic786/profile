import { Card, Fade, styled, Table, TableBody, TableCell, TableRow } from "@mui/material";
import { H3, Small } from "app/components/Typography";
import { format } from "date-fns";

const StyledCell = styled(TableCell)({ textTransform: "capitalize" });

const StyedSmall = styled(Small)(({ theme, status }) => ({
  padding: "2px 8px",
  color: "#fff",
  borderRadius: "4px",
  background: status.toString().includes(2)
    ? "#08ad6c"
    : status.toString().includes(4) && theme.palette.error.main,
}));

const CustomerLogs = () => {
  return (
    <Fade in timeout={300}>
      <Card elevation={3} sx={{ width: "100%", overflow: "auto" }}>
        <H3 sx={{ p: 2, pb: 0 }}>Customer Activity Log</H3>

        <Table sx={{ minWidth: 1050 }}>
          <TableBody>
            {logList.map((eventLog, index) => (
              <TableRow key={index}>
                <StyledCell align="left" colSpan={1} sx={{ pl: 2 }}>
                  <b>{eventLog.type}</b>
                </StyledCell>
                <StyledCell colSpan={1}>
                  <StyedSmall status={eventLog.status}>{eventLog.status}</StyedSmall>
                </StyledCell>

                <TableCell align="left" colSpan={3}>
                  {eventLog.description}
                </TableCell>

                <StyledCell align="left" colSpan={1}>
                  {eventLog.ip}
                </StyledCell>

                <StyledCell align="left" colSpan={1}>
                  {format(new Date(eventLog.date), "dd MMM, yyyy | hh:mm aa")}
                </StyledCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </Fade>
  );
};

const logList = [
  {
    type: "POST",
    date: new Date(),
    description: "/api/shop",
    method: "PayPal",
    ip: "110.145.15.25",
    status: 200,
  },
  {
    type: "POST",
    date: new Date(),
    description: "/api/customer",
    method: "Visa Card",
    ip: "110.145.75.25",
    status: 401,
  },
  {
    type: "GET",
    date: new Date(),
    description: "/api/get-customer-details",
    method: "Master Card",
    ip: "110.145.45.25",
    status: 200,
  },
  {
    type: "DELETE",
    date: new Date(),
    description: "/api/delete-customer",
    method: "Master Card",
    ip: "110.145.45.25",
    status: 200,
  },
];
export default CustomerLogs;
