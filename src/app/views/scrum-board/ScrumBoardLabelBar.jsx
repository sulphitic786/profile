import { styled, useTheme } from "@mui/material";

// styled component
const BoardLabel = styled("div")({
  width: "32px",
  height: "6px",
  overflow: "hidden",
  marginRight: "8px",
  borderRadius: "6px",
});

const ScrumBoardLabelBar = () => {
  const { palette } = useTheme();
  const bgPrimary = palette.primary.main;

  return <BoardLabel sx={{ background: bgPrimary }} />;
};

export default ScrumBoardLabelBar;
