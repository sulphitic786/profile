import {
  Box,
  Button,
  Card,
  Checkbox,
  Fab,
  FormControl,
  FormControlLabel,
  Hidden,
  Icon,
  InputAdornment,
  Radio,
  RadioGroup,
  Rating,
  Slider,
  styled,
  TextField,
  useTheme,
} from "@mui/material";
import { FlexBetween } from "app/components/FlexBox";
import { H5, H6, Small, Span } from "app/components/Typography";
import { Fragment } from "react";

const ShopHeader = styled("div")({
  display: "flex",
  marginTop: "8px",
  marginBottom: "16px",
  paddingLeft: "16px",
  alignItems: "center",
});

const StyledCard = styled(Card)({
  padding: "16px",
  marginBottom: "16px",
  position: "relative",
});

const StyledLabel = styled(FormControlLabel)({ height: 32 });

const Badge = styled("small")(({ theme }) => ({
  color: theme.palette.primary.main,
  background: `rgba(var(--primary), 0.15)`,
}));

const ShopSidenav = ({
  query,
  categories,
  brands,
  multilevel,
  categoryList,
  brandList,
  ratingList,
  shipping,
  sliderRange,
  toggleSidenav,
  handleSearch,
  handleMultilevelChange,
  handleSliderChange,
  handleCategoryChange,
  handleBrandChange,
  handleRatingClick,
  handleFreeShippingClick,
  handleClearAllFilter,
}) => {
  const { palette } = useTheme();
  const textMuted = palette.text.secondary;
  const bgPaper = palette.background.paper;

  return (
    <Fragment>
      <ShopHeader>
        <TextField
          size="small"
          margin="none"
          name="query"
          value={query}
          variant="outlined"
          placeholder="Search here..."
          onChange={(e) => handleSearch(e.target.value)}
          sx={{ mr: 2, flexGrow: 1, background: bgPaper }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon fontSize="small">search</Icon>
              </InputAdornment>
            ),
          }}
          fullWidth
        />

        <Hidden smUp>
          <Icon onClick={toggleSidenav}>clear</Icon>
        </Hidden>
      </ShopHeader>

      <Box px={2}>
        <Card elevation={3} sx={{ p: 2, mb: 2 }}>
          <H6 sx={{ m: 0, mb: 2 }}>Price</H6>

          <FormControl component="fieldset" sx={{ width: "100%" }}>
            <RadioGroup
              name="status"
              value={multilevel}
              aria-label="status"
              onChange={handleMultilevelChange}
            >
              <StyledLabel
                value="0,10"
                label="<$10"
                labelPlacement="end"
                control={<Radio color="secondary" />}
              />
              <StyledLabel
                value="10,100"
                label="$10-$100"
                labelPlacement="end"
                control={<Radio color="secondary" />}
              />
              <StyledLabel
                value="100,500"
                label="$100-$500"
                labelPlacement="end"
                control={<Radio color="secondary" />}
              />
              <StyledLabel
                value="500"
                label=">$500"
                labelPlacement="end"
                control={<Radio color="secondary" />}
              />
              <StyledLabel
                value="all"
                control={<Radio color="secondary" />}
                label="All"
                labelPlacement="end"
              />
            </RadioGroup>
          </FormControl>
        </Card>

        <Card elevation={3} sx={{ p: 2, mb: 2 }}>
          <FlexBetween sx={{ mb: 2 }}>
            <H5 sx={{ m: 0 }}>Slider</H5>

            <Span sx={{ color: textMuted }}>
              ${sliderRange[0] * 10} - ${sliderRange[1] * 10}
            </Span>
          </FlexBetween>

          <Slider
            value={sliderRange}
            valueLabelDisplay="auto"
            onChange={handleSliderChange}
            aria-labelledby="range-slider"
            valueLabelFormat={(x) => x * 10}
          />
        </Card>

        <StyledCard elevation={3}>
          <H5 sx={{ m: 0, mb: 2 }}>Category</H5>

          {categoryList.map((category) => (
            <FlexBetween key={category.title}>
              <FormControlLabel
                sx={{ flexGrow: 1 }}
                name={category.title}
                onChange={handleCategoryChange}
                control={<Checkbox checked={categories.includes(category.title)} />}
                label={<Span sx={{ textTransform: "capitalize" }}>{category.title}</Span>}
              />

              <Badge className="badge">{category.product}</Badge>
            </FlexBetween>
          ))}
        </StyledCard>

        <StyledCard elevation={3}>
          <H5 sx={{ mb: 2 }}>Brands</H5>

          <TextField
            size="small"
            sx={{ mb: 2 }}
            variant="outlined"
            placeholder="Search here..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon fontSize="small">search</Icon>
                </InputAdornment>
              ),
            }}
            fullWidth
          ></TextField>

          {brandList.map((brand) => (
            <FlexBetween key={brand.title}>
              <FormControlLabel
                name={brand.title}
                label={brand.title}
                sx={{ flexGrow: 1 }}
                onChange={handleBrandChange}
                control={<Checkbox checked={brands.includes(brand.title)} />}
              />
              <Badge className="badge">{brand.product}</Badge>
            </FlexBetween>
          ))}
        </StyledCard>

        <StyledCard elevation={3}>
          <H5 sx={{ mb: 2 }}>Rating</H5>
          {ratingList.map((rating) => (
            <FlexBetween
              key={rating.rate}
              value={rating.rate}
              onClick={() => handleRatingClick(rating.rate)}
              sx={{ pb: 2, cursor: "pointer" }}
            >
              <Rating
                size="small"
                precision={0.5}
                readOnly={true}
                name="half-rating"
                value={rating.rate}
              />
              <Badge className="badge">{rating.product}</Badge>
            </FlexBetween>
          ))}
        </StyledCard>

        <StyledCard
          elevation={3}
          sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
        >
          <H5>Toggle</H5>
          <Fab
            size="small"
            variant="extended"
            color={shipping ? "primary" : "inherit"}
            onClick={handleFreeShippingClick}
            sx={{ px: "12px", boxShadow: "none" }}
          >
            <Small sx={{ mr: 2 }}>Free Shipping</Small>
            <Icon>add</Icon>
          </Fab>
        </StyledCard>

        <Button
          color="primary"
          variant="contained"
          sx={{ width: "100%" }}
          onClick={handleClearAllFilter}
        >
          Clear All Filteres
        </Button>
      </Box>
    </Fragment>
  );
};

export default ShopSidenav;
