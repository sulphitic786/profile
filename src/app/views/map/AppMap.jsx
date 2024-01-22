import { Box, Card, styled } from "@mui/material";
import { Breadcrumb } from "app/components";
import BasicMap from "./BasicMap";
import MarkerMap from "./MarkerMap";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const AppMap = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Map" }]} />
      </Box>

      <Card sx={{ mb: 4 }}>
        <BasicMap />
      </Card>

      <Card>
        <MarkerMap />
      </Card>
    </Container>
  );
};

export default AppMap;
