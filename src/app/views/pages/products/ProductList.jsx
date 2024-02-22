import { Edit, TrendingFlat } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  IconButton,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  useTheme
} from "@mui/material";
import { Breadcrumb, MatxLoading } from "../../../components";
import TableHead from "../../../components/data-table/TableHead";
import TableToolbar from "../../../components/data-table/TableToolbar";
import { getComparator, stableSort } from "../../../components/data-table/utils";
import { H5, Span } from "../../../components/Typography";
import useProducts from "../../../hooks/useProducts";
import useTable from "../../../hooks/useTable";
import { useNavigate } from "react-router-dom";

// styled components
const IMG = styled("img")({
  height: 32,
  borderRadius: "4px"
});

const FlexBox = styled(Box)({
  display: "flex",
  alignItems: "center"
});

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

const StyledSpan = styled(Span)({
  color: "#fff",
  padding: "2px 8px",
  borderRadius: "4px"
});

const ProductList = () => {
  const {
    page,
    order,
    orderBy,
    selected,
    rowsPerPage,

    isSelected,
    handleClick,
    handleChangePage,
    handleRequestSort,
    handleSelectAllClick,
    handleChangeRowsPerPage
  } = useTable({ defaultOrderBy: "name" });

  const navigate = useNavigate();
  const { isLoading, products } = useProducts();

  const { palette } = useTheme();
  const bgError = palette.error.main;
  const bgGreen = "rgba(9, 182, 109, 1)";
  const bgSecondary = palette.secondary.main;

  // TABLE HEADER COLUMN LIST
  const columns = [
    { id: "name", align: "left", disablePadding: true, label: "Name" },
    { id: "description", align: "center", disablePadding: false, label: "Description" },
    { id: "quantity", align: "center", disablePadding: false, label: "Quantity" },
    { id: "price", align: "center", disablePadding: false, label: "Price" },
    { id: "edit", align: "center", disablePadding: false, label: "Edit" }
  ];

  // RENDER PRODUCT QUANTITY STATUS
  const renderChip = (quantity) => {
    if (quantity === 0) return <StyledSpan bgcolor={bgError}>Out of Stock</StyledSpan>;
    else if (quantity >= 30) return <StyledSpan bgcolor={bgGreen}>Available</StyledSpan>;
    else if (quantity < 30) return <StyledSpan bgcolor={bgSecondary}>Limited Stock</StyledSpan>;
  };

  const handleSelectAllRows = (event) => {
    const newSelected = productList.map((n) => n.name);
    handleSelectAllClick(event.target.checked, newSelected);
  };

  if (isLoading) return <MatxLoading />;

  const productList = products?.map((item) => ({
    name: item.title,
    price: item.price,
    imgUrl: item.imgUrl,
    quantity: item.totalUnit,
    description: item.description
  }));

  return (
    <Container>
      <div className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Pages", path: "/pages" }, { name: "Product List" }]} />
      </div>

      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableToolbar title="All Products" numSelected={selected.length} />

        <TableContainer>
          <Table sx={{ minWidth: 750 }}>
            <TableHead
              order={order}
              orderBy={orderBy}
              headCells={columns}
              rowCount={productList.length}
              numSelected={selected.length}
              onRequestSort={handleRequestSort}
              onSelectAllClick={handleSelectAllRows}
            />

            <TableBody>
              {stableSort(productList, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  const isItemSelected = isSelected(row.name);

                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={row.name}
                      role="checkbox"
                      selected={isItemSelected}
                      aria-checked={isItemSelected}
                      onClick={(event) => handleClick(event, row.name)}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox color="primary" checked={isItemSelected} />
                      </TableCell>

                      <TableCell component="th" scope="row" padding="none">
                        <FlexBox gap={1}>
                          <IMG src={row.imgUrl} alt="user" />
                          <H5 fontSize={15}>{row.name}</H5>
                        </FlexBox>
                      </TableCell>

                      <TableCell align="center">{row.description.substring(0, 30)}...</TableCell>

                      <TableCell align="center">{renderChip(row.quantity)}</TableCell>

                      <TableCell align="center">{row.price}</TableCell>

                      <TableCell align="center">
                        <IconButton onClick={() => navigate("/pages/new-product")}>
                          <Edit />
                        </IconButton>

                        <IconButton onClick={() => navigate("/pages/view-product")}>
                          <TrendingFlat />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          page={page}
          component="div"
          rowsPerPage={rowsPerPage}
          count={productList.length}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Container>
  );
};

export default ProductList;
