import { Box, styled } from "@mui/material";
import Breadcrumb from "app/components/Breadcrumb";
import SimpleCard from "app/components/SimpleCard";
import SimpleHorizontalList from "./SimpleHorizontalList";
import SimpleListDnD from "./SimpleListDnD";
import TwoListDnD from "./TwoListDnD";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    margin: "30px",
    [theme.breakpoints.down("sm")]: { margin: "16px" },
  },
}));

const AppDragAndDrop = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: "others", path: "/drag-and-drop" }, { name: "Drag and Drop" }]}
        />
      </Box>

      <SimpleCard title="Simple List Drag and Drop">
        <SimpleListDnD />
      </SimpleCard>

      <Box sx={{ py: "12px" }} />

      <SimpleCard title="Simple Horizontal List Drag and Drop">
        <SimpleHorizontalList />
      </SimpleCard>

      <Box sx={{ py: "12px" }} />

      <SimpleCard title="Simple Two List Drag and Drop">
        <TwoListDnD />
      </SimpleCard>
    </Container>
  );
};

export default AppDragAndDrop;
