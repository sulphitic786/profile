import { Box, Button, Card, Divider, Grid, Icon, MenuItem, styled, TextField } from '@mui/material';
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FlexBox } from 'app/components/FlexBox';
import { H4, Span } from 'app/components/Typography';
import { Formik } from 'formik';
import { calculateAmount } from './InvoiceFormService';
import InvoiceItemTable from './InvoiceItemTable';

// styled components
const InvoiceRoot = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' }
}));

const StyledCard = styled(Card)(({ theme }) => ({
  padding: '16px',
  background: theme.palette.background.default
}));

const StyledInput = styled(TextField)({
  minWidth: '188px !important',
  '& label': { fontSize: '14px' },
  '& label.MuiInputLabel-shrink': { marginTop: '0px' },
  '& .MuiOutlinedInput-root': {
    '& .MuiOutlinedInput-input': {
      fontSize: '14px',
      padding: '10px 14px !important'
    }
  }
});

// const StyledDatePicker = styled(DatePicker)({
//   margin: '8px !important',
//   '& label': { fontSize: '14px' },
//   '& .MuiOutlinedInput-input': {
//     fontSize: '14px',
//     padding: '10px 14px !important'
//   },
//   '& button': { padding: '6px' }
// });

const InvoiceForm = () => {
  const calculateSubTotal = (itemList = []) => {
    let subTotal = 0;
    itemList.forEach((item) => {
      subTotal += calculateAmount(item);
    });

    return subTotal;
  };

  const calculateTotal = (values) => {
    let total = 0;
    total += calculateSubTotal(values.items);
    total += values.shippingCharge || 0;
    total += values[values.otherField] || 0;

    return total;
  };

  const handleSubmit = async (values, { isSubmitting }) => {
    console.log(values);
  };

  return (
    <InvoiceRoot>
      <Card elevation={3}>
        <H4 p={2}>New Invoice</H4>

        <Divider sx={{ mb: 1 }} />

        <Formik initialValues={initialValues} onSubmit={handleSubmit} enableReinitialize={true}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setSubmitting,
            setFieldValue
          }) => (
            <form style={{ padding: '16px' }} onSubmit={handleSubmit}>
              <Grid container spacing={3} alignItems="center">
                <Grid item md={2} sm={4} xs={12}>
                  Customer Name
                </Grid>

                <Grid item md={10} sm={8} xs={12}>
                  <StyledInput
                    select
                    label="Name"
                    size="small"
                    id="inputField"
                    variant="outlined"
                    name="customerName"
                    value={values.customerName || ''}
                    onChange={handleChange}
                  >
                    {customerList.map((item) => (
                      <MenuItem value={item} key={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </StyledInput>
                </Grid>

                <Grid item md={2} sm={4} xs={12}>
                  Invoice#
                </Grid>

                <Grid item md={10} sm={8} xs={12}>
                  <StyledInput
                    size="small"
                    name="invoiceNo"
                    variant="outlined"
                    label="Invoice No"
                    onChange={handleChange}
                    value={values.invoiceNo}
                    defaultValue="INV-000001"
                  />
                </Grid>

                <Grid item md={2} sm={4} xs={12}>
                  Order Number
                </Grid>

                <Grid item md={10} sm={8} xs={12}>
                  <StyledInput
                    size="small"
                    name="orderNo"
                    label="Invoice No"
                    variant="outlined"
                    value={values.orderNo}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item md={2} sm={4} xs={12}>
                  Invoice Date
                </Grid>

                <Grid item md={10} sm={8} xs={12}>
                  <Box m={-1} display="flex" flexWrap={1}>
                    {/* <StyledDatePicker
                      value={values.invoiceDate}
                      inputFormat="MMMM dd, yyyy"
                      onChange={(date) => setFieldValue("invoiceDate", date)}
                      renderInput={(props) => (
                        <StyledInput
                          {...props}
                          variant="outlined"
                          label="Invoice Date"
                          sx={{ m: "8px !important" }}
                        />
                      )}
                    /> */}

                    <StyledInput
                      select
                      name="terms"
                      size="small"
                      label="Terms"
                      variant="outlined"
                      onChange={handleChange}
                      value={values.terms || ''}
                      sx={{ m: '8px !important' }}
                    >
                      {paymentTermList.map((item) => (
                        <MenuItem value={item} key={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </StyledInput>

                    {/* <StyledDatePicker
                      value={values.invoiceDate}
                      inputFormat="MMMM dd, yyyy"
                      onChange={(date) => setFieldValue("dueDate", date)}
                      renderInput={(props) => (
                        <StyledInput
                          {...props}
                          label="Due Date"
                          variant="outlined"
                          sx={{ m: "8px !important" }}
                        />
                      )}
                    /> */}
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Divider />
                </Grid>

                <Grid item md={2} sm={4} xs={12}>
                  Salesperson Name
                </Grid>

                <Grid item md={10} sm={8} xs={12}>
                  <StyledInput
                    select
                    size="small"
                    variant="outlined"
                    name="salesPersonName"
                    onChange={handleChange}
                    label="Salesperson Name"
                    value={values.salesPersonName || ''}
                  >
                    {customerList.map((item, ind) => (
                      <MenuItem value={item} key={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </StyledInput>
                </Grid>

                <Grid item xs={12}>
                  <Divider />
                </Grid>
              </Grid>

              <Box mb={4}>
                <InvoiceItemTable
                  values={values}
                  setFieldValue={setFieldValue}
                  handleChange={handleChange}
                />
              </Box>

              <Box mb={4}>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <TextField
                      rows={6}
                      fullWidth
                      multiline
                      name="notes"
                      size="small"
                      variant="outlined"
                      label="Custom Notes"
                      value={values.notes}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <StyledCard elevation={0}>
                      <Grid container spacing={3} justify="space-between" alignItems="center">
                        <Grid item xs={6}>
                          Sub Total
                        </Grid>

                        <Grid item xs={6}>
                          <Box textAlign="right">{calculateSubTotal(values.items).toFixed(2)}</Box>
                        </Grid>

                        <Grid item xs={6}>
                          <FlexBox alignItems="center">
                            <Span sx={{ whiteSpace: 'pre' }}>Shipping Charges</Span>

                            <StyledInput
                              size="small"
                              type="number"
                              variant="outlined"
                              name="shippingCharge"
                              onChange={handleChange}
                              sx={{ ml: '12px !important' }}
                              value={values.shippingCharge || ''}
                            />
                          </FlexBox>
                        </Grid>

                        <Grid item xs={6}>
                          <Box textAlign="right">{(values.shippingCharge || 0).toFixed(2)}</Box>
                        </Grid>

                        <Grid item xs={6}>
                          <FlexBox alignItems="center">
                            <StyledInput
                              size="small"
                              name="otherField"
                              variant="outlined"
                              onChange={handleChange}
                              value={values.otherField || ''}
                            />

                            <StyledInput
                              size="small"
                              type="number"
                              variant="outlined"
                              onChange={handleChange}
                              name={values.otherField}
                              sx={{ ml: '12px !important' }}
                              value={values[values.otherField] || ''}
                            />
                          </FlexBox>
                        </Grid>

                        <Grid item xs={6}>
                          <Box textAlign="right">{(values[values.otherField] || 0).toFixed(2)}</Box>
                        </Grid>

                        <Grid item xs={6}>
                          <H4 sx={{ m: 0 }}>Total ( $ )</H4>
                        </Grid>

                        <Grid item xs={6}>
                          <Box textAlign="right">
                            <H4 sx={{ m: 0 }}>{calculateTotal(values).toFixed(2)}</H4>
                          </Box>
                        </Grid>
                      </Grid>
                    </StyledCard>
                  </Grid>
                </Grid>
              </Box>

              <StyledCard elevation={0}>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <TextField
                      rows={4}
                      multiline
                      fullWidth
                      size="small"
                      variant="outlined"
                      name="terms_conditions"
                      onChange={handleChange}
                      label="Terms & Conditions"
                      value={values.terms_conditions}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <label htmlFor="upload-multiple-file">
                      <Button
                        color="primary"
                        component="span"
                        variant="contained"
                        sx={{ textTransform: 'capitalize' }}
                      >
                        <FlexBox alignItems="center">
                          <Icon sx={{ pr: 4 }}>cloud_upload</Icon>
                          <span>Upload File</span>
                        </FlexBox>
                      </Button>
                    </label>

                    <input
                      multiple
                      type="file"
                      id="upload-multiple-file"
                      style={{ display: 'none' }}
                      onChange={(e) => setFieldValue('files', e.target.files)}
                    />
                  </Grid>
                </Grid>
              </StyledCard>

              <Box mt={3}>
                <Button color="primary" variant="contained" type="submit">
                  Submit
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Card>
    </InvoiceRoot>
  );
};

const paymentTermList = [
  'NET 15',
  'NET 30',
  'NET 45',
  'NET 60',
  'Due end of the month',
  'Due on receive'
];

const customerList = [
  'customer 1',
  'customer 2',
  'customer 3',
  'customer 4',
  'customer 5',
  'customer 6',
  'customer 7',
  'customer 8'
];

const initialValues = {
  customerType: '',
  otherField: 'Adjustment'
};

export default InvoiceForm;
