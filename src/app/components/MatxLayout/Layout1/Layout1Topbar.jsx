import {
  Avatar,
  Box,
  Hidden,
  Icon,
  IconButton,
  MenuItem,
  styled,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { memo } from "react";
import { Link } from "react-router-dom";

import React from "react";
import { MatxMenu, MatxSearchBox } from "../../../components";
import { themeShadows } from "../../../components/MatxTheme/themeColors";
import { NotificationProvider } from "../../../contexts/NotificationContext";
import useAuth from "../../../hooks/useAuth";
import useSettings from "../../../hooks/useSettings";
import { topBarHeight } from "../../../utils/constant";

import NotificationBar from "../../NotificationBar/NotificationBar";
import { Span } from "../../Typography";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary
}));

const TopbarRoot = styled("div")({
  top: 0,
  zIndex: 96,
  height: topBarHeight,
  boxShadow: themeShadows[8],
  transition: "all 0.3s ease"
});

const TopbarContainer = styled(Box)(({ theme }) => ({
  padding: "8px",
  paddingLeft: 18,
  paddingRight: 20,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: theme.palette.primary.main,
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 16,
    paddingRight: 16
  },
  [theme.breakpoints.down("xs")]: {
    paddingLeft: 14,
    paddingRight: 16
  }
}));

const UserMenu = styled(Box)({
  padding: 4,
  display: "flex",
  borderRadius: 24,
  cursor: "pointer",
  alignItems: "center",
  "& span": { margin: "0 8px" }
});

const StyledItem = styled(MenuItem)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  minWidth: 185,
  "& a": {
    width: "100%",
    display: "flex",
    alignItems: "center",
    textDecoration: "none"
  },
  "& span": { marginRight: "10px", color: theme.palette.text.primary }
}));

const IconBox = styled("div")(({ theme }) => ({
  display: "inherit",
  [theme.breakpoints.down("md")]: { display: "none !important" }
}));

const Layout1Topbar = () => {
  const theme = useTheme();
  const { settings, updateSettings } = useSettings();
  const { logout, user, isAuthenticated } = useAuth();
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  const storedUserData = localStorage.getItem("userData");

  let userData = null;
  if (storedUserData) {
    try {
      userData = JSON.parse(storedUserData);
    } catch (error) {
      console.error("Invalid JSON in localStorage:", error);
      userData = null; // Fallback value
    }
  }

  const updateSidebarMode = (sidebarSettings) => {
    updateSettings({ layout1Settings: { leftSidebar: { ...sidebarSettings } } });
  };

  const handleSidebarToggle = () => {
    let { layout1Settings } = settings;
    let mode;
    if (isMdScreen) {
      mode = layout1Settings.leftSidebar.mode === "close" ? "mobile" : "close";
    } else {
      mode = layout1Settings.leftSidebar.mode === "full" ? "close" : "full";
    }
    updateSidebarMode({ mode });
  };

  return (
    <TopbarRoot>
      <TopbarContainer>
        <Box display="flex">
          <StyledIconButton onClick={handleSidebarToggle}>
            <Icon>menu</Icon>
          </StyledIconButton>
          {isAuthenticated ? (
            <IconBox>
              <StyledIconButton>
                <Icon>mail_outline</Icon>
              </StyledIconButton>

              <StyledIconButton>
                <Icon>star_outline</Icon>
              </StyledIconButton>
            </IconBox>
          ) : (
            ""
          )}
        </Box>

        <Box display="flex" alignItems="center">
          <MatxSearchBox />
          {isAuthenticated ? (
            <NotificationProvider>
              <NotificationBar />
            </NotificationProvider>
          ) : (
            ""
          )}

          {/* <ShoppingCart /> */}

          <MatxMenu
            menuButton={
              <UserMenu>
                <Hidden xsDown>
                  <Span>
                    <strong>{user?.name?.split(" ")[0]}</strong>
                  </Span>
                </Hidden>
                <Avatar src={userData?.profileImage} sx={{ cursor: "pointer" }} />
              </UserMenu>
            }
          >
            {isAuthenticated ? (
              <>
                <StyledItem>
                  <Link to="/">
                    <Icon> home </Icon>
                    <Span> Home </Span>
                  </Link>
                </StyledItem>

                <StyledItem>
                  <Link to="/user-profile">
                    <Icon> person </Icon>
                    <Span> Profile </Span>
                  </Link>
                </StyledItem>

                <StyledItem>
                  <Link to="/account">
                    <Icon> settings </Icon>
                    <Span> Settings </Span>
                  </Link>
                </StyledItem>

                <StyledItem onClick={logout}>
                  <Icon> power_settings_new </Icon>
                  <Span> Logout </Span>
                </StyledItem>
              </>
            ) : (
              <StyledItem>
                <Link to="/session/signin">
                  <Icon> power_settings_new </Icon>
                  <Span> Login </Span>
                </Link>
              </StyledItem>
            )}
          </MatxMenu>
        </Box>
      </TopbarContainer>
    </TopbarRoot>
  );
};

export default memo(Layout1Topbar);
