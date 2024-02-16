import {
  Box,
  Button,
  Dialog,
  FormControlLabel,
  Grid,
  Stack,
  styled,
  MenuItem,
  Switch
} from '@mui/material';
import MuiTextField from '@mui/material/TextField';
import { H4 } from 'app/components/Typography';
import { generateRandomId } from 'app/utils/utils';
import { Formik } from 'formik';
import * as Yup from 'yup';

const TextField = styled(MuiTextField)({ marginBottom: 16 });

const StyledInput = styled(TextField)({
  minWidth: '100% !important',
  '& label': { fontSize: '14px', textTransform: 'capitalize' },
  '& label.MuiInputLabel-shrink': { marginTop: '0px' },
  '& .MuiOutlinedInput-root': {
    '& .MuiOutlinedInput-input': {
      fontSize: '14px',
      padding: '16px 14px !important',
      textTransform: 'capitalize'
    }
  }
});

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Minimum 3 characters required!').required('Name is required!'),
  email: Yup.string().email().required('Email is required!'),
  phone: Yup.string().min(9).max(11).required('Phone is required!'),
  gender: Yup.string().required('Gender is required!'),
  password: Yup.string().min(6, 'Minimum 6 letters required!').required('Password is required!')
  // phone: Yup.string().min(9).required('Phone is required!'),
  // age: Yup.number().required('Age is required!')
});

const AddUpdateEditor = ({ open, handleClose, addUpdateData, action, addUser, updateUser }) => {
  let initialValues = {
    name: addUpdateData?.name || '',
    email: addUpdateData?.email || '',
    phone: addUpdateData?.phone || '',
    gender: addUpdateData?.gender || '',
    roles: addUpdateData?.roles || '',
    password: addUpdateData?.password || '',
    isActive: addUpdateData?.isActive || true
  };

  const genderList = ['male', 'female'];
  const roleList = ['admin', 'client', 'super admin'];

  const handleFormSubmit = async (values) => {
    if (action == 'update') {
      updateUser(values);
    } else {
      addUser(values);
    }
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Box p={3}>
        <H4 sx={{ mb: '20px' }}>{action == 'update' ? 'Update User' : 'Add User'}</H4>

        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({ values, errors, touched, handleChange, handleSubmit, handleBlur }) => {
            return (
              <form onSubmit={handleSubmit}>
                <Grid sx={{ mb: '16px' }} container spacing={4}>
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
                    {action == 'add' ? (
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
                    ) : (
                      ''
                    )}

                    <TextField
                      fullWidth
                      type="text"
                      name="phone"
                      label="Phone"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={touched.phone && errors.phone}
                      error={Boolean(errors.phone && touched.phone)}
                    />

                    {addUpdateData?.password !== values?.password && action == 'update' ? (
                      <TextField
                        fullWidth
                        type="text"
                        name="currant_password"
                        label="Currant User's Password"
                        value={values.currant_password}
                        onChange={handleChange}
                      />
                    ) : (
                      ''
                    )}

                    {/* <FormControlLabel
                      sx={{ my: '20px' }}
                      label="Active User"
                      control={
                        <Switch name="isActive" checked={values.isActive} onChange={handleChange} />
                      }
                    /> */}
                  </Grid>

                  <Grid item sm={6} xs={12}>
                    {/* <TextField
                      fullWidth
                      type="text"
                      name="gender"
                      label="Gender"
                      value={values.gender}
                      onChange={handleChange}
                    /> */}

                    <StyledInput
                      select
                      label="Gender"
                      size="small"
                      id="inputField"
                      variant="outlined"
                      name="gender"
                      value={values.gender || ''}
                      onChange={handleChange}
                    >
                      {genderList?.map((item) => (
                        <MenuItem value={item} key={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </StyledInput>

                    <StyledInput
                      select
                      label="Role"
                      size="small"
                      id="inputField"
                      variant="outlined"
                      name="roles"
                      value={values.roles || []} // Use an empty array as the default value for multiple selections
                      onChange={handleChange}
                      // SelectProps={{ multiple: true }} // Enable multiple selections
                    >
                      {roleList?.map((item) => (
                        <MenuItem value={item} key={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </StyledInput>

                    <TextField
                      fullWidth
                      type="text"
                      name="password"
                      label="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={touched.password && errors.password}
                      error={Boolean(errors.password && touched.password)}
                    />
                  </Grid>
                </Grid>

                <Stack direction="row" spacing={2} justifyContent="flex-end">
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

export default AddUpdateEditor;
