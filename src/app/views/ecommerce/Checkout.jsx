import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  Grid,
  MenuItem,
  styled,
  TextField
} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FlexBetween } from 'app/components/FlexBox';
import { H4, H5, Span } from 'app/components/Typography';
import { Formik } from 'formik';
import { Fragment, useState } from 'react';
// import { useSelector } from "react-redux";
import * as Yup from 'yup';
import { countries } from './Country';
import PaymentDialog from './PaymentDialog';

const CartRoot = styled(Card)(({ theme }) => ({
  margin: '30px',
  padding: '24px',
  [theme.breakpoints.down('sm')]: { margin: '16px', padding: '16px ' }
}));

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'Minimum 3 characters required!')
    .required('First name is required!'),
  lastName: Yup.string()
    .min(3, 'Minimum 3 characters required!')
    .required('First name is required!'),
  email: Yup.string().email().required('Email is required!'),
  mobile: Yup.string().min(3).required('Phone is required!'),
  city: Yup.string().min(2).required('City is required!'),
  address: Yup.string().min(3).required('Address is required!')
});

const Checkout = () => {
  // const [open, setOpen] = useState(false);
  // const cart = useSelector((state) => state.cart);

  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    // Update the cart locally
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleRemoveFromCart = (productId) => {
    // Remove the item from the cart locally
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const getTotalCost = () => {
    return cart.reduce((prev, curr) => prev + curr.price * curr.qty, 0);
  };

  const toggleDialog = () => setOpen(!open);

  const initialValues = {
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    mobile: '',
    country: '',
    city: '',
    address: ''
  };

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <CartRoot className="checkout">
      <H4 mb={3}>Billing Details</H4>

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid container item spacing={3} lg={8} md={7} xs={12}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      type="text"
                      name="firstName"
                      variant="outlined"
                      label="First Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.firstName}
                      helperText={touched.firstName && errors.firstName}
                      error={Boolean(errors.firstName && touched.firstName)}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      type="text"
                      name="lastName"
                      label="Last Name"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.lastName}
                      onChange={handleChange}
                      helperText={touched.lastName && errors.lastName}
                      error={Boolean(errors.lastName && touched.lastName)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      type="text"
                      name="company"
                      label="Company"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.company}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      type="email"
                      name="email"
                      label="Email"
                      variant="outlined"
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      helperText={touched.email && errors.email}
                      error={Boolean(errors.email && touched.email)}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      type="number"
                      name="mobile"
                      label="Mobile"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.mobile}
                      onChange={handleChange}
                      helperText={touched.mobile && errors.mobile}
                      error={Boolean(errors.mobile && touched.mobile)}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      select
                      fullWidth
                      name="country"
                      label="Country"
                      variant="outlined"
                      value={values.country}
                      onChange={handleChange}
                    >
                      {countries.map((country) => (
                        <MenuItem key={country.code} value={country.name}>
                          {country.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      type="text"
                      name="city"
                      label="City"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.city}
                      onChange={handleChange}
                      helperText={touched.city && errors.city}
                      error={Boolean(errors.city && touched.city)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      type="text"
                      name="address"
                      label="Address"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.address}
                      onChange={handleChange}
                      helperText={touched.address && errors.address}
                      error={Boolean(errors.address && touched.address)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormControlLabel control={<Checkbox />} label="Create an account?" />
                  </Grid>
                </Grid>

                <Grid item lg={4} md={5} xs={12}>
                  <FlexBetween mb={2}>
                    <H5>Porduct</H5>
                    <H5>Total Price</H5>
                  </FlexBetween>

                  <Box>
                    {cart.map((product, ind) => (
                      <Fragment key={product.id}>
                        <FlexBetween py={2}>
                          <Span color="text.secondary">{product.title}</Span>
                          <Span color="text.secondary">${product.price * product.qty}</Span>
                        </FlexBetween>

                        {ind !== cart.length - 1 && <Divider />}
                      </Fragment>
                    ))}

                    <FlexBetween mt={2} mb={4}>
                      <H5>Total</H5>
                      <H5>${getTotalCost().toFixed(2)}</H5>
                    </FlexBetween>

                    <Button fullWidth color="primary" variant="contained" type="submit">
                      Place Order
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          );
        }}
      </Formik>

      <PaymentDialog open={open} toggleDialog={toggleDialog} />
    </CartRoot>
  );
};

export default Checkout;
