import { CircularProgress, Box, styled } from "@mui/material";
import React from "react";

const StyledLoading = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& img": {
    width: "auto",
    height: "50px"
  },
  "& .circleProgress": {
    position: "absolute",
    left: -9,
    right: 0,
    top: -7
  }
});

const Loading = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0)",
        zIndex: 999999
      }}
    >
      <StyledLoading>
        <Box position="relative">
          <img src="/favicon.png" alt="Sulphite" />
          {/* <img src="/assets/images/logo-circle.svg" alt="" /> */}
          <CircularProgress className="circleProgress" size={70} />
        </Box>
      </StyledLoading>
    </div>
  );
};

export default Loading;
