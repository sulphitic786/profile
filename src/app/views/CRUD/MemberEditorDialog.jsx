import { Box, Button, Dialog, FormControlLabel, Grid, Stack, styled, Switch } from "@mui/material";
import MuiTextField from "@mui/material/TextField";
import { H4 } from "app/components/Typography";
import { generateRandomId } from "app/utils/utils";
import { Formik } from "formik";
import * as Yup from "yup";
import { addNewUser, updateUser } from "./TableService";

const TextField = styled(MuiTextField)({ marginBottom: 16 });

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, "Minimum 3 characters required!").required("Name is required!"),
  email: Yup.string().email().required("Email is required!"),
  // phone: Yup.string().min(9).max(11).required("Phone is required!"),
  phone: Yup.string().min(9).required("Phone is required!"),
  balance: Yup.number().required("Phone is required!"),
  age: Yup.number().required("Age is required!"),
});

const MemberEditorDialog = ({ open, handleClose, member }) => {
  let initialValues = {
    age: member?.age || "",
    name: member?.name || "",
    email: member?.email || "",
    phone: member?.phone || "",
    balance: member?.balance || "",
    company: member?.company || "",
    address: member?.address || "",
    isActive: member?.isActive || false,
  };

  const handleFormSubmit = async (values) => {
    let { id } = values;

    if (id) await updateUser(values);
    else await addNewUser({ id: generateRandomId(), ...values });

    handleClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Box p={3}>
        <H4 sx={{ mb: "20px" }}>Update Member</H4>

        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({ values, errors, touched, handleChange, handleSubmit, handleBlur }) => {
            return (
              <form onSubmit={handleSubmit}>
                <Grid sx={{ mb: "16px" }} container spacing={4}>
                  <Grid item sm={6} xs={12}>
                    <TextField
                      fullWidth
                      type="text"
                      name="name"
                      label="Name"
                      value={values.name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      helperText={touched.name && errors.name}
                      error={Boolean(errors.name && touched.name)}
                    />

                    <TextField
                      fullWidth
                      type="text"
                      name="email"
                      label="Email"
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={handleChange}
                      helperText={touched.email && errors.email}
                      error={Boolean(errors.email && touched.email)}
                    />

                    <TextField
                      fullWidth
                      type="text"
                      name="phone"
                      label="Phone"
                      onBlur={handleBlur}
                      value={values.phone}
                      onChange={handleChange}
                      helperText={touched.phone && errors.phone}
                      error={Boolean(errors.phone && touched.phone)}
                    />

                    <TextField
                      fullWidth
                      type="number"
                      name="balance"
                      label="Balance"
                      onBlur={handleBlur}
                      value={values.balance}
                      onChange={handleChange}
                      helperText={touched.balance && errors.balance}
                      error={Boolean(errors.balance && touched.balance)}
                    />
                  </Grid>

                  <Grid item sm={6} xs={12}>
                    <TextField
                      fullWidth
                      name="age"
                      label="Age"
                      type="number"
                      value={values.age}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      helperText={touched.age && errors.age}
                      error={Boolean(errors.age && touched.age)}
                    />

                    <TextField
                      fullWidth
                      type="text"
                      name="company"
                      label="Company"
                      value={values.company}
                      onChange={handleChange}
                    />

                    <TextField
                      fullWidth
                      type="text"
                      name="address"
                      label="Address"
                      value={values.address}
                      onChange={handleChange}
                    />

                    <FormControlLabel
                      sx={{ my: "20px" }}
                      label="Active Customer"
                      control={
                        <Switch name="isActive" checked={values.isActive} onChange={handleChange} />
                      }
                    />
                  </Grid>
                </Grid>

                <Stack direction="row" spacing={2}>
                  <Button variant="contained" color="primary" type="submit">
                    Save
                  </Button>

                  <Button variant="outlined" color="secondary" onClick={() => handleClose()}>
                    Cancel
                  </Button>
                </Stack>
              </form>
            );
          }}
        </Formik>
      </Box>
    </Dialog>
  );
};

export default MemberEditorDialog;
