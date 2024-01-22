import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Icon,
  IconButton,
  styled,
  TextField,
  useTheme,
} from "@mui/material";
import { FlexBetween } from "app/components/FlexBox";
import { H4, H5, H6, Paragraph, Small, Span } from "app/components/Typography";
import { convertHexToRGB } from "app/utils/utils";
import { format } from "date-fns";

// styled components
const StyledButton = styled(Button)(({ theme }) => ({
  fontWeight: "500",
  whiteSpace: "pre",
  marginLeft: "12px",
  paddingLeft: "28px",
  paddingRight: "28px",
  color: theme.palette.primary.main,
  background: `rgba(${convertHexToRGB(theme.palette.primary.main)}, 0.15)`,
}));

const StyledGrid = styled(Grid)({ textAlign: "center" });

const IMG = styled("img")({
  width: 100,
  borderRadius: "4px",
  marginRight: "12px",
});

const StyledP = styled(Paragraph)(({ theme }) => ({
  marginTop: 0,
  fontSize: "13px",
  marginBottom: "6px",
  "& .item": { fontWeight: "500" },
  "& .title": { color: theme.palette.text.secondary },
}));

const InvoiceOverview = () => {
  const { palette } = useTheme();
  const textMuted = palette.text.secondary;
  const textPrimary = palette.primary.main;

  return (
    <Card sx={{ p: 2 }}>
      <FlexBetween sx={{ mb: 2 }}>
        <H4 fontWeight={500}>Overview</H4>

        <Box color="text.secondary" fontSize={13} fontWeight={500}>
          {format(new Date(), "MMM dd, yyyy")} at {format(new Date(), "HH:mm:aa")}
        </Box>
      </FlexBetween>

      <Divider sx={{ mb: 3 }} />

      <Box mb={3} display="flex">
        <TextField
          size="small"
          variant="outlined"
          placeholder="Search products..."
          fullWidth
          InputProps={{
            startAdornment: (
              <Icon sx={{ mr: "12px" }} fontSize="small">
                search
              </Icon>
            ),
          }}
        />

        <StyledButton>Browse Catalog</StyledButton>
      </Box>

      <Box overflow="auto">
        <Box minWidth={600}>
          <Box py="12px">
            <Grid container>
              <Grid item lg={6} md={6} sm={6} xs={6}>
                <H6>Product Details</H6>
              </Grid>

              <StyledGrid item lg={2} md={2} sm={2} xs={2}>
                <H6>Price</H6>
              </StyledGrid>

              <StyledGrid item lg={2} md={2} sm={2} xs={2}>
                <H6>Quantity</H6>
              </StyledGrid>

              <StyledGrid item lg={2} md={2} sm={2} xs={2}>
                <H6>Total</H6>
              </StyledGrid>
            </Grid>
          </Box>

          <Divider />

          {dummyProductList.map((product) => (
            <Box py={2} key={product.id}>
              <Grid container alignItems="center">
                <Grid item lg={6} md={6} sm={6} xs={6}>
                  <Box display="flex">
                    <IMG src={product.imgUrl} alt={product.title} />

                    <Box flexGrow={1}>
                      <H6 sx={{ mb: "12px", fontSize: "15px", color: textPrimary }}>
                        {product.title}
                      </H6>

                      <StyledP>
                        <span className="title">category: </span>
                        <span className="item">{product.item}</span>
                      </StyledP>

                      <StyledP>
                        <span className="title">brand: </span>
                        <span className="item">{product.brand}</span>
                      </StyledP>

                      <StyledP>
                        <span className="title">category: </span>
                        <span className="item">{product.category}</span>
                      </StyledP>
                    </Box>
                  </Box>
                </Grid>

                <StyledGrid item lg={2} md={2} sm={2} xs={2}>
                  <TextField
                    size="small"
                    name="amount"
                    type="number"
                    variant="outlined"
                    defaultValue={product.price}
                    sx={{ width: "60px" }}
                  />
                </StyledGrid>

                <StyledGrid item lg={2} md={2} sm={2} xs={2}>
                  <TextField
                    size="small"
                    name="amount"
                    type="number"
                    variant="outlined"
                    defaultValue={product.amount}
                    sx={{ width: "60px" }}
                  />
                </StyledGrid>

                <StyledGrid item lg={2} md={2} sm={2} xs={2}>
                  <FlexBetween justifyContent="flex-end">
                    <H6>${product.price * product.amount}</H6>

                    <IconButton>
                      <Icon fontSize="small">clear</Icon>
                    </IconButton>
                  </FlexBetween>
                </StyledGrid>
              </Grid>
            </Box>
          ))}
        </Box>
      </Box>

      <Divider sx={{ mt: 2, mb: 3 }} />

      <Grid container spacing={3}>
        <Grid item md={7} xs={12}>
          <H5 sx={{ mb: 3 }}>Notes</H5>
          <TextField placeholder="Write a note" variant="outlined" multiline rows={6} fullWidth />
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button variant="contained" color="primary" size="small">
              Add a note
            </Button>
          </Box>
        </Grid>
        <Grid item md={5} xs={12}>
          <H5 sx={{ mb: 3 }}>Bill Details</H5>
          <Box mb="12px" display="flex" justifyContent="space-between">
            <Span sx={{ color: textMuted }}>Subtotal:</Span>
            <Span sx={{ fontWeight: "500" }}>$568</Span>
          </Box>

          <StyledP
            sx={{
              mb: "4px",
              fontWeight: "500",
              color: textPrimary,
            }}
          >
            Shipping
          </StyledP>
          <Box mb="12px" display="flex" justifyContent="space-between">
            <div>
              <Paragraph>DHL</Paragraph>
              <Small sx={{ color: textMuted }}>Deliver in 1-3 days</Small>
            </div>
            <Span sx={{ fontWeight: "500" }}>$15.00</Span>
          </Box>

          <StyledP
            sx={{
              mb: "4px",
              fontWeight: "500",
              color: textPrimary,
            }}
          >
            Taxes
          </StyledP>
          <Box mb="8px" display="flex" justifyContent="space-between">
            <Paragraph>GST 5%</Paragraph>
            <Span sx={{ fontWeight: "500" }}>$150.00</Span>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

const dummyProductList = [
  {
    id: "323sa680b32497dsfdsgga21rt47",
    imgUrl: "/assets/images/products/speaker-1.jpg",
    price: 324.0,
    amount: 10,
    title: "Bass Speaker Black",
    category: "audio",
    brand: "Microlab",
    item: "2019 6582 2365",
  },
  {
    id: "323sa680b324976dfgga21rt47",
    imgUrl: "/assets/images/products/speaker-2.jpg",
    price: 454.0,
    amount: 15,
    title: "Bass Speaker",
    category: "audio",
    brand: "Microlab",
    item: "2019 6582 2365",
  },
];

export default InvoiceOverview;
