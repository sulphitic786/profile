import { styled, TableCell } from "@mui/material";

// ---------------------------------------------------------
// table cell component version 1 - example account page - recent devices and notifications tab
export const BodyTableCell = styled(TableCell)(({ theme }) => ({
  paddingTop: "1.5rem",
  paddingBottom: "1.5rem",
  borderBottom: `1px solid ${theme.palette.grey[100]}`,
  "&:first-of-type": { paddingLeft: 24 },
  "&:last-of-type": { paddingRight: 24 },
}));

export const HeadTableCell = styled(BodyTableCell)(({ theme }) => ({
  paddingTop: "1rem",
  paddingBottom: "1rem",
  color: theme.palette.text.primary,
}));

// ----------------------------------------------------------
