import { Button, styled } from "@mui/material";
import { Paragraph } from "app/components/Typography";
import { convertHexToRGB } from "app/utils/utils";

const StyledButton = styled(Button)(({ theme }) => ({
  paddingLeft: "20px",
  paddingRight: "20px",
  transition: "all 250ms",
  color: theme.palette.primary.main,
  background: `rgba(${convertHexToRGB(theme.palette.primary.main)}, 0.15)`,
  "&:hover": {
    color: "#ffffff",
    fallbacks: [{ color: "white !important" }],
    background: `${theme.palette.primary.main} !important`,
    backgroundColor: `${theme.palette.primary.main} !important`,
  },
}));

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const StyledP = styled(Paragraph)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

export { StyledButton, Container, StyledP };
