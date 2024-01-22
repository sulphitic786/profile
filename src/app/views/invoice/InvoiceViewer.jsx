import {
  Box,
  Button,
  Divider,
  Icon,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { FlexBetween } from "app/components/FlexBox";
import { H5, Paragraph } from "app/components/Typography";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getInvoiceById } from "./InvoiceService";

const ButtonBox = styled(FlexBetween)(() => ({
  paddingLeft: "16px",
  paddingRight: "16px",
  marginBottom: "20px",
  alignItems: "center",
  "& button": { fontSize: "13px", textTransform: "capitalize" },
}));

const TextBox = styled("div")(() => ({
  textAlign: "right",
  "& h5": { fontWeight: "500", textTransform: "capitalize" },
}));

const StyledH5 = styled(H5)(() => ({
  fontSize: 15,
  "& span": { fontWeight: "normal" },
}));

export const StyledTable = styled(Table)(({ theme }) => ({
  "& thead": {
    "& tr": {
      background: theme.palette.background.default,
      "& th": { paddingLeft: 0, paddingRight: 0 },
      "& th:first-of-type": {
        paddingLeft: "24px !important",
        [theme.breakpoints.down("sm")]: { paddingLeft: "16px !important" },
      },
    },
  },
  "& tbody": {
    "& tr": {
      "& td": { paddingLeft: 0, textTransform: "capitalize" },
      "& td:first-of-type": {
        paddingLeft: "24px !important",
        [theme.breakpoints.down("sm")]: { paddingLeft: "16px !important" },
      },
    },
  },
}));

const InvoiceViewer = ({ toggleInvoiceEditor }) => {
  const { id } = useParams();
  const [state, setState] = useState({});

  useEffect(() => {
    if (id !== "add")
      getInvoiceById(id).then((res) => {
        setState({ ...res.data });
      });
  }, [id]);

  const handlePrint = () => window.print();

  let subTotalCost = 0;
  let { orderNo, buyer, seller, item: invoiceItemList = [], status, vat, date } = state;

  return (
    <Box py={2} className="invoice-viewer">
      <ButtonBox className="viewer_actions">
        <Link to="/invoice/list">
          <IconButton>
            <Icon>arrow_back</Icon>
          </IconButton>
        </Link>
        <div>
          <Button
            sx={{ mr: 2, py: 1 }}
            variant="contained"
            color="primary"
            onClick={() => toggleInvoiceEditor()}
          >
            Edit Invoice
          </Button>
          <Button sx={{ py: 1 }} onClick={handlePrint} variant="contained" color="secondary">
            Print Invoice
          </Button>
        </div>
      </ButtonBox>

      <div id="print-area">
        <FlexBetween px={2} mb={2} className="viewer__order-info">
          <Box>
            <StyledH5 sx={{ mb: 1 }}>Order Info</StyledH5>
            <Paragraph sx={{ mb: 2 }}>Order Number</Paragraph>
            <Paragraph># {orderNo}</Paragraph>
          </Box>

          <TextBox>
            <StyledH5 sx={{ mb: 1 }}>
              <strong>Order status: </strong>
              <span>{status}</span>
            </StyledH5>

            <StyledH5>
              <strong>Order date: </strong>
              <span>{date ? format(new Date(date).getTime(), "MMMM dd, yyyy") : ""}</span>
            </StyledH5>
          </TextBox>
        </FlexBetween>

        <Divider />

        <FlexBetween px={2} py="20px" mb={2} className="viewer__billing-info">
          <Box>
            <StyledH5 sx={{ mb: 1 }}>Bill From</StyledH5>
            <Paragraph sx={{ mb: 2 }}>{seller ? seller.name : null}</Paragraph>
            <Paragraph sx={{ whiteSpace: "pre" }}>{seller ? seller.address : null}</Paragraph>
          </Box>

          <Box width="100%" textAlign="right">
            <StyledH5 sx={{ mb: 1 }}>Bill To</StyledH5>
            <Paragraph sx={{ mb: 2 }}>{buyer ? buyer.name : null}</Paragraph>
            <Paragraph sx={{ whiteSpace: "pre" }}>{buyer ? buyer.address : null}</Paragraph>
          </Box>
        </FlexBetween>

        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="center">Item Name</TableCell>
              <TableCell align="center">Unit Price</TableCell>
              <TableCell align="center">Unit</TableCell>
              <TableCell align="center">Cost</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {invoiceItemList.map((item, index) => {
              subTotalCost += item.unit * item.price;
              return (
                <TableRow key={index}>
                  <TableCell align="left">{index + 1}</TableCell>
                  <TableCell align="center">{item.name}</TableCell>
                  <TableCell align="center">${item.price}</TableCell>
                  <TableCell align="center">{item.unit}</TableCell>
                  <TableCell align="center">${item.unit * item.price}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </StyledTable>

        <Box px={2} py={1} maxWidth={300} marginLeft="auto">
          <FlexBetween my={2}>
            <Paragraph>Sub Total:</Paragraph>
            <Paragraph>${subTotalCost}</Paragraph>
          </FlexBetween>

          <FlexBetween my={2}>
            <Paragraph>Vat(%):</Paragraph>
            <Paragraph>{vat}</Paragraph>
          </FlexBetween>

          <FlexBetween>
            <H5>Grand Total:</H5>
            <H5>${(subTotalCost += (subTotalCost * vat) / 100)}</H5>
          </FlexBetween>
        </Box>
      </div>
    </Box>
  );
};

export default InvoiceViewer;
