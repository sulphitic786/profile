import { Box, styled } from "@mui/material";
import { MatxLogo } from "../components";
import logo from "../images/logo.png";
import useSettings from "../hooks/useSettings";
import { Span } from "./Typography";
import React from "react";

const BrandRoot = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px 18px 20px 29px"
}));

const StyledSpan = styled(Span)(({ mode }) => ({
  fontSize: 18,
  marginLeft: ".5rem",
  display: mode === "compact" ? "none" : "block"
}));

const Brand = ({ children }) => {
  const { settings } = useSettings();
  const leftSidebar = settings.layout1Settings.leftSidebar;
  const { mode } = leftSidebar;

  return (
    <BrandRoot>
      <Box display="flex" alignItems="center">
        <img width={"30%"} height={"30%"} src={logo} alt="logo" />
        <StyledSpan mode={mode} className="sidenavHoverShow">
          SulphiticCo
        </StyledSpan>
      </Box>

      <Box className="sidenavHoverShow" sx={{ display: mode === "compact" ? "none" : "block" }}>
        {children || null}
      </Box>
    </BrandRoot>
  );
};

export default Brand;
