import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Icon,
  styled,
  useTheme,
  Paper,
  Tooltip,
  InputAdornment,
  TextField,
  Link
} from "@mui/material";
import DataTable from "react-data-table-component";
import { getYearsFromTimestamp, removeTimeFromDate } from "../../../utils/utils";
import ProjectViewer from "./ProjectViewer";

// styled components
const FlexBox = styled(Box)({
  display: "flex",
  alignItems: "center"
});

const IMG = styled("img")({ maxHeight: 100, maxWidth: 120, padding: "5px" });

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

const ListView = ({ list = [] }) => {
  const [filterText, setFilterText] = useState("");
  const [view, setView] = useState("");
  const [currentProject, setCurrentProject] = useState(null);
  console.log("list", list);
  const { palette } = useTheme();

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
      minWidth: "150px",
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
        <div className="mt-1" style={{ width: "-webkit-fill-available", marginTop: "15px" }}>
          <FilterComponent
            className="justify-content-end"
            onFilter={(e) => setFilterText(e.target.value)}
            filterText={filterText}
          />
        </div>
      </>
    );
  };

  if (list) {
    var filteredData = list.filter((item) => {
      const itemString = JSON.stringify(item).toLowerCase();
      return itemString.includes(filterText.toLowerCase());
    });
  }

  return (
    <div>
      {view == "ProjectViewer" ? (
        <ProjectViewer back={back} data={currentProject} />
      ) : (
        <>
          {console.log("list view")}
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
    </div>
  );
};

export default ListView;
