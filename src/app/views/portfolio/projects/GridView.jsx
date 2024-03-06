import { useState } from "react";
import { Box, Button, Card, Checkbox, Grid, Icon, styled, useTheme } from "@mui/material";
import { FlexAlignCenter, FlexBetween, FlexBox } from "../../../components/FlexBox";
import { Paragraph, Small } from "../../../components/Typography";
import { removeTimeFromDate } from "../../../utils/utils";
import ProjectViewer from "./ProjectViewer";
// styled components
const StyledIcon = styled(Icon)({
  color: "#fff",
  cursor: "pointer",
  marginRight: "12px"
});

const IMG = styled("img")({
  width: "100%",
  minHeight: "150px",
  display: "block",
  boxSizing: "content-box"
});

const CardRoot = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  "& .grid__card-overlay": {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    opacity: 0,
    transition: "all 250ms ease-in-out",
    background: "rgba(0, 0, 0, 0.67)",
    "& > div:nth-of-type(2)": {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      zIndex: -1
    }
  },
  "& .grid__card-top": {
    textAlign: "center",
    position: "relative"
  },
  "& .grid__card-bottom": {
    textAlign: "center",
    "& .email": { display: "none" }
  },
  "&:hover": {
    "& .grid__card-overlay": { opacity: 1 },
    "& .grid__card-bottom": {
      "& small": {
        display: "none",
        color: theme.palette.text.secondary
      }
    }
  }
}));

const calculateColumnPerRow = (value) => {
  if (value === 25) return 2;
  if (value === 50) return 3;
  if (value === 75) return 4;
  if (value === 100) return 6;
};

const GridView = ({ list = [], sliderValue }) => {
  const [view, setView] = useState("");
  const [currentProject, setCurrentProject] = useState(null);
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.text.secondary;

  const viewProjectHandler = async (data) => {
    setView("ProjectViewer");
    setCurrentProject(data);
  };

  const back = () => {
    setView("");
  };
  return (
    <div>
      {view == "ProjectViewer" ? (
        <ProjectViewer back={back} data={currentProject} />
      ) : (
        <Grid container spacing={2}>
          {console.log("grid view")}
          {list.map((item) => (
            <Grid item key={item.id} sm={calculateColumnPerRow(sliderValue)}>
              <CardRoot sx={{ boxSizing: "border-box" }} elevation={6}>
                <Box className="grid__card-top">
                  <IMG src={item?.images[0]} alt={item?.name} />

                  <Box className="grid__card-overlay">
                    <FlexBetween>
                      <Checkbox sx={{ color: "#fff" }}></Checkbox>

                      {/* <FlexBox alignItems="center">
                      <StyledIcon fontSize="small">filter_none</StyledIcon>
                      <StyledIcon fontSize="small">share</StyledIcon>
                      <StyledIcon fontSize="small">edit</StyledIcon>
                      <StyledIcon fontSize="small">delete</StyledIcon>
                    </FlexBox> */}
                    </FlexBetween>

                    <FlexAlignCenter>
                      <Button
                        onClick={() => viewProjectHandler(item)}
                        variant="outlined"
                        sx={{ color: "#fff", borderColor: "#fff" }}
                      >
                        View Details
                      </Button>
                    </FlexAlignCenter>
                  </Box>
                </Box>

                <Box py={1} className="grid__card-bottom">
                  <Paragraph sx={{ color: secondary, fontWeight: "700" }}>{item?.name}</Paragraph>
                  <Small sx={{ display: "none" }}>{item?.date}</Small>
                  <Small sx={{ display: "block" }}>
                    {removeTimeFromDate(item?.project_duration[0] ?? "-")} |{" "}
                    {removeTimeFromDate(item?.project_duration[1] ?? "-")}
                  </Small>
                </Box>
              </CardRoot>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default GridView;
