import { Avatar, Box, Button, Card, Divider, Icon, styled } from "@mui/material";
import { H5 } from "app/components/Typography";
import { StyledP } from "./styles";

const FlexBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});

const StyledButton = styled(Button)(() => ({
  width: "100%",
  display: "flex",
  paddingLeft: "12px",
  paddingRight: "12px",
  justifyContent: "flex-start",
  "& span": { marginLeft: "8px" },
}));

const ProfileCard = () => {
  return (
    <Card sx={{ pb: 4 }}>
      <FlexBox p={4}>
        <Avatar src="/assets/images/face-1.png" sx={{ mb: 3, width: 56, height: 56 }} />
        <StyledP sx={{ mb: 1, fontWeight: "normal", textTransform: "capitalize" }}>
          Project manager
        </StyledP>
        <H5>Asiya Wolff</H5>
      </FlexBox>

      <Divider sx={{ mb: 4 }} />

      <Box mb={4}>
        <StyledP sx={{ mb: "12px", ml: "12px" }}>TEAMS</StyledP>

        <StyledButton variant="text">
          <Icon fontSize="small">people</Icon>
          <span>Alpha</span>
        </StyledButton>

        <StyledButton variant="text">
          <Icon fontSize="small">people</Icon>
          <span>Beta</span>
        </StyledButton>

        <StyledButton variant="text">
          <Icon fontSize="small">people</Icon>
          <span>Sales</span>
        </StyledButton>

        <StyledButton variant="text">
          <Icon fontSize="small">people</Icon>
          <span>Report</span>
        </StyledButton>
      </Box>

      <Box>
        <StyledP sx={{ mb: "12px", ml: "12px" }}>MY TEAM</StyledP>

        <StyledButton variant="text">
          <Icon fontSize="small">favorite</Icon>
          <span>Favorite</span>
        </StyledButton>
      </Box>
    </Card>
  );
};

export default ProfileCard;
