import { Facebook, Twitter } from "@mui/icons-material";
import { Grid, MenuItem, TextField } from "@mui/material";

const OtherDetailsForm = ({ values, handleChange }) => {
  return (
    <Grid container spacing={3} alignItems="center">
      <Grid item md={2} sm={4} xs={12}>
        Currency
      </Grid>

      <Grid item md={10} sm={8} xs={12}>
        <TextField
          select
          size="small"
          name="currency"
          label="Currency"
          variant="outlined"
          sx={{ minWidth: 208 }}
          value={values.currency || ""}
          onChange={handleChange}
        >
          {currencyList.map((item, ind) => (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid item md={2} sm={4} xs={12}>
        Payment Terms
      </Grid>

      <Grid item md={10} sm={8} xs={12}>
        <TextField
          select
          size="small"
          label="Terms"
          name="paymentTerm"
          variant="outlined"
          sx={{ minWidth: 208 }}
          onChange={handleChange}
          value={values.paymentTerm || ""}
        >
          {paymentTermList.map((item, ind) => (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid item md={2} sm={4} xs={12}>
        Facebook
      </Grid>

      <Grid item md={10} sm={8} xs={12}>
        <TextField
          size="small"
          name="facebook"
          label="Facebook"
          variant="outlined"
          value={values.facebook}
          onChange={handleChange}
          InputProps={{
            style: { paddingLeft: 8 },
            startAdornment: <Facebook sx={{ mr: "6px" }} color="primary" fontSize="small" />,
          }}
        />
      </Grid>

      <Grid item md={2} sm={4} xs={12}>
        Twitter
      </Grid>

      <Grid item md={10} sm={8} xs={12}>
        <TextField
          size="small"
          name="twitter"
          label="Twitter"
          variant="outlined"
          value={values.twitter}
          onChange={handleChange}
          InputProps={{
            style: { paddingLeft: 8 },
            startAdornment: <Twitter sx={{ mr: "6px" }} color="primary" fontSize="small" />,
          }}
        />
      </Grid>
    </Grid>
  );
};

const paymentTermList = [
  "NET 15",
  "NET 30",
  "NET 45",
  "NET 60",
  "Due end of the month",
  "Due on receive",
];
const currencyList = ["USD", "AUD", "EUR", "CNY", "GBP", "INR", "JPY"];

export default OtherDetailsForm;
