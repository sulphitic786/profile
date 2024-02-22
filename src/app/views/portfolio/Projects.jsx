import React, { useEffect, useState } from "react";
import { Paper, styled, Icon, Grid, Button, Tooltip, TextField, Box } from "@mui/material";
import { Breadcrumb } from "../../components";
import DataTable from "react-data-table-component";
import ConfirmationDialog from "../../components/ConfirmationDialog";
import { color, getYearsFromTimestamp, removeTimeFromDate } from "../../utils/utils";
// import '@styles/react/libs/tables/react-dataTable-component.scss';
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { MatxLoading } from "../../components";
import { fireStore } from "./../../../config";
import { useNavigate, useLocation } from "react-router-dom";
import { useAlert } from "../../contexts/AlertContext";
import ProjectViewer from "./ProjectViewer";

const Container = styled("div")(({ theme }) => ({
  margin: "20px",
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
      placeholder="Search Input"
      label="Quick Search"
      value={filterText}
      onChange={onFilter}
      id="search"
      className=""
    />
  );
};

const Projects = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [view, setView] = useState("");
  const [currentProject, setCurrentProject] = useState(null);
  const { showAlert } = useAlert();

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await getDocs(collection(fireStore, "projects"));
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

  const viewProjectHandler = async (data) => {
    setView("ProjectViewer");
    setCurrentProject(data);
  };

  const back = () => {
    setView("");
  };

  const columns = [
    {
      name: <b>Image</b>,
      sortable: true,
      minWidth: "100px",
      sortField: "name",
      selector: (row) => row.images,
      cell: (row) => (
        <div className="d-flex justify-content-left align-items-center ">
          <FlexBox gap={1}>
            <IMG src={row?.images} alt="No Image" />
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
      name: <b>Category</b>,
      sortable: true,
      minWidth: "150px",
      sortField: "category",
      selector: (row) => row?.category,
      cell: (row) => (
        <div className="d-flex justify-content-left align-items-center ">
          <div className="d-flex flex-column">{row?.category ?? "-"}</div>
        </div>
      )
    },
    {
      name: <b>Technology</b>,
      sortable: true,
      minWidth: "150px",
      sortField: "technology",
      selector: (row) => row?.technology,
      cell: (row) => (
        <div className="d-flex justify-content-left align-items-center ">
          <div className="d-flex flex-column">
            {row?.technology.length > 50
              ? `${row?.technology.substring(0, 50)}...`
              : row?.technology}
          </div>
        </div>
      )
    },
    // {
    //   name: <b>Status</b>,
    //   sortable: true,
    //   minWidth: '100px',
    //   sortField: 'status',
    //   selector: (row) => row.status,
    //   cell: (row) => (
    //     <div className="d-flex justify-content-left align-items-center ">
    //       <Small bgcolor={color(row.status == 'active' ? 'lightSuccess' : 'lightError')}>
    //         {row.status == 'active' ? 'Active' : 'Inactive'}
    //       </Small>
    //     </div>
    //   )
    // },
    {
      name: <b>Client</b>,
      sortable: true,
      minWidth: "150px",
      sortField: "client",
      selector: (row) => row?.client,
      cell: (row) => (
        <div className="d-flex justify-content-left align-items-center ">
          <div className="d-flex flex-column">{row?.client ?? "-"}</div>
        </div>
      )
    },
    {
      name: <b>Client Region</b>,
      sortable: true,
      minWidth: "150px",
      sortField: "client",
      selector: (row) => row?.client_region,
      cell: (row) => (
        <div className="d-flex justify-content-left align-items-center ">
          <div className="d-flex flex-column">{row?.client_region ?? "-"}</div>
        </div>
      )
    },
    // {
    //   name: <b>Clint Phone</b>,
    //   sortable: true,
    //   minWidth: '150px',
    //   sortField: 'client_phone',
    //   selector: (row) => row?.client_phone,
    //   cell: (row) => (
    //     <div className="d-flex justify-content-left align-items-center ">
    //       <div className="d-flex flex-column">{row?.client_phone ?? '-'}</div>
    //     </div>
    //   )
    // },
    // {
    //   name: <b>Client Email</b>,
    //   sortable: true,
    //   minWidth: '180px',
    //   sortField: 'email',
    //   selector: (row) => row?.client_email,
    //   cell: (row) => (
    //     <div className="d-flex justify-content-left align-items-center ">
    //       <div className="d-flex flex-column">{row?.client_email ?? '-'}</div>
    //     </div>
    //   )
    // },
    {
      name: <b>Project Start</b>,
      sortable: true,
      minWidth: "150px",
      sortField: "project_duration",
      selector: (row) => row?.project_duration,
      cell: (row) => (
        <div className="d-flex justify-content-left align-items-center ">
          <div className="d-flex flex-column">
            {row?.project_duration ? removeTimeFromDate(row?.project_duration[0]) : "-"}
          </div>
        </div>
      )
    },
    {
      name: <b>Project End</b>,
      sortable: true,
      minWidth: "150px",
      sortField: "project_duration",
      selector: (row) => row?.project_duration,
      cell: (row) => (
        <div className="d-flex justify-content-left align-items-center ">
          <div className="d-flex flex-column">
            {row?.project_duration ? removeTimeFromDate(row?.project_duration[1]) : "-"}
          </div>
        </div>
      )
    },
    {
      name: <b>Duration</b>,
      sortable: true,
      minWidth: "150px",
      sortField: "project_duration",
      selector: (row) => row?.project_duration,
      cell: (row) => (
        <div className="d-flex justify-content-left align-items-center ">
          <div className="d-flex flex-column">
            {row?.project_duration ? `${getYearsFromTimestamp(row?.project_duration)} Years` : "-"}
          </div>
        </div>
      )
    },
    {
      name: <b>Action</b>,
      sortable: true,
      center: true,
      minWidth: "50px",
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
          </div>
        </div>
      )
    }
  ];

  const subheaderComponentHandler = () => {
    return (
      <>
        <div className="mt-1" style={{ width: "-webkit-fill-available" }}>
          {/* <Button
            color="primary"
            variant="contained"
            sx={{ mt: '6px !important' }}
            style={{ float: 'left' }}
            onClick={() => addProjectHandler()}
          >
            + Add New Project
          </Button> */}
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
        <Breadcrumb routeSegments={[{ name: "projects" }]} />
      </div>
      {view == "ProjectViewer" ? (
        <ProjectViewer back={back} data={currentProject} />
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
        </>
      )}
    </Container>
  );
};

export default Projects;
