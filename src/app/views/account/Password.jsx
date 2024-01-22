import { Box, Button, Card, Divider, Grid, Stack, styled, TextField } from "@mui/material";
import { FlexBox } from "app/components/FlexBox";
import { H5, Paragraph } from "app/components/Typography";
import { useFormik } from "formik";
import * as Yup from "yup";

const Dot = styled(Box)(({ theme }) => ({
  width: 8,
  height: 8,
  flexShrink: 0,
  borderRadius: "50%",
  backgroundColor: theme.palette.primary.main,
}));

const Password = () => {
  const initialValues = {
    currentPassword: "12345",
    newPassword: "123456",
    confirmNewPassword: "123456",
  };

  const validationSchema = Yup.object({
    currentPassword: Yup.string()
      .min(3, "Must be greater then 3 characters")
      .required("Current Password is Required!"),
    newPassword: Yup.string().min(8).required("New Password is Required!"),
    confirmNewPassword: Yup.string().oneOf(
      [Yup.ref("newPassword"), null],
      "Password doesn't matched"
    ),
  });

  const { values, errors, handleSubmit, handleChange, handleBlur, touched } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => console.log(values),
  });

  return (
    <Card>
      <H5 padding={3}>Password</H5>
      <Divider />

      <Box padding={3}>
        <Grid container spacing={5}>
          <Grid item sm={6} xs={12}>
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <TextField
                  fullWidth
                  type="password"
                  variant="outlined"
                  name="currentPassword"
                  label="Current Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.currentPassword}
                  helperText={touched.currentPassword && errors.currentPassword}
                  error={Boolean(touched.currentPassword && errors.currentPassword)}
                />

                <TextField
                  fullWidth
                  type="password"
                  name="newPassword"
                  variant="outlined"
                  label="New Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.newPassword}
                  helperText={touched.newPassword && errors.newPassword}
                  error={Boolean(touched.newPassword && errors.newPassword)}
                />
                <TextField
                  fullWidth
                  type="password"
                  variant="outlined"
                  name="confirmNewPassword"
                  label="Confirm Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.confirmNewPassword}
                  helperText={touched.confirmNewPassword && errors.confirmNewPassword}
                  error={Boolean(touched.confirmNewPassword && errors.confirmNewPassword)}
                />
              </Stack>

              <Stack direction="row" spacing={3} mt={4}>
                <Button type="submit" variant="contained">
                  Save Changes
                </Button>
                <Button variant="outlined">Cancel</Button>
              </Stack>
            </form>
          </Grid>

          <Grid item sm={6} xs={12}>
            <H5>Password requirements:</H5>
            <Paragraph lineHeight={1.7}>Ensure that these requirements are met:</Paragraph>

            <Stack spacing={1} mt={2}>
              <FlexBox alignItems="center" gap={1}>
                <Dot />
                <Paragraph fontSize={13}>
                  Minimum 8 characters long - the more, the better
                </Paragraph>
              </FlexBox>

              <FlexBox alignItems="center" gap={1}>
                <Dot />
                <Paragraph fontSize={13}>At least one lowercase character</Paragraph>
              </FlexBox>

              <FlexBox alignItems="center" gap={1}>
                <Dot />
                <Paragraph fontSize={13}>At least one uppercase character</Paragraph>
              </FlexBox>

              <FlexBox alignItems="center" gap={1}>
                <Dot />
                <Paragraph fontSize={13}>
                  At least one number, symbol, or whitespace character
                </Paragraph>
              </FlexBox>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default Password;
