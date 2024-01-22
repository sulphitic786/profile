import { Box, Button, Dialog, Grid, styled, TextField } from "@mui/material";
import { Formik } from "formik";

const DialogContent = styled("div")(({ theme }) => ({
  textAlign: "center",
  position: "relative",
  padding: "24px !important",
  [theme.breakpoints.down("sm")]: { padding: "16px !important" },
}));

const IMG = styled("img")({ height: 160, marginBottom: 2 });

const PaymentDialog = ({ open, toggleDialog }) => {
  const handleSubmit = () => {};

  const initialValues = { cardHolderName: "", cardNumber: "", expiryDate: "", cvc: "" };

  return (
    <Dialog open={open} onClose={toggleDialog} scroll="body">
      <DialogContent>
        <IMG src="/assets/images/debit-card.png" alt="debit-card" />

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values, errors, touched, handleChange, handleSubmit, handleBlur }) => {
            return (
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  type="number"
                  name="cardNumber"
                  variant="outlined"
                  label="Card Number"
                  onChange={handleChange}
                  value={values.cardNumber}
                  sx={{ mb: 2 }}
                />

                <Grid container spacing={3} sx={{ mb: 4 }}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      type="text"
                      variant="outlined"
                      name="expiryDate"
                      label="Expiry Date"
                      placeholder="12/19"
                      onChange={handleChange}
                      value={values.expiryDate}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      name="cvc"
                      type="text"
                      value={values.cvc}
                      label="CVC"
                      variant="outlined"
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>

                <TextField
                  fullWidth
                  type="text"
                  label="Full Name"
                  variant="outlined"
                  name="cardHolderName"
                  onChange={handleChange}
                  value={values.cardHolderName}
                  sx={{ mb: 3 }}
                />

                <Box display="flex" justifyContent="flex-end">
                  <Button
                    type="button"
                    color="secondary"
                    variant="outlined"
                    onClick={toggleDialog}
                    sx={{ mr: "12px" }}
                  >
                    Cancel
                  </Button>

                  <Button variant="contained" color="primary" type="submit">
                    Pay
                  </Button>
                </Box>
              </form>
            );
          }}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;
