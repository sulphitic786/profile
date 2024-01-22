import { Twitter } from "@mui/icons-material";
import { Avatar, Box, Card, Divider, Grid, LinearProgress, styled } from "@mui/material";
import { GoogleIcon } from "app/components";
import { FlexBetween } from "app/components/FlexBox";
import { H5 } from "app/components/Typography";
import { Link } from "react-router-dom";
import { StyledButton, StyledP } from "./styles";

const StyledLink = styled(Link)({
  display: "flex",
  alignItems: "center",
  "& span": { marginLeft: "8px" },
});

const ProfileCard2 = ({ user }) => {
  return (
    <Card sx={{ mb: 2, pb: 2 }}>
      <Box p="12px">
        <Grid container spacing={3} alignItems="center">
          <Grid item sm={4} xs={12}>
            <FlexBetween m={1}>
              <Avatar sx={{ width: 56, height: 56 }} src={user.imgUrl} />

              <Box ml={2}>
                <H5>{user.name}</H5>

                <StyledP sx={{ mt: 1, fontWeight: "normal", textTransform: "capitalize" }}>
                  {user.company?.toLowerCase()}
                </StyledP>
              </Box>
            </FlexBetween>
          </Grid>

          <Grid item sm={4} xs={12}>
            <FlexBetween mb="4px">
              <StyledP sx={{ fontWeight: "500" }}>Progressbar</StyledP>
              <StyledP>40%</StyledP>
            </FlexBetween>

            <LinearProgress color="primary" value={35} variant="determinate" />
          </Grid>

          <Grid item sm={4} xs={12}>
            <StyledLink sx={{ mb: "4px" }} to="/">
              <GoogleIcon fontSize="small" sx={{ fontSize: "14px", color: "#ec412c" }} />
              <span>ui-lib@gmail.com</span>
            </StyledLink>

            <StyledLink to="/">
              <Twitter fontSize="small" sx={{ fontSize: "14px", color: "#039ff5" }} />
              <span>uilib</span>
            </StyledLink>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ mb: 2 }} />

      <FlexBetween m={-1} px="20px" flexWrap="wrap">
        <StyledP sx={{ m: 1 }}>Registered 3 mins ago</StyledP>

        <Box m={1} display="flex" flexWrap="wrap">
          <StyledButton size="small" sx={{ mr: "4px" }}>
            CHAT
          </StyledButton>

          <StyledButton size="small">PROFILE</StyledButton>
        </Box>
      </FlexBetween>
    </Card>
  );
};

export default ProfileCard2;
