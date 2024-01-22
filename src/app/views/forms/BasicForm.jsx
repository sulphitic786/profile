import { Box, Card, styled } from "@mui/material";
import { Breadcrumb } from "app/components";
import SimpleForm from "../material-kit/forms/SimpleForm";

// styled component
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const BasicForm = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Forms", path: "/forms" }, { name: "Basic" }]} />
      </Box>

      <Card sx={{ px: 3, pt: 1, pb: 2 }}>
        <SimpleForm />
      </Card>
    </Container>
  );
};

export default BasicForm;
