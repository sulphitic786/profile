import { Badge, styled } from "@mui/material";
import React from "react";

const StyledBadge = styled(Badge)(({ theme, width, height }) => ({
  "& .MuiBadge-badge": {
    width: width,
    height: height,
    borderRadius: "50%",
    backgroundColor: theme.palette.primary.main,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
  },
  "& .MuiBadge-colorSuccess.MuiBadge-badge": {
    backgroundColor: theme.palette.success.main,
    boxShadow: `0 0 0 1px ${theme.palette.background.paper}`
  }
}));

const AvatarBadge = ({ children, width, height, ...props }) => {
  return (
    <StyledBadge
      width={width || 25}
      height={height || 25}
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      {...props}
    >
      {children}
    </StyledBadge>
  );
};

export default AvatarBadge;
