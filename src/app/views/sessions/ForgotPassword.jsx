import { Box, Button, Card, Grid, styled, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../../contexts/AlertContext";
import { getAuth, sendPasswordResetEmail } from "firebase/auth"; // Import Firebase auth

const FlexBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center"
}));

const JustifyBox = styled(FlexBox)(() => ({
  justifyContent: "center"
}));

const ContentBox = styled(Box)(({ theme }) => ({
  padding: 32,
  background: theme.palette.background.default
}));

const ForgotPasswordRoot = styled(JustifyBox)(() => ({
  background: "#1A2038",
  minHeight: "100vh !important",
  "& .card": {
    maxWidth: 800,
    margin: "1rem",
    borderRadius: 12
  }
}));

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // Start with an empty email state
  const { showAlert } = useAlert();

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    const auth = getAuth();

    try {
      await sendPasswordResetEmail(auth, email); // Firebase method to send reset email
      showAlert("success", "A password reset email has been sent to your email address.");
    } catch (err) {
      showAlert("error", "User not found against this email.");
    }
  };

  return (
    <ForgotPasswordRoot>
      <Card className="card">
        <Grid container>
          <Grid item xs={12}>
            <JustifyBox p={4}>
              <img width="300" src="/assets/images/illustrations/dreamer.svg" alt="" />
            </JustifyBox>

            <ContentBox>
              <form onSubmit={handleFormSubmit}>
                <TextField
                  type="email"
                  name="email"
                  size="small"
                  label="Email"
                  value={email}
                  variant="outlined"
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{ mb: 3, width: "100%" }}
                  required
                />

                <Button fullWidth variant="contained" color="primary" type="submit">
                  Reset Password
                </Button>

                <Button
                  fullWidth
                  color="primary"
                  variant="outlined"
                  onClick={() => navigate(-1)}
                  sx={{ mt: 2 }}
                >
                  Go Back
                </Button>
              </form>
            </ContentBox>
          </Grid>
        </Grid>
      </Card>
    </ForgotPasswordRoot>
  );
};

export default ForgotPassword;
