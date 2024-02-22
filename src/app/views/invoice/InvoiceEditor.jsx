import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  styled,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField
} from "@mui/material";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FlexBetween, FlexBox } from "../../components/FlexBox";
import { H5, Paragraph } from "../../components/Typography";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import shortid from "shortid";
import { addInvoice, getInvoiceById, updateInvoice } from "./InvoiceService";
import { StyledTable } from "./InvoiceViewer";

const StyledH5 = styled("h5")({ fontSize: 15 });

const FlexEndBox = styled(FlexBox)({ justifyContent: "flex-end" });

const FormBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  "& .label": { height: 32 }
});

const InvoiceEditor = ({ isNewInvoice, toggleInvoiceEditor }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isAlive, setIsAlive] = useState(true);
  const [state, setState] = useState(initialValues);

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSellerBuyerChange = (event, fieldName) => {
    event.persist();
    setState({
      ...state,
      [fieldName]: { ...state[fieldName], [event.target.name]: event.target.value }
    });
  };

  const handleIvoiceListChange = (event, index) => {
    let tempItemList = [...state.item];

    tempItemList.forEach((element, i) => {
      if (index === i) element[event.target.name] = event.target.value;
    });

    setState({ ...state, item: tempItemList });
  };

  const addItemToInvoiceList = () => {
    let tempItemList = [...state.item];
    tempItemList.push({ name: "", unit: "", price: "" });
    setState({ ...state, item: tempItemList });
  };

  const deleteItemFromInvoiceList = (index) => {
    let tempItemList = [...state.item];
    tempItemList.splice(index, 1);

    setState({ ...state, item: tempItemList });
  };

  const handleDateChange = (date) => setState({ ...state, date });

  const handleSubmit = () => {
    setState({ ...state, loading: true });
    let tempState = { ...state };
    delete tempState.loading;
    if (isNewInvoice)
      addInvoice(tempState).then(() => {
        setState({ ...state, loading: false });
        navigate(`/invoice/${state.id}`);
        toggleInvoiceEditor();
      });
    else
      updateInvoice(tempState).then(() => {
        setState({ ...state, loading: false });
        toggleInvoiceEditor();
      });
  };

  useEffect(() => {
    if (!isNewInvoice) {
      getInvoiceById(id).then(({ data }) => {
        if (isAlive) setState({ ...data });
      });
    } else {
      setState((state) => ({ ...state, id: shortid.generate() }));
    }
  }, [id, isNewInvoice, isAlive]);

  useEffect(() => {
    return () => setIsAlive(false);
  }, []);

  let subTotalCost = 0;
  let {
    vat,
    buyer,
    seller,
    status,
    orderNo,
    loading,
    currency,
    item: invoiceItemList = []
  } = state;

  return (
    <Box py={2} className="invoice-viewer">
      <form onSubmit={handleSubmit}>
        <FlexEndBox mb={3} px={2} gap={2} className="viewer_actions">
          <Button type="button" variant="text" onClick={() => toggleInvoiceEditor()}>
            Cancel
          </Button>

          <Button type="submit" color="primary" variant="contained" disabled={loading}>
            Save
          </Button>
        </FlexEndBox>

        <FormBox px={2} mb={2} className="viewer__order-info">
          <Box>
            <StyledH5 sx={{ mb: 1 }}>Order Info</StyledH5>
            <Paragraph sx={{ mb: 2 }}>Order Number</Paragraph>
            <TextField
              fullWidth
              type="text"
              name="orderNo"
              value={orderNo}
              label="Order No."
              onChange={handleChange}
            />
          </Box>

          <Box>
            <FormControl component="fieldset" sx={{ mb: 2, width: "100%" }}>
              <RadioGroup aria-label="status" name="status" value={status} onChange={handleChange}>
                <FormControlLabel
                  value="pending"
                  label="Pending"
                  className="label"
                  labelPlacement="start"
                  control={<Radio color="secondary" />}
                />

                <FormControlLabel
                  className="label"
                  value="processing"
                  label="Processing"
                  labelPlacement="start"
                  control={<Radio color="secondary" />}
                />

                <FormControlLabel
                  className="label"
                  value="delivered"
                  label="Delivered"
                  labelPlacement="start"
                  control={<Radio color="secondary" />}
                />
              </RadioGroup>
            </FormControl>

            <Box textAlign="right">
              <StyledH5 sx={{ fontWeight: "500" }}>
                <strong>Order date: </strong>
              </StyledH5>
            </Box>

            {/* <DatePicker
              value={new Date()}
              onChange={handleDateChange}
              renderInput={(props) => (
                <TextField {...props} variant="standard" label="Order Date" id="mui-pickers-date" />
              )}
            /> */}
          </Box>
        </FormBox>

        <Divider />

        <FlexBetween flexWrap="nowrap" gap={2} px={2} mb={2}>
          <Box maxWidth={400} width="100%">
            <StyledH5 sx={{ mb: "20px" }}>Bill From</StyledH5>
            <TextField
              fullWidth
              name="name"
              type="text"
              sx={{ mb: "20px" }}
              label="Seller Name"
              value={seller ? seller.name : null}
              onChange={(event) => handleSellerBuyerChange(event, "seller")}
            />
            <TextField
              rows={4}
              fullWidth
              type="text"
              name="address"
              multiline={true}
              label="Seller Name"
              value={seller ? seller.address : null}
              onChange={(event) => handleSellerBuyerChange(event, "seller")}
            />
          </Box>

          <Box maxWidth={400} width="100%">
            <StyledH5 sx={{ mb: "20px" }}>Bill To</StyledH5>
            <TextField
              fullWidth
              type="text"
              name="name"
              label="Buyer Name"
              sx={{ mb: "20px" }}
              value={buyer ? buyer.name : null}
              onChange={(event) => handleSellerBuyerChange(event, "buyer")}
            />
            <TextField
              rows={4}
              fullWidth
              type="text"
              name="address"
              multiline={true}
              label="Buyer Address"
              value={buyer ? buyer.address : null}
              onChange={(event) => handleSellerBuyerChange(event, "buyer")}
            />
          </Box>
        </FlexBetween>

        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Item Name</TableCell>
              <TableCell align="center">Unit Price</TableCell>
              <TableCell align="center">Unit</TableCell>
              <TableCell align="center">Cost</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {invoiceItemList.map((item, index) => {
              subTotalCost += item.price * item.unit;
              return (
                <TableRow key={index}>
                  <TableCell align="left">{index + 1}</TableCell>

                  <TableCell align="left">
                    <TextField
                      fullWidth
                      type="text"
                      name="name"
                      size="small"
                      label="Item Name"
                      value={item ? item.name : null}
                      onChange={(event) => handleIvoiceListChange(event, index)}
                    />
                  </TableCell>

                  <TableCell align="center">
                    <TextField
                      fullWidth
                      name="price"
                      size="small"
                      type="number"
                      label="Item Price"
                      value={item ? item.price : null}
                      onChange={(event) => handleIvoiceListChange(event, index)}
                      style={{ maxWidth: 100 }}
                    />
                  </TableCell>

                  <TableCell align="center">
                    <TextField
                      fullWidth
                      name="unit"
                      size="small"
                      type="number"
                      label="Item Unit"
                      value={item ? item.unit : null}
                      onChange={(event) => handleIvoiceListChange(event, index)}
                      style={{ maxWidth: 100 }}
                    />
                  </TableCell>

                  <TableCell align="center">${item.unit * item.price}</TableCell>

                  <TableCell align="center">
                    <Button onClick={() => deleteItemFromInvoiceList(index)}>Delete</Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </StyledTable>

        <FlexEndBox p={2}>
          <Button variant="contained" onClick={addItemToInvoiceList}>
            Add Item
          </Button>
        </FlexEndBox>

        {/* total cost calculation */}
        <Box px={2} py={1} maxWidth={300} marginLeft="auto">
          <FlexBetween mb={2}>
            <Paragraph>Sub Total:</Paragraph>
            <Paragraph>${subTotalCost}</Paragraph>
          </FlexBetween>

          <FlexBetween mb={2}>
            <Paragraph flexGrow={1}>Vat(%):</Paragraph>
            <TextField
              name="vat"
              label="Vat"
              value={vat}
              size="small"
              type="number"
              onChange={handleChange}
              style={{ maxWidth: 100 }}
            />
          </FlexBetween>

          <FlexBetween mb={2}>
            <Paragraph flexGrow={1}>currency:</Paragraph>
            <TextField
              type="text"
              size="small"
              name="currency"
              label="Currency"
              value={currency}
              onChange={handleChange}
              sx={{ maxWidth: 100 }}
            />
          </FlexBetween>

          <FlexBetween>
            <H5>Grand Total:</H5>
            <H5>${subTotalCost + (subTotalCost * vat) / 100}</H5>
          </FlexBetween>
        </Box>
      </form>
    </Box>
  );
};

const initialValues = {
  id: "",
  vat: "",
  item: [],
  status: "",
  orderNo: "",
  currency: "",
  loading: false,
  date: new Date(),
  buyer: { name: "", address: "" },
  seller: { name: "", address: "" }
};

export default InvoiceEditor;
