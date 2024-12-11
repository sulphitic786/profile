import { LoadingButton } from "@mui/lab";
import {
  Card,
  Checkbox,
  Grid,
  TextField,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton
} from "@mui/material";
import { Box, styled, useTheme } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Paragraph } from "../../components/Typography";
import useAuth from "../../hooks/useAuth";
import { Formik } from "formik";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import ToastNotification from '../../contexts/ToastNotification';
import * as Yup from "yup";
import { useAlert } from "../../contexts/AlertContext";
import { amber, green } from "@mui/material/colors";
import { collection, getDocs, query, where } from "firebase/firestore";
import { fireStore } from "./../../../config";
import { jsonToString } from "../../utils/utils";

const ContentRoot = styled("div")(({ theme }) => ({
  "& .icon": { fontSize: 20 },
  "& .success": { backgroundColor: green[600] },
  "& .warning": { backgroundColor: amber[700] },
  "& .error": { backgroundColor: theme.palette.error.main },
  "& .info": { backgroundColor: theme.palette.primary.main },
  "& .iconVariant": { opacity: 0.9, marginRight: theme.spacing(1) },
  "& .message": { display: "flex", alignItems: "center" },
  "& .margin": { margin: theme.spacing(1) }
}));

const FlexBox = styled(Box)(() => ({ display: "flex", alignItems: "center" }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: "center" }));

const ContentBox = styled(Box)(() => ({
  height: "100%",
  padding: "32px",
  position: "relative",
  background: "rgba(0, 0, 0, 0.01)"
}));

const JWTRoot = styled(JustifyBox)(() => ({
  background: "#1A2038",
  minHeight: "100% !important",
  "& .card": {
    maxWidth: 800,
    minHeight: 400,
    margin: "1rem",
    display: "flex",
    borderRadius: 12,
    alignItems: "center"
  }
}));

// inital login credentials
// const initialValues = {
//   email: 'jason@ui-lib.com',
//   password: 'dummyPass',
//   remember: true
// };
const initialValues = {
  email: "",
  password: "",
  remember: true
};

// form field validation schema
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be 6 character length")
    .required("Password is required!"),
  email: Yup.string().email("Invalid Email address").required("Email is required!")
});

const JwtLogin = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const { showAlert } = useAlert();
  const { login } = useAuth();

  // const handleFormSubmit = async (values) => {
  //   console.log('called login:');
  //   setLoading(true);
  //   try {
  //     await login(values.email, values.password);
  //     navigate('/');
  //   } catch (e) {
  //     setLoading(false);
  //   }
  // };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const handleFormSubmit = async (values) => {
    setLoading(true);
    try {
      // Use Firebase signInWithEmail function
      const res = await login(values.email, values.password);
      console.log("res", res);
      await fetchCurrentUser(res.user.uid);
      showAlert("success", "User Logged in successfully.");
      await navigate("/dashboard/default");
    } catch (e) {
      setLoading(false);
      navigate("/");
      showAlert("error", "User Email or Password is Wrong.");
      // Handle any authentication errors
      console.error("Firebase authentication error:", e);
    }
  };

  const fetchCurrentUser = async (user_id) => {
    try {
      setLoading(true);
      const Query = query(collection(fireStore, "users"), where("user_id", "==", user_id));
      const response = await getDocs(Query);
      const dataFromFirebase = response.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      localStorage.setItem("userData", JSON.stringify(dataFromFirebase[0]));
      console.log("dataFromFirebase", dataFromFirebase, "response", response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <JWTRoot>
      <Card className="card">
        <Grid container>
          <Grid item sm={6} xs={12}>
            <JustifyBox p={4} height="100%" sx={{ minWidth: 320 }}>
              <img src="/assets/images/illustrations/dreamer.svg" width="100%" alt="" />
            </JustifyBox>
          </Grid>

          <Grid item sm={6} xs={12}>
            <ContentBox>
              <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
              >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Email"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={handleChange}
                      helperText={touched.email && errors.email}
                      error={Boolean(errors.email && touched.email)}
                      sx={{ mb: 3 }}
                    />

                    <TextField
                      fullWidth
                      size="small"
                      name="password"
                      type={showPassword ? "text" : "password"} // Toggle between text and password
                      label="Password"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.password}
                      onChange={handleChange}
                      helperText={touched.password && errors.password}
                      error={Boolean(errors.password && touched.password)}
                      sx={{ mb: 1.5 }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={handleClickShowPassword} edge="end">
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                    />

                    <FlexBox justifyContent="space-between">
                      <FlexBox gap={1}>
                        <Checkbox
                          size="small"
                          name="remember"
                          onChange={handleChange}
                          checked={values.remember}
                          sx={{ padding: 0 }}
                        />

                        <Paragraph>Remember Me</Paragraph>
                      </FlexBox>

                      <NavLink
                        to="/session/forgot-password"
                        style={{ color: theme.palette.primary.main }}
                      >
                        Forgot password?
                      </NavLink>
                    </FlexBox>

                    <LoadingButton
                      type="submit"
                      color="primary"
                      loading={loading}
                      variant="contained"
                      sx={{ my: 2 }}
                    >
                      Login
                    </LoadingButton>
                    {/* <Paragraph>
                      Don't have an account?
                      <NavLink
                        to="/session/signup"
                        style={{ color: theme.palette.primary.main, marginLeft: 5 }}
                      >
                        Register
                      </NavLink>
                    </Paragraph> */}
                  </form>
                )}
              </Formik>
            </ContentBox>
          </Grid>
        </Grid>
      </Card>
    </JWTRoot>
  );
};

export default JwtLogin;
