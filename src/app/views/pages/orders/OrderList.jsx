import { Clear, Done, TrendingFlat } from "@mui/icons-material";
import {
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
  Tooltip,
  useTheme
} from "@mui/material";
import { Breadcrumb } from "../../../components";
import TableHead from "../../../components/data-table/TableHead";
import TableToolbar from "../../../components/data-table/TableToolbar";
import { getComparator, stableSort } from "../../../components/data-table/utils";
import { Span } from "../../../components/Typography";
import useTable from "../../../hooks/useTable";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

// styled components

const StyledSpan = styled(Span)(({ bgColor }) => ({
  color: "#fff",
  padding: "2px 8px",
  borderRadius: "4px",
  background: bgColor,
  textTransform: "capitalize"
}));

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

const OrderList = () => {
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

  const { palette } = useTheme();
  const bgGreen = "rgba(9, 182, 109, 1)";
  const bgError = palette.error.main;
  const bgSecondary = palette.secondary.main;

  // TABLE HEADER COLUMN LIST
  const columns = [
    { id: "orderNo", align: "left", disablePadding: true, label: "Order No" },
    { id: "customer", align: "center", disablePadding: false, label: "Customer" },
    { id: "product", align: "center", disablePadding: false, label: "Product" },
    { id: "date", align: "center", disablePadding: false, label: "Date" },
    { id: "status", align: "center", disablePadding: false, label: "Status" },
    { id: "method", align: "center", disablePadding: false, label: "Method" },
    { id: "total", align: "center", disablePadding: false, label: "Total" },
    { id: "edit", align: "center", disablePadding: false, label: "Edit" }
  ];

  const handleSelectAllRows = (event) => {
    const newSelected = orderList.map((n) => n.name);
    handleSelectAllClick(event.target.checked, newSelected);
  };

  const renderStatus = (status) => {
    if (status === "delivered") return <StyledSpan bgColor={bgGreen}>{status}</StyledSpan>;
    if (status === "processing") return <StyledSpan bgColor={bgSecondary}>{status}</StyledSpan>;
    if (status === "cancelled") return <StyledSpan bgColor={bgError}>{status}</StyledSpan>;
  };

  return (
    <Container>
      <div className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Pages", path: "/pages" }, { name: "Order List" }]} />
      </div>

      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableToolbar title="All Orders" numSelected={selected.length} />

        <TableContainer>
          <Table sx={{ minWidth: 1200 }}>
            <TableHead
              order={order}
              orderBy={orderBy}
              headCells={columns}
              rowCount={orderList.length}
              numSelected={selected.length}
              onRequestSort={handleRequestSort}
              onSelectAllClick={handleSelectAllRows}
            />

            <TableBody>
              {stableSort(orderList, getComparator(order, orderBy))
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
                        {row.orderNo}
                      </TableCell>

                      <TableCell align="center">{row.customer}</TableCell>
                      <TableCell align="center">{row.product}</TableCell>
                      <TableCell align="center">{format(row.date, "dd MMM, yyyy")}</TableCell>
                      <TableCell align="center">{renderStatus(row.status)}</TableCell>
                      <TableCell align="center">{row.method}</TableCell>
                      <TableCell align="center">${row.total}</TableCell>

                      <TableCell align="center">
                        <Tooltip title="Mark as Delivered">
                          <IconButton>
                            <Done color="success" fontSize="small" />
                          </IconButton>
                        </Tooltip>

                        <Tooltip title="Cancel Order">
                          <IconButton>
                            <Clear color="error" fontSize="small" />
                          </IconButton>
                        </Tooltip>

                        <Tooltip title="View Order">
                          <IconButton onClick={() => navigate(`/invoice/${row.orderNo}`)}>
                            <TrendingFlat fontSize="small" />
                          </IconButton>
                        </Tooltip>
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
          count={orderList.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Container>
  );
};

const orderList = [
  {
    orderNo: "lkfjdfjdsjdslgkfjdskjfds",
    date: new Date(),
    customer: "Ben Schieldman",
    product: "Bit Bass Headphone",
    method: "PayPal",
    total: 15.25,
    status: "delivered"
  },
  {
    orderNo: "fkjjirewoigkjdhvkcxyhuig",
    date: new Date(),
    customer: "Joyce Watson",
    product: "Comlion Watch",
    method: "Visa Card",
    total: 75.25,
    status: "cancelled"
  },
  {
    orderNo: "fdskjkljicuviosduisjd",
    date: new Date(),
    customer: "Kayle Brown",
    product: "Beats Headphone",
    method: "Master Card",
    total: 45.25,
    status: "processing"
  },
  {
    orderNo: "fdskfjdsuoiucrwevbgd",
    date: new Date(),
    customer: "Ven Helsing",
    product: "BMW Bumper",
    method: "Master Card",
    total: 2145.25,
    status: "delivered"
  }
];

export default OrderList;
