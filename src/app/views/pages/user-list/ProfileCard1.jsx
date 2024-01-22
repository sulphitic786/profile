import { Twitter } from "@mui/icons-material";
import { Avatar, Box, Card, Icon, MenuItem, styled, useTheme } from "@mui/material";
import { GoogleIcon, MatxMenu } from "app/components";
import { FlexBetween } from "app/components/FlexBox";
import { H4, Paragraph, Span } from "app/components/Typography";
import { Link } from "react-router-dom";
import { StyledButton } from "./styles";

const StyledLink = styled(Link)(({ theme, iconcolor }) => ({
  display: "flex",
  alignItems: "center",
  color: theme.palette.text.primary,
  "& span": { marginLeft: "8px" },
  "& svg": { fontSize: "14px", color: iconcolor },
}));

const ProfileCard1 = ({ user }) => {
  const { palette } = useTheme();
  const textMuted = palette.text.secondary;
  const primary = palette.primary.main;

  return (
    <Card sx={{ p: "20px" }}>
      <FlexBetween mb={2}>
        <Avatar sx={{ width: 56, height: 56 }} src={user?.imgUrl} />

        <Box>
          <MatxMenu menuButton={<Icon sx={{ cursor: "pointer" }}>more_horiz</Icon>}>
            <MenuItem>
              <Icon fontSize="small"> account_circle </Icon>
              <Span sx={{ pl: 2 }}> View Profile </Span>
            </MenuItem>

            <MenuItem>
              <Icon fontSize="small"> person_add </Icon>
              <Span sx={{ pl: 2 }}> Add to Team </Span>
            </MenuItem>

            <MenuItem>
              <Icon fontSize="small"> edit </Icon>
              <Span sx={{ pl: 2 }}> Edit Profile </Span>
            </MenuItem>
          </MatxMenu>
        </Box>
      </FlexBetween>

      <Box>
        <H4 sx={{ textTransform: "capitalize" }}>{user?.name}</H4>
        <Paragraph sx={{ my: 1, mb: "12px", color: textMuted }}>
          It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout.
        </Paragraph>

        <Box mb={2}>
          <StyledLink iconcolor="#ec412c" sx={{ mb: "4px" }} to="/">
            <GoogleIcon />
            <span>ui-lib@gmail.com</span>
          </StyledLink>

          <StyledLink iconcolor={primary} to="/">
            <Twitter color="secondary" />
            <span>uilib</span>
          </StyledLink>
        </Box>

        <Box display="flex" flexWrap="wrap">
          <StyledButton size="small" sx={{ mr: "4px" }}>
            CHAT
          </StyledButton>
          <StyledButton size="small">PROFILE</StyledButton>
        </Box>
      </Box>
    </Card>
  );
};

export default ProfileCard1;
