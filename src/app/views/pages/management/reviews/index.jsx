import {
  Box,
  Button,
  Icon,
  InputAdornment,
  Paper,
  styled,
  TextField,
  Tooltip
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Breadcrumb } from "../../../../components";
import ConfirmationDialog from "../../../../components/ConfirmationDialog";
import { color } from "../../../../utils/utils";
// import '@styles/react/libs/tables/react-dataTable-component.scss';
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useLocation, useNavigate } from "react-router-dom";
import { fireStore } from "../../../../../config";
import { MatxLoading } from "../../../../components";
import { useAlert } from "../../../../contexts/AlertContext";
import ProjectForm from "./ProjectForm";
import ProjectViewer from "./ProjectViewer";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  overflow: "unset",
  [theme.breakpoints.down("sm")]: {
    margin: "16px"
  },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

const Small = styled("small")(({ bgcolor }) => ({
  height: 20,
  width: 60,
  color: "#fff",
  padding: "3px 8px",
  textAlign: "center",
  borderRadius: "4px",
  overflow: "hidden",
  background: bgcolor,
  boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"
}));

const IMG = styled("img")({
  height: 35,
  borderRadius: "4px"
});

const FlexBox = styled(Box)({
  display: "flex",
  alignItems: "center"
});

const FilterComponent = ({ filterText, onFilter }) => {
  return (
    <TextField
      id="search"
      variant="standard"
      placeholder="Quick Search"
      value={filterText}
      onChange={onFilter}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Icon>search</Icon>
          </InputAdornment>
        )
      }}
    />
  );
};

const Index = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [view, setView] = useState("");
  const [currentProject, setCurrentProject] = useState(null);
  const [action, setAction] = useState("");
  const [shouldOpenConfirmationDialog, setShouldOpenConfirmationDialog] = useState(false);
  const { showAlert } = useAlert();
  const { location } = useLocation();
  const { navigate } = useNavigate();

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await getDocs(collection(fireStore, "reviews"));
      const dataFromFirebase = response?.docs.map((doc) => ({
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

  const deleteRequestHandler = (data) => {
    setCurrentProject(data);
    setShouldOpenConfirmationDialog(true);
  };

  const handleDialogClose = () => {
    setShouldOpenConfirmationDialog(false);
  };

  const handleConfirmationResponse = async () => {
    try {
      setLoading(true);
      // Delete the document with the given ID
      await deleteDoc(doc(fireStore, "reviews", currentProject.id));
      showAlert("success", "Data deleted successfully.");
      setShouldOpenConfirmationDialog(false);
      setLoading(false);
      fetchData();
    } catch (error) {
      setLoading(false);
      showAlert("error", "Error while deleting request.");
      console.error("Error deleting data from Firebase:", error);
    }
  };

  const updateProjectHandler = async (data) => {
    setShowForm(true);
    setAction("update");
    setView("ProjectForm");
    setCurrentProject(data);
  };

  const viewProjectHandler = async (data) => {
    setShowForm(true);
    setView("ProjectViewer");
    setCurrentProject(data);
  };

  const addProjectHandler = async () => {
    setView("ProjectForm");
    setShowForm(true);
    setAction("add");
  };

  const back = () => {
    setShowForm(false);
    setView("");
  };

  const columns = [
    {
      name: <b>Image</b>,
      sortable: true,
      minWidth: "100px",
      sortField: "name",
      selector: (row) => row.image,
      cell: (row) => (
        <div className="d-flex justify-content-left align-items-center ">
          <FlexBox gap={1}>
            <IMG src={row?.image} alt="No Image" />
          </FlexBox>
        </div>
      )
    },
    {
      name: <b>Name</b>,
      sortable: true,
      minWidth: "150px",
      sortField: "name",
      selector: (row) => row?.name,
      cell: (row) => (
        <div className="d-flex justify-content-left align-items-center ">
          <div className="d-flex flex-column">{row?.name ?? "-"}</div>
        </div>
      )
    },
    {
      name: <b>Location</b>,
      sortable: true,
      minWidth: "150px",
      sortField: "category",
      selector: (row) => row?.location,
      cell: (row) => (
        <div className="d-flex justify-content-left align-items-center ">
          <div className="d-flex flex-column">{row?.location ?? "-"}</div>
        </div>
      )
    },
    {
      name: <b>Rating</b>,
      sortable: true,
      minWidth: "80px",
      sortField: "rating",
      selector: (row) => row?.rating,
      cell: (row) => (
        <div className="d-flex justify-content-left align-items-center ">
          <div className="d-flex flex-column">{row?.rating ?? "-"}</div>
        </div>
      )
    },
    {
      name: <b>Client Source</b>,
      sortable: true,
      minWidth: "150px",
      sortField: "clientSource",
      selector: (row) => row?.clientSource,
      cell: (row) => (
        <div className="d-flex justify-content-left align-items-center ">
          <div className="d-flex flex-column">{row?.clientSource ?? "-"}</div>
        </div>
      )
    },
    {
      name: <b>Message</b>,
      sortable: true,
      minWidth: "290px",
      sortField: "message",
      selector: (row) => row?.message,
      cell: (row) => (
        <div className="d-flex justify-content-left align-items-center ">
          <div className="d-flex flex-column">
            {row?.message.length > 150 ? `${row?.message.substring(0, 150)}...` : row?.message}
          </div>
        </div>
      )
    },
    {
      name: <b>Status</b>,
      sortable: true,
      minWidth: "100px",
      sortField: "status",
      selector: (row) => row.status,
      cell: (row) => (
        <div className="d-flex justify-content-left align-items-center ">
          <Small bgcolor={color(row.status == "active" ? "lightSuccess" : "lightError")}>
            {row.status == "active" ? "Active" : "Inactive"}
          </Small>
        </div>
      )
    },
    {
      name: <b>Date</b>,
      sortable: true,
      minWidth: "150px",
      sortField: "date",
      selector: (row) => row?.date,
      cell: (row) => (
        <div className="d-flex justify-content-left align-items-center ">
          <div className="d-flex flex-column">{row?.date ? row?.date : "-"}</div>
        </div>
      )
    },
    {
      name: <b>Action</b>,
      sortable: true,
      minWidth: "150px",
      sortField: "date",
      selector: (row) => row,
      cell: (row) => (
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex ">
            <Tooltip title="View Project Detail">
              <Icon
                onClick={() => viewProjectHandler(row)}
                color="primary"
                fontSize="small"
                style={{ cursor: "pointer" }}
              >
                visibility
              </Icon>
            </Tooltip>
            <Tooltip title="Edit/Update User">
              <Icon
                // onClick={() => handleAddUpdateUser('update', row)}
                onClick={() => updateProjectHandler(row)}
                className="mx-1"
                color="success"
                fontSize="small"
                style={{ cursor: "pointer" }}
              >
                edit
              </Icon>
            </Tooltip>
            <Tooltip title="Delete Request">
              <Icon
                onClick={() => deleteRequestHandler(row)}
                color="error"
                fontSize="small"
                style={{ cursor: "pointer" }}
              >
                delete_forever
              </Icon>
            </Tooltip>
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
        <div className="mt-1" style={{ width: "-webkit-fill-available" }}>
          <Button
            color="primary"
            variant="contained"
            sx={{ mt: "6px !important" }}
            style={{ float: "left" }}
            onClick={() => addProjectHandler()}
          >
            + Add New Review
          </Button>
          <FilterComponent
            className="justify-content-end"
            onFilter={(e) => setFilterText(e.target.value)}
            filterText={filterText}
          />
        </div>
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
        <Breadcrumb routeSegments={[{ name: "project management" }]} />
      </div>
      {view == "ProjectForm" ? (
        <ProjectForm
          updateData={action == "update" ? currentProject : null}
          back={back}
          action={action}
          fetchData={fetchData}
        />
      ) : view == "ProjectViewer" ? (
        <ProjectViewer
          updateProjectHandler={updateProjectHandler}
          back={back}
          data={currentProject}
        />
      ) : (
        <>
          <Paper sx={{ width: "100%" }}>
            <DataTable
              // title="Movie List"
              responsive
              striped
              highlightOnHover
              persistTableHead
              subHeader
              // subHeaderAlign="center"
              fixedHeader
              fixedHeaderScrollHeight="50vh"
              columns={columns}
              data={filteredData}
              // sortIcon={<ChevronDown />}
              className="react-dataTable"
              pagination
              // selectableRows
              // expandableRows
              // expandOnRowClicked
              // expandableRowsComponent={ExpandableTable}
              // onSelectedRowsChange={handleRowsSelection}
              subHeaderComponent={subheaderComponentHandler()}
              paginationPerPage={250}
              paginationRowsPerPageOptions={[25, 50, 75, 100]}
            />
          </Paper>

          {shouldOpenConfirmationDialog && (
            <ConfirmationDialog
              text="Are you sure to delete?"
              open={shouldOpenConfirmationDialog}
              onConfirmDialogClose={handleDialogClose}
              onYesClick={handleConfirmationResponse}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default Index;
