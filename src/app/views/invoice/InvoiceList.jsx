import { Delete, Edit } from "@mui/icons-material";
import {
  alpha,
  Box,
  Button,
  Card,
  IconButton,
  styled,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { ConfirmationDialog } from "app/components";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteInvoice, getAllInvoice } from "./InvoiceService";
import { StyledTable } from "./InvoiceViewer";

const Container = styled(Box)(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
}));

const Invoice = styled("small")(({ theme, status }) => ({
  borderRadius: "8px",
  padding: ".3rem .5rem",
  ...(status === "delivered" && {
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
  }),
  ...(status === "processing" && {
    color: theme.palette.secondary.main,
    backgroundColor: alpha(theme.palette.secondary.main, 0.1),
  }),
  ...(status === "pending" && {
    color: theme.palette.error.main,
    backgroundColor: alpha(theme.palette.error.main, 0.1),
  }),
}));

const InvoiceList = () => {
  const [invoiceList, setInvoiceList] = useState([]);
  const [invoice, setInvoice] = useState(null);
  const [open, setOpen] = useState(false);
  const [isAlive, setIsAlive] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    getAllInvoice().then((res) => {
      if (isAlive) setInvoiceList(res.data);
    });

    return () => setIsAlive(false);
  }, [isAlive]);

  const handeViewClick = (invoiceId) => {
    navigate(`/invoice/${invoiceId}`);
  };

  const handeDeleteClick = (invoice) => {
    setInvoice(invoice);
    setOpen(true);
  };

  const handleConfirmationResponse = () => {
    deleteInvoice(invoice).then((res) => {
      if (isAlive) {
        setInvoiceList(res.data);
        setOpen(false);
      }
    });
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Link to="/invoice/add">
        <Button sx={{ mb: 2 }} variant="contained" color="primary">
          Add Invoice
        </Button>
      </Link>

      <Card elevation={6} sx={{ width: "100%", overflow: "auto" }}>
        <StyledTable sx={{ minWidth: 750 }}>
          <TableHead>
            <TableRow>
              <TableCell>Order No.</TableCell>
              <TableCell>Bill From</TableCell>
              <TableCell>Bill To</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {invoiceList.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell align="left">{invoice.orderNo}</TableCell>
                <TableCell align="left">{invoice.seller.name}</TableCell>
                <TableCell align="left">{invoice.buyer.name}</TableCell>

                <TableCell align="center">
                  <Invoice status={invoice.status}>{invoice.status}</Invoice>
                </TableCell>

                <TableCell align="center">
                  <IconButton onClick={() => handeViewClick(invoice.id)}>
                    <Edit sx={{ fontSize: 20 }} />
                  </IconButton>

                  <IconButton onClick={() => handeDeleteClick(invoice)}>
                    <Delete sx={{ fontSize: 20 }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </Card>

      <ConfirmationDialog
        open={open}
        onConfirmDialogClose={handleDialogClose}
        onYesClick={handleConfirmationResponse}
        text="Are you sure to delete?"
      />
    </Container>
  );
};

export default InvoiceList;
