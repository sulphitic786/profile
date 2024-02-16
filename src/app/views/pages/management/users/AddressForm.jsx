import { Checkbox, FormControlLabel, Grid, MenuItem, TextField } from "@mui/material";
import { FlexBox } from "app/components/FlexBox";
import { Paragraph } from "app/components/Typography";
import { countries } from "app/views/ecommerce/Country";

const AddressForm = ({ values, setFieldValue, handleChange }) => {
  const handleCheckboxChange = async ({ target: { checked } }) => {
    if (checked) setFieldValue("shipping", values.billing);
    else setFieldValue("shipping", {});
  };

  return (
    <Grid container spacing={5}>
      <Grid item md={6} sm={12} xs={12}>
        <Paragraph sx={{ pb: 2, fontWeight: 500, color: "text.secondary" }}>
          BILLING ADDRESS
        </Paragraph>

        <Grid container spacing={3} alignItems="center">
          <Grid item md={2} sm={4} xs={12}>
            Attention
          </Grid>

          <Grid item md={10} sm={8} xs={12}>
            <TextField
              fullWidth
              size="small"
              label="Attention"
              variant="outlined"
              name="billing.attention"
              value={values.billing?.attention || ""}
              onChange={handleChange}
            />
          </Grid>

          <Grid item md={2} sm={4} xs={12}>
            Country
          </Grid>

          <Grid item md={10} sm={8} xs={12}>
            <TextField
              select
              fullWidth
              size="small"
              label="Country"
              variant="outlined"
              name="billing.country"
              value={values.billing?.country || ""}
              onChange={handleChange}
            >
              {countries.map((item, ind) => (
                <MenuItem value={item.code} key={item.code}>
                  {item.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item md={2} sm={4} xs={12}>
            Address
          </Grid>

          <Grid item md={10} sm={8} xs={12}>
            <TextField
              fullWidth
              multiline
              size="small"
              label="Address"
              variant="outlined"
              name="billing.address"
              value={values.billing?.address || ""}
              onChange={handleChange}
            />
          </Grid>

          <Grid item md={2} sm={4} xs={12}>
            City
          </Grid>

          <Grid item md={10} sm={8} xs={12}>
            <TextField
              fullWidth
              label="City"
              size="small"
              variant="outlined"
              name="billing.city"
              value={values.billing?.city || ""}
              onChange={handleChange}
            />
          </Grid>

          <Grid item md={2} sm={4} xs={12}>
            State
          </Grid>

          <Grid item md={10} sm={8} xs={12}>
            <TextField
              fullWidth
              size="small"
              label="State"
              variant="outlined"
              name="billing.state"
              value={values.billing?.state || ""}
              onChange={handleChange}
            />
          </Grid>

          <Grid item md={2} sm={4} xs={12}>
            Zip
          </Grid>

          <Grid item md={10} sm={8} xs={12}>
            <TextField
              fullWidth
              label="Zip"
              size="small"
              name="billing.zip"
              variant="outlined"
              value={values.billing?.zip || ""}
              onChange={handleChange}
            />
          </Grid>

          <Grid item md={2} sm={4} xs={12}>
            Phone
          </Grid>

          <Grid item md={10} sm={8} xs={12}>
            <TextField
              fullWidth
              size="small"
              label="Phone"
              variant="outlined"
              name="billing.phone"
              value={values.billing?.phone || ""}
              onChange={handleChange}
            />
          </Grid>

          <Grid item md={2} sm={4} xs={12}>
            Fax
          </Grid>

          <Grid item md={10} sm={8} xs={12}>
            <TextField
              fullWidth
              label="Fax"
              size="small"
              name="billing.fax"
              variant="outlined"
              value={values.billing?.fax || ""}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item md={6} sm={12} xs={12}>
        <FlexBox alignItems="center" gap={1}>
          <Paragraph sx={{ fontWeight: 500, color: "text.secondary" }}>BILLING ADDRESS</Paragraph>
          <FormControlLabel
            value="business"
            label="Same as billing address"
            onChange={handleCheckboxChange}
            control={<Checkbox size="small" color="secondary" />}
          />
        </FlexBox>

        <Grid container spacing={3} alignItems="center">
          <Grid item md={2} sm={4} xs={12}>
            Attention
          </Grid>

          <Grid item md={10} sm={8} xs={12}>
            <TextField
              fullWidth
              size="small"
              label="Attention"
              variant="outlined"
              name="shipping.attention"
              value={values.shipping?.attention || ""}
              onChange={handleChange}
            />
          </Grid>

          <Grid item md={2} sm={4} xs={12}>
            Country
          </Grid>

          <Grid item md={10} sm={8} xs={12}>
            <TextField
              select
              fullWidth
              size="small"
              label="Country"
              variant="outlined"
              name="shipping.country"
              value={values.shipping?.country || ""}
              onChange={handleChange}
            >
              {countries.map((item, ind) => (
                <MenuItem value={item.code} key={item.code}>
                  {item.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item md={2} sm={4} xs={12}>
            Address
          </Grid>

          <Grid item md={10} sm={8} xs={12}>
            <TextField
              fullWidth
              multiline
              size="small"
              label="Address"
              variant="outlined"
              name="shipping.address"
              value={values.shipping?.address || ""}
              onChange={handleChange}
            />
          </Grid>

          <Grid item md={2} sm={4} xs={12}>
            City
          </Grid>

          <Grid item md={10} sm={8} xs={12}>
            <TextField
              fullWidth
              label="City"
              size="small"
              variant="outlined"
              name="shipping.city"
              value={values.shipping?.city || ""}
              onChange={handleChange}
            />
          </Grid>

          <Grid item md={2} sm={4} xs={12}>
            State
          </Grid>

          <Grid item md={10} sm={8} xs={12}>
            <TextField
              fullWidth
              size="small"
              label="State"
              variant="outlined"
              name="shipping.state"
              value={values.shipping?.state || ""}
              onChange={handleChange}
            />
          </Grid>

          <Grid item md={2} sm={4} xs={12}>
            Zip
          </Grid>

          <Grid item md={10} sm={8} xs={12}>
            <TextField
              fullWidth
              label="Zip"
              size="small"
              variant="outlined"
              name="shipping.zip"
              value={values.shipping?.zip || ""}
              onChange={handleChange}
            />
          </Grid>

          <Grid item md={2} sm={4} xs={12}>
            Phone
          </Grid>

          <Grid item md={10} sm={8} xs={12}>
            <TextField
              fullWidth
              size="small"
              label="Phone"
              variant="outlined"
              name="shipping.phone"
              value={values.shipping?.phone || ""}
              onChange={handleChange}
            />
          </Grid>

          <Grid item md={2} sm={4} xs={12}>
            Fax
          </Grid>

          <Grid item md={10} sm={8} xs={12}>
            <TextField
              fullWidth
              label="Fax"
              size="small"
              variant="outlined"
              name="shipping.fax"
              value={values.shipping?.fax || ""}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddressForm;
