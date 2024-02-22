import React, { useEffect, useState } from "react";
import { Paper, styled, Icon, Grid, Tooltip, TextField } from "@mui/material";
import { Breadcrumb } from "../../../../components";
import DataTable from "react-data-table-component";
import { getDateFromTimestamp } from "../../../../utils/utils";
// import '@styles/react/libs/tables/react-dataTable-component.scss';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { MatxLoading } from "../../../../components";
import { fireStore } from "../../../../../config";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../../../../contexts/AlertContext";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: {
    margin: "16px"
  },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

const FilterComponent = ({ filterText, onFilter }) => {
  return (
    <TextField
      placeholder="Search Input"
      label="Quick Search"
      value={filterText}
      onChange={onFilter}
      id="search"
      className=""
    />
  );
};

const ContactUsRequests = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterText, setFilterText] = useState("");
  const { showAlert } = useAlert();

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);

  const deleteRequestHandler = async (data) => {
    try {
      setLoading(true);
      // Delete the document with the given ID
      await deleteDoc(doc(fireStore, "contact-us", data.id));
      showAlert("success", "Data deleted successfully.");
      setLoading(false);
      fetchData();
    } catch (error) {
      setLoading(false);
      showAlert("error", "Error while deleting request.");
      console.error("Error deleting data from Firebase:", error);
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await getDocs(collection(fireStore, "contact-us"));
      const dataFromFirebase = response.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setLoading(false);
      setUsers(dataFromFirebase);
      showAlert("success", "Data fetch successfully.");
    } catch (error) {
      setLoading(false);
      showAlert("error", "Error while fetching data.");
      console.error("Error fetching data:", error);
    }
  };

  const navigate = useNavigate();

  const columns = [
    {
      name: "Name",
      sortable: true,
      minWidth: "102px",
      sortField: "name",
      selector: (row) => row.name,
      cell: (row) => (
        <div className="d-flex justify-content-left align-items-center ">
          <div className="d-flex flex-column">{row.name}</div>
        </div>
      )
    },
    {
      name: "Phone",
      sortable: true,
      minWidth: "102px",
      sortField: "phone",
      selector: (row) => row.phone,
      cell: (row) => (
        <div className="d-flex justify-content-left align-items-center ">
          <div className="d-flex flex-column">{row.phone}</div>
        </div>
      )
    },
    {
      name: "Email",
      sortable: true,
      minWidth: "102px",
      sortField: "email",
      selector: (row) => row.email,
      cell: (row) => (
        <div className="d-flex justify-content-left align-items-center ">
          <div className="d-flex flex-column">{row.email}</div>
        </div>
      )
    },
    {
      name: "Subject",
      sortable: true,
      minWidth: "102px",
      sortField: "subject",
      selector: (row) => row.subject,
      cell: (row) => (
        <div className="d-flex justify-content-left align-items-center ">
          <div className="d-flex flex-column">{row.subject}</div>
        </div>
      )
    },
    {
      name: "Message",
      sortable: true,
      minWidth: "200px",
      sortField: "message",
      selector: (row) => row.message,
      cell: (row) => (
        <div className="d-flex justify-content-left align-items-center ">
          <div className="d-flex flex-column">
            {/* {row.message} */}
            {row.message.length > 50 ? `${row.message.substring(0, 50)}...` : row.message}
          </div>
        </div>
      )
    },
    {
      name: "Date",
      sortable: true,
      minWidth: "102px",
      sortField: "date",
      selector: (row) => row.created_at,
      cell: (row) => (
        <div className="d-flex justify-content-left align-items-center ">
          <div className="d-flex flex-column">{getDateFromTimestamp(row.created_at)}</div>
        </div>
      )
    },
    {
      name: "Action",
      sortable: true,
      minWidth: "102px",
      sortField: "date",
      selector: (row) => row.created_at,
      cell: (row) => (
        <div className="d-flex justify-content-left align-items-center ">
          <div className="d-flex ">
            <Tooltip title="Delete Request">
              <Icon onClick={() => deleteRequestHandler(row)} color="error" fontSize="small">
                delete_forever
              </Icon>
            </Tooltip>
            {/* {getDateFromTimestamp(row.created_at)} */}
          </div>
        </div>
      )
    }
  ];

  const ExpandableTable = ({ data }) => {
    return (
      <>
        <div
          className="d-flex justify-content-center align-items-center py-2"
          style={{ backgroundColor: "#e0d9d9", opacity: "0.5", fontStyle: "italic" }}
        >
          <div className="d-flex flex-column">{data.message}</div>
        </div>
      </>
    );
  };

  const subheaderComponentHandler = () => {
    return (
      <>
        <Grid lg={12} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
          {/* <TableToolbar title="All Requests" /> */}
          {/* <span>All Requests</span> */}
          <FilterComponent
            onFilter={(e) => setFilterText(e.target.value)}
            filterText={filterText}
          />
        </Grid>
      </>
    );
  };

  const handleSelectAllRows = (event) => {};

  if (users) {
    var filteredData = users.filter((item) => {
      const itemString = JSON.stringify(item).toLowerCase();
      return itemString.includes(filterText.toLowerCase());
    });
  }

  return (
    <Container>
      {loading && <MatxLoading />}
      <div className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: "Pages", path: "/pages" }, { name: "contact-us-list" }]}
        />
      </div>

      <Paper sx={{ width: "100%", overflowX: "scroll" }}>
        <DataTable
          responsive
          striped
          highlightOnHover
          persistTableHead
          subHeader
          subHeaderAlign="right"
          fixedHeader
          fixedHeaderScrollHeight="50vh"
          columns={columns}
          data={filteredData}
          // sortIcon={<ChevronDown />}
          className="react-dataTable"
          pagination
          // selectableRows
          expandableRows
          expandOnRowClicked
          expandableRowsComponent={ExpandableTable}
          // onSelectedRowsChange={handleRowsSelection}
          subHeaderComponent={subheaderComponentHandler()}
          paginationPerPage={250}
          paginationRowsPerPageOptions={[250, 500, 750, 1000]}
        />
      </Paper>
    </Container>
  );
};

export default ContactUsRequests;
