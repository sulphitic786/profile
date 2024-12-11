import { useState, Fragment, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Stack,
  styled,
  TextField,
  InputAdornment,
  IconButton
} from "@mui/material";
import { FlexBox } from "../../components/FlexBox";
import { H5, Paragraph } from "../../components/Typography";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAlert } from "../../contexts/AlertContext";
import { MatxLoading } from "../../components";
import { fireStore } from "../../../config";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
  updateProfile
} from "firebase/auth";

const Dot = styled(Box)(({ theme }) => ({
  width: 8,
  height: 8,
  flexShrink: 0,
  borderRadius: "50%",
  backgroundColor: theme.palette.primary.main
}));

const Password = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
    confirmNewPassword: false
  });

  const currentUser = JSON.parse(localStorage.getItem("userData"));
  const { showAlert } = useAlert();
  const auth = getAuth();

  const handleClickShowPassword = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleUpdateUser = async (values) => {
    console.log("currentUser", currentUser, "values", values);
    try {
      setLoading(true);

      // Reauthenticate the user
      const email = auth.currentUser.email;
      const credentials = EmailAuthProvider.credential(email, values.currentPassword);

      await reauthenticateWithCredential(auth.currentUser, credentials);

      // Update password in Firebase Authentication
      if (values.newPassword !== currentUser.password) {
        console.log("Updating Firebase Authentication password...");
        await updatePassword(auth.currentUser, values.newPassword);
      }

      // Update password in Firestore users collection
      const updatedUserData = {
        ...currentUser, // Keep other user data
        password: values.newPassword, // Update password field
        updated_at: new Date() // Update timestamp
      };

      await updateDoc(doc(fireStore, "users", currentUser.id), updatedUserData);

      showAlert("success", "Password updated successfully.");
      setLoading(false);
    } catch (error) {
      setLoading(false);

      // Handle specific errors for better user feedback
      if (error.code === "auth/wrong-password") {
        showAlert("error", "Incorrect current password.");
      } else if (error.code === "auth/weak-password") {
        showAlert("error", "New password is too weak.");
      } else {
        showAlert("error", "Error while updating password.");
      }

      console.error("Error updating user:", error);
    }
  };

  const initialValues = {
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: ""
  };

  const validationSchema = Yup.object({
    currentPassword: Yup.string()
      .min(3, "Must be greater then 3 characters")
      .required("Current Password is Required!"),
    newPassword: Yup.string().min(8).required("New Password is Required!"),
    confirmNewPassword: Yup.string().oneOf(
      [Yup.ref("newPassword"), null],
      "Password doesn't matched"
    )
  });

  const { values, errors, handleSubmit, handleChange, handleBlur, touched } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => handleUpdateUser(values)
  });

  return (
    <>
      {loading && <MatxLoading />}
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
                    type={showPassword.currentPassword ? "text" : "password"}
                    variant="outlined"
                    name="currentPassword"
                    label="Current Password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.currentPassword}
                    helperText={touched.currentPassword && errors.currentPassword}
                    error={Boolean(touched.currentPassword && errors.currentPassword)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => handleClickShowPassword("currentPassword")}
                            edge="end"
                          >
                            {showPassword.currentPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />

                  <TextField
                    fullWidth
                    type={showPassword.newPassword ? "text" : "password"}
                    name="newPassword"
                    variant="outlined"
                    label="New Password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.newPassword}
                    helperText={touched.newPassword && errors.newPassword}
                    error={Boolean(touched.newPassword && errors.newPassword)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => handleClickShowPassword("newPassword")}
                            edge="end"
                          >
                            {showPassword.newPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                  <TextField
                    fullWidth
                    type={showPassword.confirmNewPassword ? "text" : "password"}
                    variant="outlined"
                    name="confirmNewPassword"
                    label="Confirm Password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.confirmNewPassword}
                    helperText={touched.confirmNewPassword && errors.confirmNewPassword}
                    error={Boolean(touched.confirmNewPassword && errors.confirmNewPassword)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => handleClickShowPassword("confirmNewPassword")}
                            edge="end"
                          >
                            {showPassword.confirmNewPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
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
    </>
  );
};

export default Password;
