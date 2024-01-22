import {
  Box,
  Button,
  Grid,
  Hidden,
  Icon,
  IconButton,
  MenuItem,
  styled,
  TablePagination,
  TextField,
} from "@mui/material";
import { FlexBetween } from "app/components/FlexBox";
import * as _ from "lodash";
import { Fragment } from "react";
import GridProductCard from "./GridProductCard";
import ListProductCard from "./ListProductCard";

const ContentBox = styled(FlexBetween)({ flexGrow: 1, justifyContent: "flex-end" });

const ShopContainer = ({
  view,
  page,
  orderBy,
  toggleView,
  rowsPerPage,
  productList,
  handleChange,
  toggleSidenav,
  setRowsPerPage,
  handleChangePage,
}) => {
  return (
    <Fragment>
      <Box width="100%" height="100%" position="relative">
        <FlexBetween sx={{ mb: 2 }}>
          <Hidden mdUp>
            <Button size="small" variant="contained" color="primary" onClick={toggleSidenav}>
              Filter
            </Button>
          </Hidden>

          <ContentBox>
            <TextField
              select
              name="orderBy"
              value={orderBy}
              variant="standard"
              onChange={handleChange}
            >
              <MenuItem value="default">Default</MenuItem>
              <MenuItem value="asc">Lowest Price</MenuItem>
              <MenuItem value="desc">Highest Price</MenuItem>
            </TextField>

            <IconButton size="large" onClick={() => toggleView("grid")}>
              <Icon color={view === "grid" ? "primary" : "inherit"}>view_comfy</Icon>
            </IconButton>

            <IconButton size="large" onClick={() => toggleView("list")}>
              <Icon color={view === "list" ? "primary" : "inherit"}>list</Icon>
            </IconButton>
          </ContentBox>
        </FlexBetween>

        <Grid container spacing={2}>
          {_.orderBy(productList, orderBy !== "false" ? "price" : "", orderBy)
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((product) =>
              view === "grid" ? (
                <Grid item key={product.id} lg={4} md={6} xs={12}>
                  <GridProductCard product={product} />
                </Grid>
              ) : (
                <Grid item key={product.id} xs={12}>
                  <ListProductCard product={product} />
                </Grid>
              )
            )}
        </Grid>
      </Box>

      <TablePagination
        page={page}
        component="div"
        rowsPerPage={rowsPerPage}
        count={productList.length}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[6, 12, 24]}
        onRowsPerPageChange={setRowsPerPage}
        nextIconButtonProps={{ "aria-label": "Next Page" }}
        backIconButtonProps={{ "aria-label": "Previous Page" }}
      />
    </Fragment>
  );
};

export default ShopContainer;
