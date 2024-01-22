import {
  Box,
  Hidden,
  Icon,
  IconButton,
  InputAdornment,
  Slider,
  styled,
  TextField,
} from "@mui/material";
import { FlexBetween } from "app/components/FlexBox";

// styled components
const FlexBox = styled(Box)({ display: "flex", alignItems: "center" });
const StyledSlider = styled(Slider)({ width: 120, marginRight: "16px" });

const ListTopbar = ({
  viewMode,
  sliderValue,
  handleSldierChange,
  handleInputChange,
  handleViewChange,
}) => {
  let marks = [{ value: 25 }, { value: 50 }, { value: 75 }, { value: 100 }];

  return (
    <FlexBetween flexWrap="wrap">
      <TextField
        variant="standard"
        onChange={handleInputChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Icon>search</Icon>
            </InputAdornment>
          ),
        }}
      />

      <FlexBox>
        <Hidden xsDown>
          {viewMode === "grid" && (
            <StyledSlider
              min={25}
              step={null}
              marks={marks}
              value={sliderValue}
              onChange={handleSldierChange}
              aria-labelledby="continuous-slider"
            />
          )}
          <IconButton
            size="large"
            color={viewMode === "grid" ? "primary" : "default"}
            onClick={() => handleViewChange("grid")}
          >
            <Icon>view_comfy</Icon>
          </IconButton>

          <IconButton
            size="large"
            color={viewMode === "list" ? "primary" : "default"}
            onClick={() => handleViewChange("list")}
          >
            <Icon>list</Icon>
          </IconButton>
        </Hidden>
      </FlexBox>
    </FlexBetween>
  );
};

export default ListTopbar;
