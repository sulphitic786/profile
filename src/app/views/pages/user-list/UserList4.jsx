import { Box, Grid, TablePagination } from "@mui/material";
import { Breadcrumb } from "app/components";
import useUsers from "app/hooks/useUsers";
import { useState } from "react";
import ProfileCard from "./ProfileCard";
import ProfileCard2 from "./ProfileCard2";
import { Container } from "./styles";

const UserList4 = () => {
  const { users } = useUsers();
  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (_, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Pages", path: "/pages" }, { name: "User List 4" }]} />
      </Box>

      <Grid container spacing={2}>
        <Grid item md={3} sm={12} xs={12}>
          <ProfileCard />
        </Grid>

        <Grid item md={9} sm={12} xs={12}>
          {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => (
            <ProfileCard2 key={user.id} user={user} />
          ))}

          <Box mt={2}>
            <TablePagination
              page={page}
              sx={{ px: 2 }}
              component="div"
              count={users.length}
              rowsPerPage={rowsPerPage}
              onPageChange={handleChangePage}
              rowsPerPageOptions={[10, 25, 50]}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserList4;
